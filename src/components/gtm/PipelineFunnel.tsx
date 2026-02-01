"use client";

import { APPLICATION_STATUS_CONFIG, ApplicationStatus } from "@/types/gtm";

interface PipelineFunnelProps {
  funnel: Record<string, number>;
}

// Order of stages in the funnel (active stages only)
const FUNNEL_STAGES: ApplicationStatus[] = [
  "applied",
  "screen",
  "technical",
  "loop",
  "offer",
];

export function PipelineFunnel({ funnel }: PipelineFunnelProps) {
  const maxCount = Math.max(...FUNNEL_STAGES.map((s) => funnel[s] || 0), 1);

  // Calculate conversion rates
  const getConversionRate = (fromStage: ApplicationStatus, toStage: ApplicationStatus): string => {
    const from = funnel[fromStage] || 0;
    const to = funnel[toStage] || 0;
    if (from === 0) return "-";
    return `${Math.round((to / from) * 100)}%`;
  };

  return (
    <div className="space-y-3">
      {FUNNEL_STAGES.map((stage, index) => {
        const count = funnel[stage] || 0;
        const config = APPLICATION_STATUS_CONFIG[stage];
        const widthPercentage = (count / maxCount) * 100;

        return (
          <div key={stage}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${config.text}`}>{config.label}</span>
                {index > 0 && (
                  <span className="text-xs text-muted-foreground">
                    ({getConversionRate(FUNNEL_STAGES[index - 1], stage)} from{" "}
                    {APPLICATION_STATUS_CONFIG[FUNNEL_STAGES[index - 1]].label})
                  </span>
                )}
              </div>
              <span className="text-sm font-bold text-foreground">{count}</span>
            </div>
            <div className="h-6 w-full bg-muted rounded overflow-hidden">
              <div
                className={`h-full ${config.bg} ${config.text} flex items-center justify-end pr-2 transition-all duration-300`}
                style={{ width: `${Math.max(widthPercentage, count > 0 ? 10 : 0)}%` }}
              >
                {count > 0 && widthPercentage > 15 && (
                  <span className="text-xs font-medium">{count}</span>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Summary stats */}
      <div className="pt-3 mt-3 border-t border-border flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-muted-foreground">Researching: </span>
            <span className="font-medium text-foreground">{funnel.researching || 0}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Rejected: </span>
            <span className="font-medium text-red-400">{funnel.rejected || 0}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Withdrawn: </span>
            <span className="font-medium text-gray-400">{funnel.withdrawn || 0}</span>
          </div>
        </div>
        <div>
          <span className="text-muted-foreground">Total: </span>
          <span className="font-bold text-foreground">
            {Object.values(funnel).reduce((sum, count) => sum + count, 0)}
          </span>
        </div>
      </div>
    </div>
  );
}
