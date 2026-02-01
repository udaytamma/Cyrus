"use client";

import { useState } from "react";
import { GTMLayout, ProgressBar } from "@/components/gtm";
import { useGTM } from "@/context/GTMContext";
import { DailyRhythm } from "@/types/gtm";
import { getTodayString, formatDateFull } from "@/lib/gtm-utils";

const rhythmBlocks = [
  {
    key: "deepWork" as const,
    label: "Deep Work",
    time: "8:00 - 9:30 AM",
    description: "System design drill, tech prep, or story refinement",
    icon: "🧠",
  },
  {
    key: "applications" as const,
    label: "Applications",
    time: "10:00 AM - 12:00 PM",
    description: "Apply to jobs, networking outreach, recruiter calls",
    icon: "💼",
  },
  {
    key: "practice" as const,
    label: "Practice",
    time: "1:00 - 2:30 PM",
    description: "Mock interviews, cloud translation, skill building",
    icon: "🎯",
  },
  {
    key: "debrief" as const,
    label: "Debrief",
    time: "8:00 - 8:15 PM",
    description: "Daily review: what landed, what fell flat, what changes tomorrow",
    icon: "📝",
  },
];

function RhythmContent() {
  const { data, updateRhythm, toggleRhythmItem, rhythmStreak } = useGTM();
  const [selectedDate, setSelectedDate] = useState(getTodayString());

  // Get rhythm for selected date
  const currentRhythm: DailyRhythm = data.dailyRhythm.find((r) => r.date === selectedDate) || {
    date: selectedDate,
    deepWork: false,
    applications: false,
    practice: false,
    debrief: false,
    notes: "",
  };

  // Calculate completion
  const completed = rhythmBlocks.filter((block) => currentRhythm[block.key]).length;
  const isToday = selectedDate === getTodayString();

  // Get last 7 days for quick navigation
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split("T")[0];
  });

  const handleToggle = (key: keyof Omit<DailyRhythm, "date" | "notes">) => {
    toggleRhythmItem(selectedDate, key);
  };

  const handleNotesChange = (notes: string) => {
    updateRhythm(selectedDate, { notes });
  };

  // Get rhythm completion for a date
  const getDateCompletion = (date: string): number => {
    const rhythm = data.dailyRhythm.find((r) => r.date === date);
    if (!rhythm) return 0;
    return rhythmBlocks.filter((block) => rhythm[block.key]).length;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Daily Rhythm</h1>
          <p className="text-muted-foreground mt-1">
            Stay consistent with your daily operating cadence
          </p>
        </div>
        {rhythmStreak > 0 && (
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500">🔥 {rhythmStreak}</div>
            <div className="text-sm text-muted-foreground">day streak</div>
          </div>
        )}
      </div>

      {/* Date Navigation */}
      <div className="flex flex-wrap gap-2">
        {last7Days.map((date) => {
          const completion = getDateCompletion(date);
          const isSelected = date === selectedDate;
          const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "short" });
          const dayNum = new Date(date).getDate();

          return (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`flex flex-col items-center p-3 rounded-lg border transition-colors min-w-[60px] ${
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <span className="text-xs text-muted-foreground">{dayName}</span>
              <span className="text-lg font-bold text-foreground">{dayNum}</span>
              <div className="flex gap-0.5 mt-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i < completion ? "bg-emerald-500" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </button>
          );
        })}
        <div className="flex items-center">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
          />
        </div>
      </div>

      {/* Progress */}
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">
            {isToday ? "Today" : formatDateFull(selectedDate)}
          </span>
          <span className="text-sm text-muted-foreground">
            {completed} / 4 blocks completed
          </span>
        </div>
        <ProgressBar value={completed} max={4} size="lg" colorScheme="primary" />
      </div>

      {/* Time Blocks */}
      <div className="grid gap-4">
        {rhythmBlocks.map((block) => {
          const isCompleted = currentRhythm[block.key];

          return (
            <div
              key={block.key}
              onClick={() => handleToggle(block.key)}
              className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                isCompleted
                  ? "border-emerald-500/30 bg-emerald-500/10"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                  isCompleted ? "bg-emerald-500/20" : "bg-muted"
                }`}
              >
                {isCompleted ? "✓" : block.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-medium text-foreground">{block.label}</h3>
                  <span className="text-sm text-muted-foreground">{block.time}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{block.description}</p>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  isCompleted
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-muted-foreground"
                }`}
              >
                {isCompleted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Notes */}
      <div className="rounded-lg border border-border bg-card p-4">
        <label className="block text-sm font-medium text-foreground mb-2">
          Daily Notes
        </label>
        <textarea
          value={currentRhythm.notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
          placeholder="What did you accomplish? What needs adjustment tomorrow?"
        />
      </div>

      {/* Non-negotiable Rule */}
      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
        <div className="flex items-start gap-3">
          <span className="text-xl">⚠️</span>
          <div>
            <h3 className="font-medium text-amber-500">Non-negotiable Rule</h3>
            <p className="text-sm text-foreground mt-1">
              After every recruiter screen, phone screen, or mock — same-day debrief. What landed,
              what fell flat, what changes tomorrow. Write it down. This is how the feedback loop
              stays tight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RhythmPage() {
  return (
    <GTMLayout>
      <RhythmContent />
    </GTMLayout>
  );
}
