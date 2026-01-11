"use client";

/**
 * AnchorHeading Component
 *
 * Heading component with:
 * - Auto-generated anchor ID from text
 * - Hover-visible link icon
 * - Click to copy anchor link
 * - Mobile-friendly touch target
 */

import { useState, useCallback, ReactNode } from "react";

interface AnchorHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  id?: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function AnchorHeading({
  level,
  children,
  className = "",
  id,
}: AnchorHeadingProps) {
  const [copied, setCopied] = useState(false);

  // Generate ID from children if not provided
  const textContent = typeof children === "string" ? children : "";
  const headingId = id || slugify(textContent);

  const handleCopyLink = useCallback(async () => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#${headingId}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [headingId]);

  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <Tag id={headingId} className={`group relative scroll-mt-20 ${className}`}>
      {children}
      <a
        href={`#${headingId}`}
        onClick={(e) => {
          e.preventDefault();
          handleCopyLink();
          // Also scroll to the heading
          document.getElementById(headingId)?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="ml-2 inline-flex items-center opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
        aria-label={`Copy link to ${textContent}`}
        title={copied ? "Copied!" : "Copy link"}
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-green-500" />
        ) : (
          <LinkIcon className="h-4 w-4 text-muted-foreground hover:text-primary" />
        )}
      </a>
    </Tag>
  );
}

// Convenience components for each heading level
export function H1({ children, className, id }: Omit<AnchorHeadingProps, "level">) {
  return <AnchorHeading level={1} className={className} id={id}>{children}</AnchorHeading>;
}

export function H2({ children, className, id }: Omit<AnchorHeadingProps, "level">) {
  return <AnchorHeading level={2} className={className} id={id}>{children}</AnchorHeading>;
}

export function H3({ children, className, id }: Omit<AnchorHeadingProps, "level">) {
  return <AnchorHeading level={3} className={className} id={id}>{children}</AnchorHeading>;
}

export function H4({ children, className, id }: Omit<AnchorHeadingProps, "level">) {
  return <AnchorHeading level={4} className={className} id={id}>{children}</AnchorHeading>;
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
