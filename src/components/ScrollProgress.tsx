"use client";

/**
 * ScrollProgress - Global scroll progress indicator
 *
 * Features:
 * - Elegant horizontal bar at the top of viewport
 * - Smooth animation with subtle gradient
 * - Auto-hides when at top of page
 * - Mobile-friendly with responsive design
 * - Accessible with aria labels
 */

import { useState, useEffect, useCallback } from "react";

interface ScrollProgressProps {
  /**
   * Color variant for the progress bar
   * @default "primary"
   */
  variant?: "primary" | "gradient" | "subtle";
  /**
   * Show percentage text
   * @default false
   */
  showPercentage?: boolean;
  /**
   * Position of the progress bar
   * @default "top"
   */
  position?: "top" | "bottom";
  /**
   * Height of the progress bar in pixels
   * @default 3
   */
  height?: number;
}

export function ScrollProgress({
  variant = "primary",
  showPercentage = false,
  position = "top",
  height = 3,
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const calculateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) {
      setProgress(0);
      setIsVisible(false);
      return;
    }

    const scrollPercent = (scrollTop / docHeight) * 100;
    setProgress(Math.min(100, Math.max(0, scrollPercent)));

    // Show progress bar when there's any scrollable content
    // Lower threshold (10px) so it appears almost immediately
    setIsVisible(scrollTop > 10 || docHeight > 100);
  }, []);

  useEffect(() => {
    // Calculate initial progress
    calculateProgress();

    // Throttled scroll handler for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", calculateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateProgress);
    };
  }, [calculateProgress]);

  // Variant styles
  const variantStyles = {
    primary: "bg-primary",
    gradient: "bg-gradient-to-r from-primary via-accent to-secondary",
    subtle: "bg-foreground/20",
  };

  const positionStyles = {
    top: "top-0",
    bottom: "bottom-0",
  };

  return (
    <>
      {/* Progress bar container */}
      <div
        className={`fixed left-0 right-0 z-[60] pointer-events-none ${positionStyles[position]}`}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      >
        {/* Track (background) */}
        <div
          className={`w-full bg-border/30 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: `${height}px` }}
        >
          {/* Progress fill */}
          <div
            className={`h-full ${variantStyles[variant]} transition-all duration-150 ease-out`}
            style={{
              width: `${progress}%`,
              boxShadow: progress > 0 ? `0 0 10px var(--primary), 0 0 5px var(--primary)` : "none",
            }}
          />
        </div>
      </div>

      {/* Floating percentage indicator */}
      {showPercentage && (
        <div
          className={`fixed right-4 z-[60] transition-all duration-300 ${
            position === "top" ? "top-4" : "bottom-4"
          } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg">
            {/* Mini circular progress */}
            <div className="relative w-6 h-6">
              <svg className="w-6 h-6 -rotate-90" viewBox="0 0 24 24">
                {/* Background circle */}
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-border"
                />
                {/* Progress circle */}
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-primary transition-all duration-150"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 10}`,
                    strokeDashoffset: `${2 * Math.PI * 10 * (1 - progress / 100)}`,
                  }}
                />
              </svg>
            </div>
            <span className="text-xs font-medium text-foreground tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Vertical scroll progress indicator for sidebars
 */
export function VerticalScrollProgress({
  className = "",
}: {
  className?: string;
}) {
  const [progress, setProgress] = useState(0);
  const [position, setPosition] = useState<"top" | "middle" | "bottom">("top");

  const calculateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) {
      setProgress(0);
      setPosition("top");
      return;
    }

    const scrollPercent = (scrollTop / docHeight) * 100;
    setProgress(Math.min(100, Math.max(0, scrollPercent)));

    // Determine position label
    if (scrollPercent < 20) {
      setPosition("top");
    } else if (scrollPercent > 80) {
      setPosition("bottom");
    } else {
      setPosition("middle");
    }
  }, []);

  useEffect(() => {
    calculateProgress();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [calculateProgress]);

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* Vertical bar container */}
      <div className="w-1.5 h-32 bg-muted/50 rounded-full overflow-hidden border border-border/50">
        <div
          className="w-full bg-primary/70 rounded-full transition-all duration-150"
          style={{ height: `${progress}%` }}
        />
      </div>
      {/* Position label */}
      <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
        {position === "top" && "Top"}
        {position === "middle" && `${Math.round(progress)}%`}
        {position === "bottom" && "End"}
      </div>
    </div>
  );
}
