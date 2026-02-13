/**
 * Firebase Configuration for Cyrus
 *
 * DYNAMIC IMPORT: Firebase SDK (109 MB in node_modules) is loaded lazily
 * via import() to prevent Webpack from including it in the HMR module graph.
 * This follows the same pattern used for Mermaid (65 MB).
 *
 * Types are exported statically (they're erased at compile time, zero cost).
 * All SDK operations go through getFirebaseDb() which triggers the lazy load.
 *
 * Shares the same Firebase project as IngredientScanner (aiingredientanalyzer).
 * Uses separate Firestore collections for task management.
 *
 * Collections:
 * - cyrus_tasks: Main task backlog
 *
 * @module lib/firebase
 */

// =============================================================================
// Firebase Configuration (static -- no SDK import)
// =============================================================================

const firebaseConfig = {
  apiKey: "REDACTED_FIREBASE_API_KEY",
  authDomain: "aiingredientanalyzer.firebaseapp.com",
  projectId: "aiingredientanalyzer",
  storageBucket: "aiingredientanalyzer.firebasestorage.app",
  messagingSenderId: "410617034936",
  appId: "1:410617034936:web:b148f2f395e2755430dc4d",
  measurementId: "G-4WQL0QWJGE",
};

// =============================================================================
// Task Types (compile-time only -- zero runtime cost)
// =============================================================================

export type TaskTag = "TechSense" | "ExecSpeak" | "Resume" | "TPM" | "BizSense";

export type TaskStatus = "backlog" | "weekly" | "done";

export interface Task {
  id: string;
  title: string;
  tag: TaskTag;
  status: TaskStatus;
  order: number;
  createdAt: number;
  completedAt?: number;
}

export interface TaskStore {
  tasks: Task[];
  lastUpdated: number;
}

// =============================================================================
// Lazy Firebase SDK Loading
// =============================================================================

// Firestore type imported only for internal typing (erased at compile time)
type FirestoreInstance = import("firebase/firestore").Firestore;

// Singleton: only load and initialize once
let dbPromise: Promise<FirestoreInstance> | null = null;

/**
 * Lazily load Firebase SDK and initialize Firestore.
 * First call triggers dynamic import of firebase/app + firebase/firestore.
 * Subsequent calls return the cached promise.
 */
function getFirebaseDb(): Promise<FirestoreInstance> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Firebase requires browser environment"));
  }

  if (dbPromise) return dbPromise;

  dbPromise = (async () => {
    // Dynamic imports -- these only load when this function is first called
    const { initializeApp, getApps } = await import("firebase/app");
    const { getFirestore } = await import("firebase/firestore");

    const app = getApps().length === 0
      ? initializeApp(firebaseConfig)
      : getApps()[0];

    return getFirestore(app);
  })();

  return dbPromise;
}

// =============================================================================
// Firestore Operations
// =============================================================================

const COLLECTION = "cyrus_tasks";
const DOC_ID = "nebula_owner";

/**
 * Get tasks from Firestore
 */
export async function getTasks(): Promise<Task[]> {
  try {
    const db = await getFirebaseDb();
    const { doc, getDoc } = await import("firebase/firestore");
    const docRef = doc(db, COLLECTION, DOC_ID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as TaskStore;
      return data.tasks || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

/**
 * Sanitize task to remove undefined values (Firestore doesn't accept undefined)
 */
function sanitizeTask(task: Task): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {
    id: task.id,
    title: task.title,
    tag: task.tag,
    status: task.status,
    order: task.order,
    createdAt: task.createdAt,
  };
  // Only include completedAt if it has a value
  if (task.completedAt !== undefined) {
    sanitized.completedAt = task.completedAt;
  }
  return sanitized;
}

/**
 * Save tasks to Firestore
 */
export async function saveTasks(tasks: Task[]): Promise<boolean> {
  try {
    const db = await getFirebaseDb();
    const { doc, setDoc } = await import("firebase/firestore");
    const docRef = doc(db, COLLECTION, DOC_ID);
    // Sanitize tasks to remove undefined values
    const sanitizedTasks = tasks.map(sanitizeTask);
    const store = {
      tasks: sanitizedTasks,
      lastUpdated: Date.now(),
    };
    await setDoc(docRef, store);
    return true;
  } catch (error) {
    console.error("Error saving tasks:", error);
    return false;
  }
}

/**
 * Subscribe to real-time task updates
 */
export async function subscribeToTasks(
  callback: (tasks: Task[]) => void
): Promise<() => void> {
  try {
    const db = await getFirebaseDb();
    const { doc, onSnapshot } = await import("firebase/firestore");
    const docRef = doc(db, COLLECTION, DOC_ID);

    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data() as TaskStore;
          callback(data.tasks || []);
        } else {
          callback([]);
        }
      },
      (error) => {
        console.error("Error subscribing to tasks:", error);
      }
    );

    return unsubscribe;
  } catch (error) {
    console.error("Error setting up task subscription:", error);
    return () => {};
  }
}

/**
 * Generate a unique task ID
 */
export function generateTaskId(): string {
  return `task_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}
