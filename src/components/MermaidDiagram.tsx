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

import { useEffect, useRef, useState, useCallback } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      setTheme(isDark ? "dark" : "light");
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Render diagram when chart or theme changes
  const renderDiagram = useCallback(async () => {
    if (!containerRef.current) return;

    const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
    containerRef.current.innerHTML = "";
    setError(null);

    // Configure mermaid for current theme
    mermaid.initialize({
      startOnLoad: false,
      theme: theme === "dark" ? "dark" : "neutral",
      securityLevel: "loose",
      fontFamily: "inherit",
      themeVariables: theme === "dark" ? {
        // Dark theme overrides
        primaryColor: "#F4CA64",
        primaryTextColor: "#18181b",
        primaryBorderColor: "#F4CA64",
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
        primaryColor: "#DAA520",
        primaryTextColor: "#1c1917",
        primaryBorderColor: "#DAA520",
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
      setError(err instanceof Error ? err.message : "Failed to render diagram");
    }
  }, [chart, theme]);

  useEffect(() => {
    renderDiagram();
  }, [renderDiagram]);

  if (error) {
    return (
      <div className={`my-6 rounded-lg bg-red-50 dark:bg-red-900/20 p-4 text-red-600 dark:text-red-400 ${className}`}>
        <p className="font-medium">Diagram Error</p>
        <p className="text-sm mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`mermaid-container my-6 flex justify-center overflow-x-auto rounded-lg border border-border bg-card p-4 ${className}`}
    />
  );
}
