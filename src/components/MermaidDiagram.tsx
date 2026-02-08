"use client";

/**
 * MermaidDiagram Component
 *
 * Renders Mermaid diagrams with:
 * - Client-side rendering
 * - Dark mode support (auto-switches with theme)
 * - Click-to-fullscreen modal
 * - Responsive container
 * - Error handling with fallback
 */

import { useEffect, useRef, useCallback, useSyncExternalStore, useState } from "react";
import mermaid from "mermaid";
import { useColorTheme, type ColorTheme } from "@/context/ColorThemeContext";

// Color theme palettes for Mermaid diagrams
const colorThemePalettes: Record<ColorTheme, { light: { primary: string; primaryDark: string }; dark: { primary: string; primaryDark: string } }> = {
  goldenrod: {
    light: { primary: "#DAA520", primaryDark: "#B8860B" },
    dark: { primary: "#F4CA64", primaryDark: "#DAA520" },
  },
  steel: {
    light: { primary: "#64748B", primaryDark: "#475569" },
    dark: { primary: "#94A3B8", primaryDark: "#64748B" },
  },
  violet: {
    light: { primary: "#8B5CF6", primaryDark: "#7C3AED" },
    dark: { primary: "#A78BFA", primaryDark: "#8B5CF6" },
  },
  coral: {
    light: { primary: "#F97316", primaryDark: "#EA580C" },
    dark: { primary: "#FB923C", primaryDark: "#F97316" },
  },
  honey: {
    light: { primary: "#F59E0B", primaryDark: "#D97706" },
    dark: { primary: "#FBBF24", primaryDark: "#F59E0B" },
  },
  aqua: {
    light: { primary: "#06B6D4", primaryDark: "#0891B2" },
    dark: { primary: "#22D3EE", primaryDark: "#06B6D4" },
  },
  magenta: {
    light: { primary: "#D946EF", primaryDark: "#C026D3" },
    dark: { primary: "#E879F9", primaryDark: "#D946EF" },
  },
};

interface MermaidDiagramProps {
  chart: string;
  className?: string;
  expandable?: boolean;
}

export function MermaidDiagram({ chart, className = "", expandable = true }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalSvg, setModalSvg] = useState<string>("");
  const { colorTheme } = useColorTheme();

  const theme = useSyncExternalStore(
    (listener) => {
      if (typeof document === "undefined" || typeof MutationObserver === "undefined") return () => {};
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "data-theme") {
            listener();
          }
        });
      });
      observer.observe(document.documentElement, { attributes: true });
      return () => observer.disconnect();
    },
    () => {
      if (typeof document === "undefined") return "light";
      return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    },
    () => "light"
  );

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  // Get mermaid configuration for current theme
  const getMermaidConfig = useCallback(() => {
    const palette = colorThemePalettes[colorTheme];
    const colors = theme === "dark" ? palette.dark : palette.light;

    return {
      startOnLoad: false,
      theme: (theme === "dark" ? "dark" : "neutral") as "dark" | "neutral",
      securityLevel: "loose" as const,
      fontFamily: "inherit",
      themeVariables: theme === "dark" ? {
        primaryColor: colors.primary,
        primaryTextColor: "#18181b",
        primaryBorderColor: colors.primary,
        lineColor: "#a1a1aa",
        secondaryColor: "#27272a",
        tertiaryColor: "#3f3f46",
        background: "#18181b",
        mainBkg: "#27272a",
        nodeBorder: "#3f3f46",
        clusterBkg: "#27272a",
        clusterBorder: "#3f3f46",
        titleColor: "#fafaf9",
        edgeLabelBackground: "#27272a",
      } : {
        primaryColor: colors.primary,
        primaryTextColor: "#1c1917",
        primaryBorderColor: colors.primary,
        lineColor: "#6b6560",
        secondaryColor: "#faf9f6",
        tertiaryColor: "#f5f5f4",
        background: "#ffffff",
        mainBkg: "#faf9f6",
        nodeBorder: "#e5e2db",
        clusterBkg: "#faf9f6",
        clusterBorder: "#e5e2db",
        titleColor: "#1c1917",
        edgeLabelBackground: "#faf9f6",
      },
    };
  }, [theme, colorTheme]);

  // Render diagram when chart or theme changes
  const renderDiagram = useCallback(async () => {
    if (!containerRef.current) return;

    const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
    containerRef.current.innerHTML = "";

    mermaid.initialize(getMermaidConfig());

    try {
      const { svg } = await mermaid.render(id, chart);
      if (containerRef.current) {
        containerRef.current.innerHTML = svg;
      }
    } catch (err) {
      console.error("Mermaid render error:", err);
      const message = err instanceof Error ? err.message : "Failed to render diagram";
      if (containerRef.current) {
        containerRef.current.innerHTML = `
          <div class="w-full rounded-lg bg-red-50 dark:bg-red-900/20 p-4 text-red-600 dark:text-red-400">
            <p class="font-medium">Diagram Error</p>
            <p class="text-sm mt-1">${escapeHtml(message)}</p>
          </div>
        `;
      }
    }
  }, [chart, getMermaidConfig]);

  // Render modal diagram when expanded
  const renderModalDiagram = useCallback(async () => {
    if (!isExpanded) return;

    const id = `mermaid-modal-${Math.random().toString(36).substring(2, 9)}`;
    mermaid.initialize(getMermaidConfig());

    try {
      const { svg } = await mermaid.render(id, chart);
      setModalSvg(svg);
    } catch (err) {
      console.error("Mermaid modal render error:", err);
      const message = err instanceof Error ? err.message : "Failed to render diagram";
      setModalSvg(`
        <div class="w-full rounded-lg bg-red-50 dark:bg-red-900/20 p-4 text-red-600 dark:text-red-400">
          <p class="font-medium">Diagram Error</p>
          <p class="text-sm mt-1">${escapeHtml(message)}</p>
        </div>
      `);
    }
  }, [chart, isExpanded, getMermaidConfig]);

  useEffect(() => {
    renderDiagram();
  }, [renderDiagram]);

  useEffect(() => {
    renderModalDiagram();
  }, [renderModalDiagram]);

  // Close modal on Escape key
  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  return (
    <>
      {/* Inline diagram with click-to-expand */}
      <div className="relative my-6">
        <div
          ref={containerRef}
          onClick={expandable ? () => setIsExpanded(true) : undefined}
          title={expandable ? "Click to expand" : undefined}
          className={`mermaid-container flex justify-center overflow-x-auto rounded-lg border border-border bg-card p-4 [&_svg]:max-w-full [&_svg]:h-auto ${
            expandable ? "cursor-zoom-in transition-all hover:border-primary/30 hover:bg-primary/5" : ""
          } ${className}`}
        />
        {/* Mobile tap hint */}
        {expandable && (
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white/80 md:hidden">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Tap to expand
          </div>
        )}
      </div>

      {/* Fullscreen Modal - mobile optimized */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        >
          {/* Close hint - hidden on mobile */}
          <div className="absolute left-4 top-4 hidden text-sm text-white/70 md:block">
            Press ESC or click anywhere to close
          </div>

          {/* Close button - larger touch target on mobile */}
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute right-2 top-2 rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/30 md:right-4 md:top-4 md:p-2"
            aria-label="Close diagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Modal content - responsive for mobile and desktop */}
          <div
            ref={modalContainerRef}
            onClick={(e) => e.stopPropagation()}
            className="mx-2 flex max-h-[90vh] max-w-[96vw] items-center justify-center overflow-auto rounded-lg bg-white p-4 shadow-2xl dark:bg-zinc-900 md:mx-0 md:max-w-[90vw] md:p-8 [&_svg]:max-h-[80vh] [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:w-auto"
            dangerouslySetInnerHTML={{ __html: modalSvg }}
          />

          {/* Mobile close hint at bottom */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/70 md:hidden">
            Tap outside to close
          </div>
        </div>
      )}
    </>
  );
}
