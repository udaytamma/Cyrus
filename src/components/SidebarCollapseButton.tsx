"use client";

/**
 * SidebarCollapseButton - Universal sidebar collapse/expand toggle
 *
 * Used consistently across all pages with collapsible sidebars:
 * - Knowledge Base
 * - System Design
 * - Any future pages with sidebars
 */

interface SidebarCollapseButtonProps {
  isCollapsed: boolean;
  onToggle: () => void;
  /**
   * Position style - determines how the button is positioned
   * @default "edge" - positioned on the sidebar edge (for desktop sidebars)
   */
  position?: "edge" | "fixed";
  /**
   * For fixed positioning, the left offset when sidebar is open
   */
  openLeftOffset?: string;
}

export function SidebarCollapseButton({
  isCollapsed,
  onToggle,
  position = "edge",
  openLeftOffset = "288px",
}: SidebarCollapseButtonProps) {
  if (position === "fixed") {
    return (
      <button
        onClick={onToggle}
        className={`fixed top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 ${
          isCollapsed ? "left-0 rounded-l-none" : ""
        }`}
        style={{ left: isCollapsed ? "0" : openLeftOffset }}
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <svg
          className={`h-3 w-3 transition-transform ${isCollapsed ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  }

  // Default "edge" position - sits on the sidebar edge
  return (
    <button
      onClick={onToggle}
      className="absolute top-4 right-[-12px] w-6 h-6 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors z-10"
      title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      <svg
        className={`h-3 w-3 transition-transform ${isCollapsed ? "rotate-180" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
