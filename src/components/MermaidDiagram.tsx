"use client";

/**
 * MermaidDiagram Component
 *
 * Renders Mermaid diagrams with:
 * - Client-side rendering
 * - Dark mode support (auto-switches with theme)
 * - Responsive container
 * - Error handling with fallback
 */

import { useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import mermaid from "mermaid";
import { useColorTheme, type ColorTheme } from "@/context/ColorThemeContext";

// Color theme palettes for Mermaid diagrams
const colorThemePalettes: Record<ColorTheme, { light: { primary: string; primaryDark: string }; dark: { primary: string; primaryDark: string } }> = {
  goldenrod: {
    light: { primary: "#DAA520", primaryDark: "#B8860B" },
    dark: { primary: "#F4CA64", primaryDark: "#DAA520" },
  },
  emerald: {
    light: { primary: "#10B981", primaryDark: "#059669" },
    dark: { primary: "#34D399", primaryDark: "#10B981" },
  },
  violet: {
    light: { primary: "#8B5CF6", primaryDark: "#7C3AED" },
    dark: { primary: "#A78BFA", primaryDark: "#8B5CF6" },
  },
};

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Render diagram when chart or theme changes
  const renderDiagram = useCallback(async () => {
    if (!containerRef.current) return;

    const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
    containerRef.current.innerHTML = "";

    // Get colors for current color theme
    const palette = colorThemePalettes[colorTheme];
    const colors = theme === "dark" ? palette.dark : palette.light;

    // Configure mermaid for current theme
    mermaid.initialize({
      startOnLoad: false,
      theme: theme === "dark" ? "dark" : "neutral",
      securityLevel: "loose",
      fontFamily: "inherit",
      themeVariables: theme === "dark" ? {
        // Dark theme overrides
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
        // Light theme overrides
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
    });

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
  }, [chart, theme, colorTheme]);

  useEffect(() => {
    renderDiagram();
  }, [renderDiagram]);

  return (
    <div
      ref={containerRef}
      className={`mermaid-container my-6 flex justify-center overflow-x-auto rounded-lg border border-border bg-card p-4 ${className}`}
    />
  );
}
