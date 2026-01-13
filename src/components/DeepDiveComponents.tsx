"use client";

/**
 * Shared components for Deep Dive pages
 * Used across all deep dive sub-pages
 */

// Subsection component
export function Subsection({
  title,
  children,
  color = "blue",
}: {
  title: string;
  children: React.ReactNode;
  color?: "blue" | "green" | "amber" | "purple" | "indigo" | "pink" | "cyan" | "red" | "teal" | "orange";
}) {
  const colorClasses: Record<string, string> = {
    blue: "from-blue-500/5 border-blue-500/30 text-blue-500",
    green: "from-green-500/5 border-green-500/30 text-green-500",
    amber: "from-amber-500/5 border-amber-500/30 text-amber-500",
    purple: "from-purple-500/5 border-purple-500/30 text-purple-500",
    indigo: "from-indigo-500/5 border-indigo-500/30 text-indigo-500",
    pink: "from-pink-500/5 border-pink-500/30 text-pink-500",
    cyan: "from-cyan-500/5 border-cyan-500/30 text-cyan-500",
    red: "from-red-500/5 border-red-500/30 text-red-500",
    teal: "from-teal-500/5 border-teal-500/30 text-teal-500",
    orange: "from-orange-500/5 border-orange-500/30 text-orange-500",
  };

  const classes = colorClasses[color];
  const [gradientClass, borderClass, textClass] = classes.split(" ");

  return (
    <div className={`mb-6 p-5 bg-gradient-to-r ${gradientClass} to-transparent rounded-xl border ${borderClass}`}>
      <h3 className={`text-lg font-semibold text-foreground mb-3 ${textClass}`}>{title}</h3>
      {children}
    </div>
  );
}

// Deep dive insight box
export function Insight({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 p-4 bg-muted/30 rounded-lg border border-border">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-amber-500">&#9733;</span>
        <span className="text-base font-semibold text-foreground">{title}</span>
      </div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

// Warning/pitfall box
export function Pitfall({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 p-4 bg-red-500/5 rounded-lg border border-red-500/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-500">&#9888;</span>
        <span className="text-sm font-semibold text-red-500">Common Pitfall</span>
      </div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

// Interview tip box
export function InterviewTip({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 p-4 bg-green-500/5 rounded-lg border border-green-500/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-500">&#128161;</span>
        <span className="text-sm font-semibold text-green-500">Interview Tip</span>
      </div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

// Bullet item component
export function BulletItem({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 mb-2">
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0"></span>
      <span className="text-sm text-muted-foreground">
        {title && <strong className="text-foreground">{title}:</strong>} {children}
      </span>
    </li>
  );
}

// Table component
export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm text-muted-foreground">
        <thead>
          <tr className="border-b border-border">
            {headers.map((header, i) => (
              <th key={i} className="text-left py-2 text-foreground font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50">
              {row.map((cell, j) => (
                <td key={j} className="py-2 pr-4">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Deep dive header for sub-pages
export function DeepDiveHeader({
  number,
  title,
  subtitle,
  color = "blue",
}: {
  number: number;
  title: string;
  subtitle: string;
  color?: string;
}) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    amber: "bg-amber-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    pink: "bg-pink-500",
    cyan: "bg-cyan-500",
    red: "bg-red-500",
    teal: "bg-teal-500",
    orange: "bg-orange-500",
    violet: "bg-violet-500",
  };

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-10 h-10 rounded-lg ${colorClasses[color] || colorClasses.blue} text-white flex items-center justify-center text-lg font-bold`}>
        {number}
      </div>
      <div>
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}
