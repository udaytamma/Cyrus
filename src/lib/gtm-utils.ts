// GTM Job Search Tracker Utilities

import type { GTMData, GTMSettings, DailyRhythm } from "@/types/gtm";

// Generate unique ID
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

// Get current week number (1-6+)
export function getCurrentWeek(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();

  // Reset time to midnight for accurate day calculation
  start.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const diffTime = now.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const week = Math.floor(diffDays / 7) + 1;

  return Math.max(1, week);
}

// Get week date range
export function getWeekDateRange(
  startDate: string,
  weekNumber: number
): { start: Date; end: Date } {
  const campaignStart = new Date(startDate);
  campaignStart.setHours(0, 0, 0, 0);

  const weekStart = new Date(campaignStart);
  weekStart.setDate(weekStart.getDate() + (weekNumber - 1) * 7);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);

  return { start: weekStart, end: weekEnd };
}

// Get days remaining in current week
export function getDaysRemainingInWeek(startDate: string): number {
  const currentWeek = getCurrentWeek(startDate);
  const { end } = getWeekDateRange(startDate, currentWeek);
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const diffTime = end.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return Math.max(0, diffDays + 1);
}

// Format date for display
export function formatDate(dateString: string | null): string {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

// Format date with year
export function formatDateFull(dateString: string | null): string {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Get today's date as YYYY-MM-DD
export function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}

// Calculate weekly metrics
export function calculateWeeklyMetrics(
  data: GTMData,
  weekNumber: number
): {
  applications: number;
  mocks: number;
  drills: number;
  networking: number;
} {
  const { start, end } = getWeekDateRange(data.settings.startDate, weekNumber);

  const isInWeek = (dateStr: string | null | number): boolean => {
    if (!dateStr) return false;
    const date = new Date(typeof dateStr === "number" ? dateStr : dateStr);
    return date >= start && date <= end;
  };

  return {
    applications: data.applications.filter(
      (a) => a.appliedDate && isInWeek(a.appliedDate)
    ).length,
    mocks: data.mocks.filter((m) => isInWeek(m.date)).length,
    drills: data.drills.filter((d) => isInWeek(d.date)).length,
    networking: data.networking.filter(
      (n) => n.status !== "identified" && isInWeek(n.lastContact)
    ).length,
  };
}

// Calculate pipeline funnel counts
export function calculatePipelineFunnel(
  data: GTMData
): Record<string, number> {
  const funnel = {
    researching: 0,
    applied: 0,
    screen: 0,
    technical: 0,
    loop: 0,
    offer: 0,
    rejected: 0,
    withdrawn: 0,
  };

  data.applications.forEach((app) => {
    funnel[app.status]++;
  });

  return funnel;
}

// Get active applications (not rejected/withdrawn)
export function getActiveApplications(data: GTMData) {
  return data.applications.filter(
    (a) => a.status !== "rejected" && a.status !== "withdrawn"
  );
}

// Get today's rhythm or create empty one
export function getTodayRhythm(data: GTMData): DailyRhythm {
  const today = getTodayString();
  const existing = data.dailyRhythm.find((r) => r.date === today);

  if (existing) return existing;

  return {
    date: today,
    deepWork: false,
    applications: false,
    practice: false,
    debrief: false,
    notes: "",
  };
}

// Calculate overall progress percentage
export function calculateOverallProgress(
  data: GTMData,
  currentWeek: number
): number {
  const { weeklyTargets } = data.settings;

  // Sum up all completed items across all weeks up to current
  let totalCompleted = 0;
  let totalTarget = 0;

  for (let week = 1; week <= Math.min(currentWeek, 6); week++) {
    const metrics = calculateWeeklyMetrics(data, week);
    totalCompleted +=
      metrics.applications + metrics.mocks + metrics.drills + metrics.networking;
    totalTarget +=
      weeklyTargets.applications +
      weeklyTargets.mocks +
      weeklyTargets.drills +
      weeklyTargets.networking;
  }

  if (totalTarget === 0) return 0;
  return Math.round((totalCompleted / totalTarget) * 100);
}

// Get recent activity across all sections
export function getRecentActivity(
  data: GTMData,
  limit: number = 5
): Array<{
  type: "application" | "mock" | "drill" | "networking" | "story";
  title: string;
  subtitle: string;
  timestamp: number;
}> {
  const activities: Array<{
    type: "application" | "mock" | "drill" | "networking" | "story";
    title: string;
    subtitle: string;
    timestamp: number;
  }> = [];

  data.applications.forEach((app) => {
    activities.push({
      type: "application",
      title: `${app.company} - ${app.role}`,
      subtitle: `Status: ${app.status}`,
      timestamp: app.createdAt,
    });
  });

  data.mocks.forEach((mock) => {
    activities.push({
      type: "mock",
      title: `${mock.type} mock with ${mock.partner}`,
      subtitle: mock.topic,
      timestamp: mock.createdAt,
    });
  });

  data.drills.forEach((drill) => {
    activities.push({
      type: "drill",
      title: drill.prompt.substring(0, 50) + (drill.prompt.length > 50 ? "..." : ""),
      subtitle: `${drill.elementsCompleted.length} elements covered`,
      timestamp: drill.createdAt,
    });
  });

  data.networking.forEach((contact) => {
    activities.push({
      type: "networking",
      title: `${contact.name} at ${contact.company}`,
      subtitle: `Status: ${contact.status}`,
      timestamp: contact.createdAt,
    });
  });

  data.stories.forEach((story) => {
    activities.push({
      type: "story",
      title: story.title,
      subtitle: `Category: ${story.category}`,
      timestamp: story.createdAt,
    });
  });

  return activities
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, limit);
}

// Export data as JSON string
export function exportGTMData(data: GTMData): string {
  return JSON.stringify(data, null, 2);
}

// Validate imported data
export function validateGTMData(json: string): GTMData | null {
  try {
    const data = JSON.parse(json);

    // Basic structure validation
    if (
      !Array.isArray(data.applications) ||
      !Array.isArray(data.stories) ||
      !Array.isArray(data.mocks) ||
      !Array.isArray(data.drills) ||
      !Array.isArray(data.networking) ||
      !Array.isArray(data.dailyRhythm) ||
      !data.settings
    ) {
      return null;
    }

    return data as GTMData;
  } catch {
    return null;
  }
}

// Calculate streak for daily rhythm
export function calculateRhythmStreak(data: GTMData): number {
  const rhythms = [...data.dailyRhythm].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  let streak = 0;
  const today = getTodayString();
  let currentDate = new Date(today);

  for (const rhythm of rhythms) {
    const rhythmDate = new Date(rhythm.date);
    const expectedDate = new Date(currentDate);

    if (rhythmDate.toISOString().split("T")[0] !== expectedDate.toISOString().split("T")[0]) {
      break;
    }

    // Check if all items completed
    if (rhythm.deepWork && rhythm.applications && rhythm.practice && rhythm.debrief) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
