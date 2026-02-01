// GTM Job Search Tracker Types

// Application Pipeline Statuses
export type ApplicationStatus =
  | "researching"
  | "applied"
  | "screen"
  | "technical"
  | "loop"
  | "offer"
  | "rejected"
  | "withdrawn";

// STAR Story Categories
export type StoryCategory =
  | "leadership"
  | "conflict"
  | "failure"
  | "impact"
  | "ambiguity"
  | "technical"
  | "stakeholder"
  | "delivery";

// Mock Interview Types
export type MockType = "behavioral" | "system-design" | "product" | "case";

// Networking Contact Status
export type NetworkingStatus =
  | "identified"
  | "reached-out"
  | "responded"
  | "scheduled"
  | "completed"
  | "follow-up";

// Connection Types
export type ConnectionType = "recruiter" | "hiring-manager" | "employee" | "alumni";

// Rating Scale
export type Rating = 1 | 2 | 3 | 4 | 5;

// Core Entities
export interface Application {
  id: string;
  company: string;
  role: string;
  team?: string;
  status: ApplicationStatus;
  appliedDate: string | null;
  lastUpdate: string;
  referralPath: string | null;
  hiringManager?: string;
  jobUrl: string | null;
  notes: string;
  storyFit?: string;
  createdAt: number;
}

export interface Story {
  id: string;
  title: string;
  category: StoryCategory;
  situation: string;
  task: string;
  action: string;
  result: string;
  shortVersion: string;
  metrics: string[];
  practiceCount: number;
  lastPracticed: string | null;
  createdAt: number;
}

export interface MockInterview {
  id: string;
  type: MockType;
  date: string;
  partner: string;
  topic: string;
  duration: number;
  feedback: string;
  rating: Rating;
  areasToImprove: string[];
  createdAt: number;
}

export interface Drill {
  id: string;
  prompt: string;
  date: string;
  duration: number;
  elementsCompleted: string[];
  selfRating: Rating;
  feedback: string;
  createdAt: number;
}

export interface NetworkingContact {
  id: string;
  name: string;
  company: string;
  role: string;
  status: NetworkingStatus;
  linkedinUrl: string | null;
  email: string | null;
  connectionType: ConnectionType;
  notes: string;
  lastContact: string | null;
  createdAt: number;
}

export interface DailyRhythm {
  date: string;
  deepWork: boolean;
  applications: boolean;
  practice: boolean;
  debrief: boolean;
  notes: string;
}

export interface GTMSettings {
  startDate: string;
  weeklyTargets: {
    applications: number;
    mocks: number;
    drills: number;
    networking: number;
  };
}

export interface GTMData {
  applications: Application[];
  stories: Story[];
  mocks: MockInterview[];
  drills: Drill[];
  networking: NetworkingContact[];
  dailyRhythm: DailyRhythm[];
  settings: GTMSettings;
  lastUpdated: number;
}

// Status color mappings
export const APPLICATION_STATUS_CONFIG: Record<
  ApplicationStatus,
  { label: string; bg: string; text: string }
> = {
  researching: { label: "Researching", bg: "bg-slate-500/15", text: "text-slate-400" },
  applied: { label: "Applied", bg: "bg-blue-500/15", text: "text-blue-400" },
  screen: { label: "Screen", bg: "bg-cyan-500/15", text: "text-cyan-400" },
  technical: { label: "Technical", bg: "bg-violet-500/15", text: "text-violet-400" },
  loop: { label: "Loop", bg: "bg-amber-500/15", text: "text-amber-400" },
  offer: { label: "Offer", bg: "bg-emerald-500/15", text: "text-emerald-400" },
  rejected: { label: "Rejected", bg: "bg-red-500/15", text: "text-red-400" },
  withdrawn: { label: "Withdrawn", bg: "bg-gray-500/15", text: "text-gray-400" },
};

export const NETWORKING_STATUS_CONFIG: Record<
  NetworkingStatus,
  { label: string; bg: string; text: string }
> = {
  identified: { label: "Identified", bg: "bg-slate-500/15", text: "text-slate-400" },
  "reached-out": { label: "Reached Out", bg: "bg-blue-500/15", text: "text-blue-400" },
  responded: { label: "Responded", bg: "bg-cyan-500/15", text: "text-cyan-400" },
  scheduled: { label: "Scheduled", bg: "bg-violet-500/15", text: "text-violet-400" },
  completed: { label: "Completed", bg: "bg-emerald-500/15", text: "text-emerald-400" },
  "follow-up": { label: "Follow Up", bg: "bg-amber-500/15", text: "text-amber-400" },
};

export const STORY_CATEGORY_CONFIG: Record<
  StoryCategory,
  { label: string; bg: string; text: string }
> = {
  leadership: { label: "Leadership", bg: "bg-amber-500/15", text: "text-amber-400" },
  conflict: { label: "Conflict", bg: "bg-red-500/15", text: "text-red-400" },
  failure: { label: "Failure", bg: "bg-rose-500/15", text: "text-rose-400" },
  impact: { label: "Impact", bg: "bg-emerald-500/15", text: "text-emerald-400" },
  ambiguity: { label: "Ambiguity", bg: "bg-violet-500/15", text: "text-violet-400" },
  technical: { label: "Technical", bg: "bg-blue-500/15", text: "text-blue-400" },
  stakeholder: { label: "Stakeholder", bg: "bg-cyan-500/15", text: "text-cyan-400" },
  delivery: { label: "Delivery", bg: "bg-teal-500/15", text: "text-teal-400" },
};

export const MOCK_TYPE_CONFIG: Record<
  MockType,
  { label: string; bg: string; text: string }
> = {
  behavioral: { label: "Behavioral", bg: "bg-blue-500/15", text: "text-blue-400" },
  "system-design": { label: "System Design", bg: "bg-violet-500/15", text: "text-violet-400" },
  product: { label: "Product", bg: "bg-emerald-500/15", text: "text-emerald-400" },
  case: { label: "Case Study", bg: "bg-amber-500/15", text: "text-amber-400" },
};

// System design drill elements
export const DRILL_ELEMENTS = [
  "Requirements & SLOs",
  "API Design",
  "Data Model",
  "High-Level Architecture",
  "Cell-Based Partitioning",
  "Control Plane vs Data Plane",
  "CAP/PACELC Trade-offs",
  "Failure Mode Analysis",
  "Scalability Discussion",
  "Monitoring & Observability",
] as const;

export type DrillElement = (typeof DRILL_ELEMENTS)[number];

// Default settings
export const DEFAULT_GTM_SETTINGS: GTMSettings = {
  startDate: new Date().toISOString().split("T")[0],
  weeklyTargets: {
    applications: 12,
    mocks: 3,
    drills: 3,
    networking: 7,
  },
};

// Empty data state
export const EMPTY_GTM_DATA: GTMData = {
  applications: [],
  stories: [],
  mocks: [],
  drills: [],
  networking: [],
  dailyRhythm: [],
  settings: DEFAULT_GTM_SETTINGS,
  lastUpdated: Date.now(),
};
