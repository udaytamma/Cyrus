"use client";

import { ReactNode } from "react";

interface MetricCardProps {
  label: string;
  value: number;
  target: number;
  icon: ReactNode;
  subtitle?: string;
}

function getProgressColor(percentage: number): string {
  if (percentage >= 100) return "bg-emerald-500";
  if (percentage >= 75) return "bg-amber-500";
  if (percentage >= 50) return "bg-orange-500";
  return "bg-red-500";
}

function getTextColor(percentage: number): string {
  if (percentage >= 100) return "text-emerald-500";
  if (percentage >= 75) return "text-amber-500";
  if (percentage >= 50) return "text-orange-500";
  return "text-red-500";
}

export function MetricCard({ label, value, target, icon, subtitle }: MetricCardProps) {
  const percentage = target > 0 ? Math.round((value / target) * 100) : 0;
  const progressColor = getProgressColor(percentage);
  const textColor = getTextColor(percentage);

  return (
    <div className="rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="text-2xl">{icon}</div>
        <div className={`text-sm font-medium ${textColor}`}>{percentage}%</div>
      </div>

      <div className="mb-2">
        <div className="text-sm font-medium text-muted-foreground">{label}</div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-foreground">{value}</span>
          <span className="text-sm text-muted-foreground">/ {target}</span>
        </div>
        {subtitle && <div className="text-xs text-muted-foreground mt-1">{subtitle}</div>}
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full ${progressColor} transition-all duration-300`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
}
