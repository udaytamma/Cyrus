"use client";

import {
  createContext,
  useContext,
  useMemo,
  ReactNode,
} from "react";
import { useGTMData } from "@/hooks/useGTMData";
import {
  getCurrentWeek,
  getWeekDateRange,
  getDaysRemainingInWeek,
  calculateWeeklyMetrics,
  calculatePipelineFunnel,
  calculateOverallProgress,
  getRecentActivity,
  getTodayRhythm,
  calculateRhythmStreak,
} from "@/lib/gtm-utils";
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

interface GTMContextType {
  // Data
  data: GTMData;
  isLoading: boolean;

  // Computed values
  currentWeek: number;
  weekDateRange: { start: Date; end: Date };
  daysRemaining: number;
  weeklyMetrics: {
    applications: number;
    mocks: number;
    drills: number;
    networking: number;
  };
  pipelineFunnel: Record<string, number>;
  overallProgress: number;
  recentActivity: ReturnType<typeof getRecentActivity>;
  todayRhythm: DailyRhythm;
  rhythmStreak: number;

  // Application operations
  addApplication: (app: Omit<Application, "id" | "createdAt">) => void;
  updateApplication: (id: string, updates: Partial<Application>) => void;
  deleteApplication: (id: string) => void;

  // Story operations
  addStory: (story: Omit<Story, "id" | "createdAt">) => void;
  updateStory: (id: string, updates: Partial<Story>) => void;
  deleteStory: (id: string) => void;

  // Mock operations
  addMock: (mock: Omit<MockInterview, "id" | "createdAt">) => void;
  updateMock: (id: string, updates: Partial<MockInterview>) => void;
  deleteMock: (id: string) => void;

  // Drill operations
  addDrill: (drill: Omit<Drill, "id" | "createdAt">) => void;
  updateDrill: (id: string, updates: Partial<Drill>) => void;
  deleteDrill: (id: string) => void;

  // Networking operations
  addNetworking: (contact: Omit<NetworkingContact, "id" | "createdAt">) => void;
  updateNetworking: (id: string, updates: Partial<NetworkingContact>) => void;
  deleteNetworking: (id: string) => void;

  // Rhythm operations
  updateRhythm: (date: string, updates: Partial<DailyRhythm>) => void;
  toggleRhythmItem: (date: string, item: keyof Omit<DailyRhythm, "date" | "notes">) => void;

  // Settings
  updateSettings: (updates: Partial<GTMSettings>) => void;

  // Import/Export
  exportData: () => string;
  importData: (json: string) => boolean;
  clearAllData: () => void;
}

const GTMContext = createContext<GTMContextType | undefined>(undefined);

export function GTMProvider({ children }: { children: ReactNode }) {
  const gtmData = useGTMData();
  const { data, isLoading } = gtmData;

  // Computed values
  const currentWeek = useMemo(
    () => getCurrentWeek(data.settings.startDate),
    [data.settings.startDate]
  );

  const weekDateRange = useMemo(
    () => getWeekDateRange(data.settings.startDate, currentWeek),
    [data.settings.startDate, currentWeek]
  );

  const daysRemaining = useMemo(
    () => getDaysRemainingInWeek(data.settings.startDate),
    [data.settings.startDate]
  );

  const weeklyMetrics = useMemo(
    () => calculateWeeklyMetrics(data, currentWeek),
    [data, currentWeek]
  );

  const pipelineFunnel = useMemo(
    () => calculatePipelineFunnel(data),
    [data]
  );

  const overallProgress = useMemo(
    () => calculateOverallProgress(data, currentWeek),
    [data, currentWeek]
  );

  const recentActivity = useMemo(
    () => getRecentActivity(data, 5),
    [data]
  );

  const todayRhythm = useMemo(
    () => getTodayRhythm(data),
    [data]
  );

  const rhythmStreak = useMemo(
    () => calculateRhythmStreak(data),
    [data]
  );

  const value: GTMContextType = {
    ...gtmData,
    currentWeek,
    weekDateRange,
    daysRemaining,
    weeklyMetrics,
    pipelineFunnel,
    overallProgress,
    recentActivity,
    todayRhythm,
    rhythmStreak,
  };

  return <GTMContext.Provider value={value}>{children}</GTMContext.Provider>;
}

export function useGTM() {
  const context = useContext(GTMContext);
  if (context === undefined) {
    throw new Error("useGTM must be used within a GTMProvider");
  }
  return context;
}
