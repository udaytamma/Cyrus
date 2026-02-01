"use client";

import {
  ApplicationStatus,
  NetworkingStatus,
  StoryCategory,
  MockType,
  APPLICATION_STATUS_CONFIG,
  NETWORKING_STATUS_CONFIG,
  STORY_CATEGORY_CONFIG,
  MOCK_TYPE_CONFIG,
} from "@/types/gtm";

type BadgeType = "application" | "networking" | "story" | "mock";

interface StatusBadgeProps {
  type: BadgeType;
  status: ApplicationStatus | NetworkingStatus | StoryCategory | MockType;
  size?: "sm" | "md";
}

function getConfig(type: BadgeType, status: string) {
  switch (type) {
    case "application":
      return APPLICATION_STATUS_CONFIG[status as ApplicationStatus];
    case "networking":
      return NETWORKING_STATUS_CONFIG[status as NetworkingStatus];
    case "story":
      return STORY_CATEGORY_CONFIG[status as StoryCategory];
    case "mock":
      return MOCK_TYPE_CONFIG[status as MockType];
    default:
      return { label: status, bg: "bg-gray-500/15", text: "text-gray-400" };
  }
}

export function StatusBadge({ type, status, size = "sm" }: StatusBadgeProps) {
  const config = getConfig(type, status);

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${config.bg} ${config.text} ${sizeClasses[size]}`}
    >
      {config.label}
    </span>
  );
}
