/**
 * ReadingTime Component
 *
 * Displays estimated reading time for documentation pages.
 * Calculates based on average reading speed (200 words/minute).
 */

interface ReadingTimeProps {
  /** The text content to calculate reading time from */
  content: string;
  /** Optional className for styling */
  className?: string;
}

/**
 * Calculate reading time from content
 * Uses 200 words per minute as average reading speed
 */
function calculateReadingTime(content: string): number {
  // Strip HTML tags if present
  const text = content.replace(/<[^>]*>/g, "");
  // Count words (split by whitespace)
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  // Calculate minutes (minimum 1 minute)
  const minutes = Math.max(1, Math.ceil(words / 200));
  return minutes;
}

export function ReadingTime({ content, className = "" }: ReadingTimeProps) {
  const minutes = calculateReadingTime(content);

  return (
    <span className={`inline-flex items-center gap-1.5 text-sm text-muted-foreground ${className}`}>
      <ClockIcon className="h-4 w-4" />
      <span>{minutes} min read</span>
    </span>
  );
}

/**
 * Hook to calculate reading time from a ref
 */
export function useReadingTime(text: string): number {
  return calculateReadingTime(text);
}

function ClockIcon({ className }: { className?: string }) {
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
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
