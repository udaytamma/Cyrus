"use client";

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
  colorScheme?: "auto" | "primary" | "success" | "warning" | "danger";
}

function getAutoColor(percentage: number): string {
  if (percentage >= 100) return "bg-emerald-500";
  if (percentage >= 75) return "bg-amber-500";
  if (percentage >= 50) return "bg-orange-500";
  return "bg-red-500";
}

const colorClasses = {
  primary: "bg-primary",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-red-500",
};

const sizeClasses = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

export function ProgressBar({
  value,
  max,
  label,
  showPercentage = false,
  size = "md",
  colorScheme = "auto",
}: ProgressBarProps) {
  const percentage = max > 0 ? Math.round((value / max) * 100) : 0;
  const barColor = colorScheme === "auto" ? getAutoColor(percentage) : colorClasses[colorScheme];

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-1">
          {label && <span className="text-sm text-muted-foreground">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-medium text-foreground">{percentage}%</span>
          )}
        </div>
      )}
      <div className={`w-full bg-muted rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`h-full ${barColor} transition-all duration-300`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
}
