import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Authentication | AI Ingredient Scanner",
  description: "Firebase Authentication and user management for the AI Ingredient Scanner mobile app.",
};

export default function AuthenticationPage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Authentication</h1>

        <p className="lead">
          The AI Ingredient Scanner uses Firebase Authentication for user management, with Google Sign-In as the primary authentication method and optional guest mode for anonymous usage.
        </p>

        <hr />

        <h2>Overview</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌────────────────────────────────────────────────────────────────┐
│                    AUTHENTICATION FLOW                          │
│                                                                 │
│     ┌────────┐                                                  │
│     │  User  │                                                  │
│     └───┬────┘                                                  │
│         │                                                       │
│         ▼                                                       │
│   ┌───────────────┐                                            │
│   │  Auth State?  │                                            │
│   └───────┬───────┘                                            │
│           │                                                     │
│     ┌─────┴─────┬──────────────────┐                           │
│     ▼           ▼                  ▼                           │
│ [Not Signed] [Guest Mode]    [Signed In]                       │
│     │           │                  │                           │
│     ▼           │                  │                           │
│ ┌───────────┐   │                  │                           │
│ │  Login    │   │                  │                           │
│ │  Screen   │   │                  │                           │
│ └─────┬─────┘   │                  │                           │
│       │         │                  │                           │
│  ┌────┴────┐    │                  │                           │
│  ▼         ▼    │                  │                           │
│[Google] [Guest] │                  │                           │
│  │         │    │                  │                           │
│  ▼         │    │                  │                           │
│┌──────────┐│    │                  │                           │
││ Firebase ││    │                  │                           │
││   Auth   ││    │                  │                           │
│└────┬─────┘│    │                  │                           │
│     │      │    │                  │                           │
│     ▼      │    │                  │                           │
│┌──────────┐│    │                  │                           │
││ Firestore││    │                  │                           │
││   Sync   ││    │                  │                           │
│└────┬─────┘│    │                  │                           │
│     │      │    │                  │                           │
│     └──────┴────┴──────────────────┘                           │
│                  │                                              │
│                  ▼                                              │
│            ┌──────────┐                                        │
│            │   Home   │                                        │
│            │  Screen  │                                        │
│            └──────────┘                                        │
└────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Features</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Google Sign-In</td>
                <td className="px-4 py-3 text-muted-foreground">OAuth 2.0 authentication via Firebase</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Guest Mode</td>
                <td className="px-4 py-3 text-muted-foreground">Anonymous usage without account</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Profile Sync</td>
                <td className="px-4 py-3 text-muted-foreground">Firestore persistence across devices</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Preferences Sync</td>
                <td className="px-4 py-3 text-muted-foreground">Allergies, skin type, theme saved to cloud</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Account Deletion</td>
                <td className="px-4 py-3 text-muted-foreground">GDPR-compliant data removal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Authentication Flow</h2>

        <h3>1. Initial State</h3>

        <p>
          When the app launches, it checks for an existing Firebase session:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// AuthContext.tsx
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
    setUser(firebaseUser);
    if (firebaseUser) {
      await syncUserToFirestore(firebaseUser);
    }
    setLoading(false);
  });
  return () => unsubscribe();
}, []);`}
        </pre>

        <h3>2. Login Screen Options</h3>

        <ul>
          <li><strong>Continue with Google:</strong> Full authentication with profile sync</li>
          <li><strong>Continue as Guest:</strong> Anonymous mode (no data persistence)</li>
        </ul>

        <h3>3. Google Sign-In</h3>

        <p>
          Platform-specific implementation for web and native:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const signInWithGoogle = async () => {
  if (Platform.OS === 'web') {
    // Web: Firebase popup
    await signInWithPopup(auth, googleProvider);
  } else {
    // Native: Expo Auth Session
    await promptAsync();
  }
};`}
        </pre>

        <h3>4. Firestore Profile Sync</h3>

        <p>
          On successful sign-in, user data syncs to Firestore:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// User document structure
interface FirestoreUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  provider: string;
  createdAt: Timestamp;
  lastLoginAt: Timestamp;
  preferences?: {
    allergies: string[];
    skinType: SkinType;
    expertise: ExpertiseLevel;
    theme: ThemeMode;
  };
}`}
        </pre>

        <hr />

        <h2>Preferences Sync</h2>

        <p>
          User preferences are managed by <code>PreferencesContext</code> and automatically synced:
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border-2 border-green-500 bg-green-500/10 p-4">
            <div className="font-semibold text-green-600 dark:text-green-400">Authenticated Users</div>
            <div className="text-sm text-muted-foreground">Debounced save to Firestore → Synced across devices</div>
          </div>
          <div className="rounded-lg border-2 border-yellow-500 bg-yellow-500/10 p-4">
            <div className="font-semibold text-yellow-600 dark:text-yellow-400">Guest Users</div>
            <div className="text-sm text-muted-foreground">Save to AsyncStorage → Local only</div>
          </div>
        </div>

        <h3>Synced Preferences</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Preference</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">allergies</td>
                <td className="px-4 py-3 text-muted-foreground">Known allergens to flag</td>
                <td className="px-4 py-3 font-mono text-xs">[]</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">skinType</td>
                <td className="px-4 py-3 text-muted-foreground">Skin type for cosmetic analysis</td>
                <td className="px-4 py-3 font-mono text-xs">normal</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">expertise</td>
                <td className="px-4 py-3 text-muted-foreground">Explanation complexity</td>
                <td className="px-4 py-3 font-mono text-xs">beginner</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">theme</td>
                <td className="px-4 py-3 text-muted-foreground">Light or dark mode</td>
                <td className="px-4 py-3 font-mono text-xs">light</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Auto-Save with Debouncing</h3>

        <p>
          Preferences are saved with a 1-second debounce to prevent excessive writes:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const debouncedSave = useCallback((newPrefs: UserPreferences) => {
  if (saveTimeoutRef.current) {
    clearTimeout(saveTimeoutRef.current);
  }

  saveTimeoutRef.current = setTimeout(async () => {
    if (user) {
      await setDoc(doc(db, 'users', user.uid),
        { preferences: newPrefs },
        { merge: true }
      );
    }
  }, 1000);
}, [user]);`}
        </pre>

        <hr />

        <h2>Firebase Configuration</h2>

        <h3>Setup</h3>

        <p>
          Firebase is configured in <code>src/config/firebase.ts</code>:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-project.firebaseapp.com',
  projectId: 'your-project-id',
  storageBucket: 'your-project.appspot.com',
  messagingSenderId: 'your-sender-id',
  appId: 'your-app-id',
  measurementId: 'your-measurement-id',
};`}
        </pre>

        <h3>OAuth Configuration</h3>

        <p>
          For Google Sign-In to work:
        </p>

        <ol>
          <li><strong>Firebase Console:</strong> Enable Google provider in Authentication</li>
          <li><strong>Google Cloud Console:</strong> Configure OAuth consent screen</li>
          <li><strong>Web Client ID:</strong> Add to <code>AuthContext.tsx</code></li>
        </ol>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const [request, response, promptAsync] = Google.useAuthRequest({
  webClientId: 'your-oauth-client-id.apps.googleusercontent.com',
});`}
        </pre>

        <hr />

        <h2>User Management</h2>

        <h3>Sign Out</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const signOut = async () => {
  await firebaseSignOut(auth);
  setUserProfile(null);
};`}
        </pre>

        <h3>Account Deletion (GDPR-Compliant)</h3>

        <p>
          Deletion removes all user data from Firestore and Firebase Auth:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const deleteAccount = async () => {
  // 1. Delete scan history subcollection
  const scansRef = collection(db, 'users', user.uid, 'scans');
  const scansSnap = await getDocs(scansRef);

  const batch = writeBatch(db);
  scansSnap.docs.forEach((scanDoc) => {
    batch.delete(scanDoc.ref);
  });

  // 2. Delete user document
  batch.delete(doc(db, 'users', user.uid));
  await batch.commit();

  // 3. Delete Firebase auth user
  await deleteUser(user);
};`}
        </pre>

        <hr />

        <h2>Firestore Security Rules</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;

      // Scan history subcollection
      match /scans/{scanId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}`}
        </pre>

        <hr />

        <h2>UI Components</h2>

        <h3>Login Screen</h3>

        <p>
          Premium gradient design with:
        </p>

        <ul>
          <li>App branding and logo</li>
          <li>Feature pills (Scan Labels, AI Analysis, Allergy Alerts)</li>
          <li>Google Sign-In button</li>
          <li>Guest mode option</li>
          <li>Privacy policy link</li>
        </ul>

        <h3>Profile Section</h3>

        <p>
          In Settings, authenticated users see:
        </p>

        <ul>
          <li><strong>ProfileAvatar:</strong> Google photo or colored initial fallback</li>
          <li>Display name and email address</li>
          <li>Sign Out button</li>
          <li>Privacy Policy (in-app modal)</li>
          <li>Collapsible <strong>Danger Zone</strong> with Delete Account option</li>
        </ul>

        <p>
          Guest users see:
        </p>

        <ul>
          <li>Guest mode avatar with &quot;G&quot; initial</li>
          <li>Sign In with Google button</li>
          <li>Privacy Policy link</li>
        </ul>

        <h3>Danger Zone Pattern</h3>

        <p>
          Account deletion is protected by a collapsible section to prevent accidental clicks:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const [showDangerZone, setShowDangerZone] = useState(false);

// Toggle with smooth animation
const toggleDangerZone = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setShowDangerZone(!showDangerZone);
};`}
        </pre>

        <hr />

        <h2>Privacy Policy</h2>

        <p>
          The privacy policy is displayed in-app via <code>PrivacyPolicyModal</code>. It covers:
        </p>

        <ul>
          <li>Data collection and usage</li>
          <li>User rights (access, update, delete)</li>
          <li>Third-party services (Firebase, Google)</li>
          <li>Data retention policies</li>
        </ul>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/mobile-setup"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Setup Guide →</div>
            <div className="text-sm text-muted-foreground">Getting the app running</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/theme-system"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Theme System →</div>
            <div className="text-sm text-muted-foreground">Dark/Light mode implementation</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/mobile-components"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Components →</div>
            <div className="text-sm text-muted-foreground">UI component documentation</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
