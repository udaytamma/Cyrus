"use client";

/**
 * MermaidDiagram Component
 *
 * Renders Mermaid diagrams with client-side rendering.
 * Used in documentation pages to display flowcharts, architecture diagrams, etc.
 */

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

// Initialize mermaid with neutral theme
mermaid.initialize({
  startOnLoad: false,
  theme: "neutral",
  securityLevel: "loose",
  fontFamily: "inherit",
});

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
      containerRef.current.innerHTML = "";
      setError(null);

      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        })
        .catch((err) => {
          console.error("Mermaid render error:", err);
          setError(err.message || "Failed to render diagram");
        });
    }
  }, [chart]);

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
      className={`my-6 flex justify-center overflow-x-auto ${className}`}
    />
  );
}
