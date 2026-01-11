/**
 * ProjectBadges Component
 *
 * Displays version, status, and tech badges for project documentation.
 * Supports various badge types with appropriate colors.
 */

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "primary";
type StatusType = "stable" | "beta" | "alpha" | "wip" | "deprecated" | "production";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

interface VersionBadgeProps {
  version: string;
  className?: string;
}

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

interface TechStackBadgeProps {
  tech: string;
  className?: string;
}

interface ProjectBadgesProps {
  version?: string;
  status?: StatusType;
  techStack?: string[];
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-muted text-muted-foreground border-border",
  success: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30",
  warning: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30",
  danger: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30",
  info: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
  primary: "bg-primary/10 text-primary border-primary/30",
};

const statusConfig: Record<StatusType, { label: string; variant: BadgeVariant }> = {
  stable: { label: "Stable", variant: "success" },
  beta: { label: "Beta", variant: "info" },
  alpha: { label: "Alpha", variant: "warning" },
  wip: { label: "Work in Progress", variant: "warning" },
  deprecated: { label: "Deprecated", variant: "danger" },
  production: { label: "Production", variant: "success" },
};

export function Badge({ label, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
}

export function VersionBadge({ version, className = "" }: VersionBadgeProps) {
  return (
    <Badge
      label={`v${version.replace(/^v/, "")}`}
      variant="primary"
      className={className}
    />
  );
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <Badge
      label={config.label}
      variant={config.variant}
      className={className}
    />
  );
}

export function TechStackBadge({ tech, className = "" }: TechStackBadgeProps) {
  return (
    <Badge
      label={tech}
      variant="default"
      className={className}
    />
  );
}

export function ProjectBadges({
  version,
  status,
  techStack,
  className = "",
}: ProjectBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {version && <VersionBadge version={version} />}
      {status && <StatusBadge status={status} />}
      {techStack?.map((tech) => (
        <TechStackBadge key={tech} tech={tech} />
      ))}
    </div>
  );
}

/**
 * ProjectMetrics Component
 *
 * Displays project metrics in a grid layout.
 * Useful for showing tests, coverage, status, etc.
 */
interface Metric {
  label: string;
  value: string | number;
  variant?: "default" | "success" | "warning" | "danger";
}

interface ProjectMetricsProps {
  metrics: Metric[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const metricVariantStyles: Record<string, string> = {
  default: "text-primary",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  danger: "text-red-600 dark:text-red-400",
};

export function ProjectMetrics({
  metrics,
  columns = 4,
  className = "",
}: ProjectMetricsProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  };

  return (
    <div className={`not-prose my-6 grid gap-4 ${gridCols[columns]} ${className}`}>
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="rounded-lg border border-border bg-card p-4 text-center"
        >
          <div className={`text-2xl font-bold ${metricVariantStyles[metric.variant || "default"]}`}>
            {metric.value}
          </div>
          <div className="text-sm text-muted-foreground">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * QuickLinks Component
 *
 * Displays quick links in a grid layout for navigation.
 */
interface QuickLink {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  icon?: string;
}

interface QuickLinksProps {
  links: QuickLink[];
  columns?: 2 | 3;
  className?: string;
}

export function QuickLinks({
  links,
  columns = 2,
  className = "",
}: QuickLinksProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`not-prose my-6 grid gap-4 ${gridCols[columns]} ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
        >
          <div className="flex items-center gap-3">
            {link.icon && <span className="text-2xl">{link.icon}</span>}
            <div>
              <div className="font-semibold text-foreground">
                {link.title}
                {link.external && <span className="ml-1 text-xs text-muted-foreground">↗</span>}
              </div>
              <div className="text-sm text-muted-foreground">{link.description}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
