"use client";

import { useState, useEffect, useCallback } from "react";
import type {
  GTMData,
  Application,
  Story,
  MockInterview,
  Drill,
  NetworkingContact,
  DailyRhythm,
  GTMSettings,
} from "@/types/gtm";
import { EMPTY_GTM_DATA } from "@/types/gtm";
import { generateId } from "@/lib/gtm-utils";

const STORAGE_KEY = "cyrus_gtm_data";
const STORAGE_EVENT = "cyrus-gtm-storage";

function notifyGTMChange() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(STORAGE_EVENT));
}

function loadData(): GTMData {
  if (typeof window === "undefined") return EMPTY_GTM_DATA;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return EMPTY_GTM_DATA;
    return JSON.parse(stored) as GTMData;
  } catch {
    return EMPTY_GTM_DATA;
  }
}

function saveData(data: GTMData) {
  if (typeof window === "undefined") return;

  const updated = { ...data, lastUpdated: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyGTMChange();
}

export function useGTMData() {
  const [data, setData] = useState<GTMData>(EMPTY_GTM_DATA);
  const [isLoading, setIsLoading] = useState(true);

  // Load data on mount
  useEffect(() => {
    setData(loadData());
    setIsLoading(false);
  }, []);

  // Listen for changes from other tabs/components
  useEffect(() => {
    const handler = () => {
      setData(loadData());
    };

    window.addEventListener("storage", handler);
    window.addEventListener(STORAGE_EVENT, handler);

    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener(STORAGE_EVENT, handler);
    };
  }, []);

  // Update helper that persists to localStorage
  const updateData = useCallback((updater: (prev: GTMData) => GTMData) => {
    setData((prev) => {
      const updated = updater(prev);
      saveData(updated);
      return updated;
    });
  }, []);

  // Application CRUD
  const addApplication = useCallback(
    (app: Omit<Application, "id" | "createdAt">) => {
      updateData((prev) => ({
        ...prev,
        applications: [
          ...prev.applications,
          { ...app, id: generateId(), createdAt: Date.now() },
        ],
      }));
    },
    [updateData]
  );

  const updateApplication = useCallback(
    (id: string, updates: Partial<Application>) => {
      updateData((prev) => ({
        ...prev,
        applications: prev.applications.map((app) =>
          app.id === id ? { ...app, ...updates, lastUpdate: new Date().toISOString() } : app
        ),
      }));
    },
    [updateData]
  );

  const deleteApplication = useCallback(
    (id: string) => {
      updateData((prev) => ({
        ...prev,
        applications: prev.applications.filter((app) => app.id !== id),
      }));
    },
    [updateData]
  );

  // Story CRUD
  const addStory = useCallback(
    (story: Omit<Story, "id" | "createdAt">) => {
      updateData((prev) => ({
        ...prev,
        stories: [
          ...prev.stories,
          { ...story, id: generateId(), createdAt: Date.now() },
        ],
      }));
    },
    [updateData]
  );

  const updateStory = useCallback(
    (id: string, updates: Partial<Story>) => {
      updateData((prev) => ({
        ...prev,
        stories: prev.stories.map((story) =>
          story.id === id ? { ...story, ...updates } : story
        ),
      }));
    },
    [updateData]
  );

  const deleteStory = useCallback(
    (id: string) => {
      updateData((prev) => ({
        ...prev,
        stories: prev.stories.filter((story) => story.id !== id),
      }));
    },
    [updateData]
  );

  // Mock CRUD
  const addMock = useCallback(
    (mock: Omit<MockInterview, "id" | "createdAt">) => {
      updateData((prev) => ({
        ...prev,
        mocks: [...prev.mocks, { ...mock, id: generateId(), createdAt: Date.now() }],
      }));
    },
    [updateData]
  );

  const updateMock = useCallback(
    (id: string, updates: Partial<MockInterview>) => {
      updateData((prev) => ({
        ...prev,
        mocks: prev.mocks.map((mock) =>
          mock.id === id ? { ...mock, ...updates } : mock
        ),
      }));
    },
    [updateData]
  );

  const deleteMock = useCallback(
    (id: string) => {
      updateData((prev) => ({
        ...prev,
        mocks: prev.mocks.filter((mock) => mock.id !== id),
      }));
    },
    [updateData]
  );

  // Drill CRUD
  const addDrill = useCallback(
    (drill: Omit<Drill, "id" | "createdAt">) => {
      updateData((prev) => ({
        ...prev,
        drills: [...prev.drills, { ...drill, id: generateId(), createdAt: Date.now() }],
      }));
    },
    [updateData]
  );

  const updateDrill = useCallback(
    (id: string, updates: Partial<Drill>) => {
      updateData((prev) => ({
        ...prev,
        drills: prev.drills.map((drill) =>
          drill.id === id ? { ...drill, ...updates } : drill
        ),
      }));
    },
    [updateData]
  );

  const deleteDrill = useCallback(
    (id: string) => {
      updateData((prev) => ({
        ...prev,
        drills: prev.drills.filter((drill) => drill.id !== id),
      }));
    },
    [updateData]
  );

  // Networking CRUD
  const addNetworking = useCallback(
    (contact: Omit<NetworkingContact, "id" | "createdAt">) => {
      updateData((prev) => ({
        ...prev,
        networking: [
          ...prev.networking,
          { ...contact, id: generateId(), createdAt: Date.now() },
        ],
      }));
    },
    [updateData]
  );

  const updateNetworking = useCallback(
    (id: string, updates: Partial<NetworkingContact>) => {
      updateData((prev) => ({
        ...prev,
        networking: prev.networking.map((contact) =>
          contact.id === id ? { ...contact, ...updates } : contact
        ),
      }));
    },
    [updateData]
  );

  const deleteNetworking = useCallback(
    (id: string) => {
      updateData((prev) => ({
        ...prev,
        networking: prev.networking.filter((contact) => contact.id !== id),
      }));
    },
    [updateData]
  );

  // Daily Rhythm
  const updateRhythm = useCallback(
    (date: string, updates: Partial<DailyRhythm>) => {
      updateData((prev) => {
        const existing = prev.dailyRhythm.find((r) => r.date === date);
        if (existing) {
          return {
            ...prev,
            dailyRhythm: prev.dailyRhythm.map((r) =>
              r.date === date ? { ...r, ...updates } : r
            ),
          };
        } else {
          return {
            ...prev,
            dailyRhythm: [
              ...prev.dailyRhythm,
              {
                date,
                deepWork: false,
                applications: false,
                practice: false,
                debrief: false,
                notes: "",
                ...updates,
              },
            ],
          };
        }
      });
    },
    [updateData]
  );

  const toggleRhythmItem = useCallback(
    (date: string, item: keyof Omit<DailyRhythm, "date" | "notes">) => {
      updateData((prev) => {
        const existing = prev.dailyRhythm.find((r) => r.date === date);
        if (existing) {
          return {
            ...prev,
            dailyRhythm: prev.dailyRhythm.map((r) =>
              r.date === date ? { ...r, [item]: !r[item] } : r
            ),
          };
        } else {
          return {
            ...prev,
            dailyRhythm: [
              ...prev.dailyRhythm,
              {
                date,
                deepWork: false,
                applications: false,
                practice: false,
                debrief: false,
                notes: "",
                [item]: true,
              },
            ],
          };
        }
      });
    },
    [updateData]
  );

  // Settings
  const updateSettings = useCallback(
    (updates: Partial<GTMSettings>) => {
      updateData((prev) => ({
        ...prev,
        settings: { ...prev.settings, ...updates },
      }));
    },
    [updateData]
  );

  // Import/Export
  const exportData = useCallback((): string => {
    return JSON.stringify(data, null, 2);
  }, [data]);

  const importData = useCallback(
    (json: string): boolean => {
      try {
        const imported = JSON.parse(json) as GTMData;
        // Basic validation
        if (
          !Array.isArray(imported.applications) ||
          !Array.isArray(imported.stories) ||
          !imported.settings
        ) {
          return false;
        }
        setData(imported);
        saveData(imported);
        return true;
      } catch {
        return false;
      }
    },
    []
  );

  // Clear all data
  const clearAllData = useCallback(() => {
    setData(EMPTY_GTM_DATA);
    saveData(EMPTY_GTM_DATA);
  }, []);

  return {
    data,
    isLoading,

    // Application operations
    addApplication,
    updateApplication,
    deleteApplication,

    // Story operations
    addStory,
    updateStory,
    deleteStory,

    // Mock operations
    addMock,
    updateMock,
    deleteMock,

    // Drill operations
    addDrill,
    updateDrill,
    deleteDrill,

    // Networking operations
    addNetworking,
    updateNetworking,
    deleteNetworking,

    // Rhythm operations
    updateRhythm,
    toggleRhythmItem,

    // Settings
    updateSettings,

    // Import/Export
    exportData,
    importData,
    clearAllData,
  };
}
