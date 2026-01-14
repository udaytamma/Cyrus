"use client";

/**
 * AnchorHeading Component
 *
 * Enhanced heading component with:
 * - Auto-generated anchor ID from text
 * - Elegant hover-visible link icon with animation
 * - Click to copy anchor link with toast feedback
 * - Mobile-friendly touch target
 * - Accessible with proper ARIA labels
 */

import { useState, useCallback, ReactNode, useEffect, isValidElement } from "react";

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

// Extract text content from ReactNode recursively
function extractTextContent(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";

  if (Array.isArray(node)) {
    return node.map(extractTextContent).join("");
  }

  if (isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: ReactNode }>;
    return extractTextContent(element.props.children);
  }

  return "";
}

export function AnchorHeading({
  level,
  children,
  className = "",
  id,
}: AnchorHeadingProps) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Extract text content for ID generation
  const textContent = extractTextContent(children);
  const headingId = id || slugify(textContent);

  const handleCopyLink = useCallback(async () => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#${headingId}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setShowTooltip(true);
      setTimeout(() => {
        setCopied(false);
        setShowTooltip(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [headingId]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      handleCopyLink();
      // Update URL hash without jumping
      window.history.pushState({}, "", `#${headingId}`);
      // Smooth scroll to heading
      document.getElementById(headingId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    [handleCopyLink, headingId]
  );

  // Handle hash on page load
  useEffect(() => {
    if (window.location.hash === `#${headingId}`) {
      setTimeout(() => {
        document.getElementById(headingId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [headingId]);

  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <Tag id={headingId} className={`group relative scroll-mt-24 ${className}`}>
      <span className="anchor-heading-content">{children}</span>
      <a
        href={`#${headingId}`}
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => !copied && setShowTooltip(false)}
        className="anchor-link ml-2 inline-flex items-center align-middle opacity-0 transition-all duration-200 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
        aria-label={`Link to section: ${textContent}`}
      >
        <span className="relative">
          {copied ? (
            <CheckIcon className="h-4 w-4 text-success animate-in zoom-in-50 duration-200" />
          ) : (
            <LinkIcon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
          )}

          {/* Tooltip */}
          {showTooltip && (
            <span
              className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 text-xs font-medium bg-foreground text-background rounded whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200"
              role="tooltip"
            >
              {copied ? "Copied!" : "Copy link"}
              <span className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-foreground" />
            </span>
          )}
        </span>
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
