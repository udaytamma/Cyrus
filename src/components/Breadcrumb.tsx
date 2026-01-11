"use client";

/**
 * Breadcrumb Component
 *
 * Displays navigation breadcrumbs based on the current path.
 * Used in docs and nebula pages for better navigation.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Map of path segments to human-readable labels
const pathLabels: Record<string, string> = {
  docs: "Docs",
  nebula: "Nebula",
  projects: "Projects",
  blog: "Blog",
  journey: "Journey",
  about: "About",
  "email-assistant": "Email Assistant",
  "fraud-platform": "Fraud Platform",
  "ingredient-scanner": "Ingredient Scanner",
  mindgames: "MindGames",
  capstone: "Capstone",
  chatgpt: "ChatGPT",
  claude: "Claude",
  gemini: "Gemini",
  perplexity: "Perplexity",
  selected: "Selected",
  wip: "Work in Progress",
  "fraud-detection-design": "Fraud Detection Design",
  "fraud-detection-thinking": "Fraud Detection Thinking",
  questions: "Questions",
  thinking: "Thinking",
  "scratch-pad": "Scratch Pad",
  tasks: "Tasks",
  blindspots: "Blindspots",
  architecture: "Architecture",
  "getting-started": "Getting Started",
  "api-endpoints": "API Endpoints",
  "api-reference": "API Reference",
  testing: "Testing",
  deployment: "Deployment",
  caching: "Caching",
  "ai-categorization": "AI Categorization",
  "daily-digest": "Daily Digest",
  "metrics-dashboard": "Metrics Dashboard",
  "executive-overview": "Executive Overview",
  "ai-ml-roadmap": "AI/ML Roadmap",
  "tpm-execution-strategy": "TPM Execution Strategy",
  "results-personas": "Results & Personas",
  "demo-dashboard": "Demo Dashboard",
  "testing-performance": "Testing & Performance",
  "full-design-document": "Full Design Document",
  agents: "Agents",
  authentication: "Authentication",
  "mobile-components": "Mobile Components",
  "mobile-setup": "Mobile Setup",
  "ocr-translation": "OCR & Translation",
  "theme-system": "Theme System",
  "vector-database": "Vector Database",
  roadmap: "Roadmap",
  comparison: "Comparison",
  "part-1": "Part 1",
  "part-2": "Part 2",
  "part-3": "Part 3",
  "part-4": "Part 4",
  "part-5": "Part 5",
  "part-6": "Part 6",
  "part-7": "Part 7",
  "part-8": "Part 8",
  checklist: "Checklist",
  constraints: "Constraints",
  "data-model": "Data Model",
  "data-points": "Data Points",
  "design-rationale": "Design Rationale",
  "failure-modes": "Failure Modes",
  scope: "Scope",
  technology: "Technology",
};

function getLabel(segment: string): string {
  // Check if we have a mapping
  if (pathLabels[segment]) {
    return pathLabels[segment];
  }

  // Fallback: convert kebab-case to Title Case
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const pathname = usePathname();

  // If custom items provided, use them
  if (items) {
    return (
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex items-center gap-1.5 text-muted-foreground">
          <li>
            <Link
              href="/"
              className="hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronIcon className="h-4 w-4" />
              {index === items.length - 1 ? (
                <span className="text-foreground font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  // Auto-generate from pathname
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  let currentPath = "";

  for (const segment of segments) {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      label: getLabel(segment),
      href: currentPath,
    });
  }

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex items-center gap-1.5 text-muted-foreground flex-wrap">
        <li>
          <Link
            href="/"
            className="hover:text-foreground transition-colors"
          >
            Home
          </Link>
        </li>
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <ChevronIcon className="h-4 w-4 flex-shrink-0" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-foreground font-medium truncate max-w-[200px]">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors truncate max-w-[150px]"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ChevronIcon({ className }: { className?: string }) {
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
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
