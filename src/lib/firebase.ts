/**
 * Firebase Configuration for Cyrus
 *
 * Shares the same Firebase project as IngredientScanner (aiingredientanalyzer).
 * Uses separate Firestore collections for task management.
 *
 * Collections:
 * - cyrus_tasks: Main task backlog
 *
 * @module lib/firebase
 */

import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  Firestore,
} from "firebase/firestore";

// =============================================================================
// Firebase Configuration
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
// Firebase Initialization
// =============================================================================

let app: FirebaseApp;
let db: Firestore;

function initFirebase() {
  if (typeof window === "undefined") return;

  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  db = getFirestore(app);
}

// =============================================================================
// Task Types
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
// Firestore Operations
// =============================================================================

const COLLECTION = "cyrus_tasks";
const DOC_ID = "nebula_owner";

/**
 * Get tasks from Firestore
 */
export async function getTasks(): Promise<Task[]> {
  initFirebase();
  if (!db) return [];

  try {
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
 * Save tasks to Firestore
 */
export async function saveTasks(tasks: Task[]): Promise<boolean> {
  initFirebase();
  if (!db) return false;

  try {
    const docRef = doc(db, COLLECTION, DOC_ID);
    const store: TaskStore = {
      tasks,
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
export function subscribeToTasks(
  callback: (tasks: Task[]) => void
): () => void {
  initFirebase();
  if (!db) return () => {};

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
}

/**
 * Generate a unique task ID
 */
export function generateTaskId(): string {
  return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
