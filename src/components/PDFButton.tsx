"use client";

/**
 * PDF Download Button - Triggers browser print for high-quality PDF export.
 * Subtle styling that fits in the navbar.
 */

import { useCallback } from "react";

export function PDFButton() {
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <button
      onClick={handlePrint}
      title="Save as PDF"
      aria-label="Print or save page as PDF"
      className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground/60 transition-colors hover:bg-muted hover:text-muted-foreground"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="12" y2="18" />
        <line x1="15" y1="15" x2="12" y2="18" />
      </svg>
    </button>
  );
}
