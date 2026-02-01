"use client";

import { GTMLayout, MetricCard, PipelineFunnel, ProgressBar } from "@/components/gtm";
import { useGTM } from "@/context/GTMContext";
import { formatDate } from "@/lib/gtm-utils";
import Link from "next/link";

// Activity type icons
const activityIcons = {
  application: "💼",
  mock: "🎭",
  drill: "🔧",
  networking: "🤝",
  story: "📖",
};

function DashboardContent() {
  const {
    data,
    isLoading,
    currentWeek,
    daysRemaining,
    weeklyMetrics,
    pipelineFunnel,
    overallProgress,
    recentActivity,
    todayRhythm,
    rhythmStreak,
  } = useGTM();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const { weeklyTargets } = data.settings;

  // Calculate today's rhythm completion
  const rhythmItems = ["deepWork", "applications", "practice", "debrief"] as const;
  const completedRhythm = rhythmItems.filter((item) => todayRhythm[item]).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">GTM Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Week {Math.min(currentWeek, 6)} of 6 &middot; {daysRemaining} day
            {daysRemaining !== 1 ? "s" : ""} remaining
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Overall Progress</div>
          <div className="text-3xl font-bold text-primary">{overallProgress}%</div>
        </div>
      </div>

      {/* Campaign Progress Bar */}
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">6-Week Campaign Progress</span>
          <span className="text-sm text-muted-foreground">
            Week {Math.min(currentWeek, 6)} / 6
          </span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5, 6].map((week) => (
            <div
              key={week}
              className={`flex-1 h-2 rounded ${
                week < currentWeek
                  ? "bg-emerald-500"
                  : week === currentWeek
                    ? "bg-primary"
                    : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Weekly Metrics */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">This Week&apos;s Progress</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Applications"
            value={weeklyMetrics.applications}
            target={weeklyTargets.applications}
            icon="💼"
            subtitle="Submitted this week"
          />
          <MetricCard
            label="Mock Interviews"
            value={weeklyMetrics.mocks}
            target={weeklyTargets.mocks}
            icon="🎭"
            subtitle="Completed this week"
          />
          <MetricCard
            label="System Design Drills"
            value={weeklyMetrics.drills}
            target={weeklyTargets.drills}
            icon="🔧"
            subtitle="Practiced this week"
          />
          <MetricCard
            label="Networking"
            value={weeklyMetrics.networking}
            target={weeklyTargets.networking}
            icon="🤝"
            subtitle="Outreaches this week"
          />
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pipeline Funnel */}
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Application Pipeline</h2>
            <Link
              href="/gtm/applications"
              className="text-sm text-primary hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <PipelineFunnel funnel={pipelineFunnel} />
        </div>

        {/* Today's Rhythm + Quick Actions */}
        <div className="space-y-6">
          {/* Today's Rhythm */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Today&apos;s Rhythm</h2>
              {rhythmStreak > 0 && (
                <span className="text-sm text-amber-500 font-medium">
                  🔥 {rhythmStreak} day streak
                </span>
              )}
            </div>
            <ProgressBar
              value={completedRhythm}
              max={4}
              showPercentage
              size="lg"
              colorScheme="primary"
            />
            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                { key: "deepWork", label: "Deep Work", time: "8:00-9:30 AM" },
                { key: "applications", label: "Applications", time: "10:00-12:00 PM" },
                { key: "practice", label: "Practice", time: "1:00-2:30 PM" },
                { key: "debrief", label: "Debrief", time: "8:00-8:15 PM" },
              ].map((item) => (
                <div
                  key={item.key}
                  className={`p-3 rounded-lg border ${
                    todayRhythm[item.key as keyof typeof todayRhythm]
                      ? "border-emerald-500/30 bg-emerald-500/10"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-lg ${
                        todayRhythm[item.key as keyof typeof todayRhythm] ? "" : "opacity-50"
                      }`}
                    >
                      {todayRhythm[item.key as keyof typeof todayRhythm] ? "✓" : "○"}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/gtm/rhythm"
              className="block mt-4 text-center text-sm text-primary hover:underline"
            >
              Manage Daily Rhythm &rarr;
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/gtm/applications"
                className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <span className="text-xl">💼</span>
                <span className="text-sm font-medium text-foreground">Add Application</span>
              </Link>
              <Link
                href="/gtm/mocks"
                className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <span className="text-xl">🎭</span>
                <span className="text-sm font-medium text-foreground">Log Mock</span>
              </Link>
              <Link
                href="/gtm/drills"
                className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <span className="text-xl">🔧</span>
                <span className="text-sm font-medium text-foreground">Add Drill</span>
              </Link>
              <Link
                href="/gtm/networking"
                className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <span className="text-xl">🤝</span>
                <span className="text-sm font-medium text-foreground">Add Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
        {recentActivity.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No activity yet. Start by adding an application or logging a mock interview.
          </div>
        ) : (
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="text-xl">{activityIcons[activity.type]}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">
                    {activity.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{activity.subtitle}</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatDate(new Date(activity.timestamp).toISOString())}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <div className="text-2xl font-bold text-foreground">{data.applications.length}</div>
          <div className="text-sm text-muted-foreground">Total Applications</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <div className="text-2xl font-bold text-foreground">{data.stories.length}</div>
          <div className="text-sm text-muted-foreground">STAR Stories</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <div className="text-2xl font-bold text-foreground">{data.mocks.length}</div>
          <div className="text-sm text-muted-foreground">Mock Interviews</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <div className="text-2xl font-bold text-foreground">{data.drills.length}</div>
          <div className="text-sm text-muted-foreground">SD Drills</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <div className="text-2xl font-bold text-foreground">{data.networking.length}</div>
          <div className="text-sm text-muted-foreground">Contacts</div>
        </div>
      </div>
    </div>
  );
}

export default function GTMDashboardPage() {
  return (
    <GTMLayout>
      <DashboardContent />
    </GTMLayout>
  );
}
