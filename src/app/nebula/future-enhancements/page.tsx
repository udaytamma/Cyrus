"use client";

/**
 * Future Enhancements - Task backlog for all projects
 */

import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";

// Enhancement items - sync with /Users/omega/Projects/FUTURE_ENHANCEMENTS.md
const enhancements = [
  {
    category: "Portfolio & Documentation",
    items: [
      {
        task: "Merge zeroleaf-portfolio into ProjectDocs as landing page (Option 3: single deployment)",
        done: false,
      },
    ],
  },
];

export default function FutureEnhancements() {
  const totalTasks = enhancements.reduce((sum, cat) => sum + cat.items.length, 0);
  const completedTasks = enhancements.reduce(
    (sum, cat) => sum + cat.items.filter((i) => i.done).length,
    0
  );

  return (
    <AuthGate storageKey="cyrus_nebula_auth" title="Nebula" subtitle="Interview Preparation Hub">
      <div className="min-h-screen bg-background">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full md:w-[220px] flex-shrink-0 border-b md:border-b-0 md:border-r border-border p-4 md:py-6 md:sticky md:top-[60px] md:h-[calc(100vh-60px)] md:overflow-y-auto bg-muted/30">
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground px-2 mb-2">
                Nebula
              </div>
              <ul className="flex flex-wrap md:flex-col gap-2 md:gap-1">
                <li>
                  <Link
                    href="/nebula"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                  >
                    <span>📋</span>
                    Questions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nebula/fraud-detection-thinking"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                  >
                    <span>🛡️</span>
                    Fraud Detection
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground px-2 mb-2">
                Planning
              </div>
              <ul className="flex flex-wrap md:flex-col gap-2 md:gap-1">
                <li>
                  <Link
                    href="/nebula/future-enhancements"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-primary bg-primary/10 font-medium rounded-md border-l-2 border-primary"
                  >
                    <span>📝</span>
                    Future Enhancements
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-8 max-w-[900px]">
            {/* Header */}
            <header className="mb-8 pb-6 border-b border-border">
              <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                Future Enhancements
              </h1>
              <p className="text-muted-foreground">Ongoing task backlog for all projects</p>
              <div className="mt-4 text-sm text-muted-foreground">
                <strong className="text-primary">{completedTasks}</strong> / {totalTasks} completed
              </div>
            </header>

            {/* Enhancement Categories */}
            {enhancements.map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  {category.category}
                </h2>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
                    >
                      <span
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 rounded border-2 flex items-center justify-center ${
                          item.done
                            ? "bg-success border-success text-white"
                            : "border-muted-foreground"
                        }`}
                      >
                        {item.done && <span className="text-xs">✓</span>}
                      </span>
                      <span
                        className={`text-sm ${
                          item.done ? "text-muted-foreground line-through" : "text-foreground"
                        }`}
                      >
                        {item.task}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Source note */}
            <div className="mt-8 p-4 bg-primary/5 rounded-lg text-sm text-muted-foreground">
              <strong>Source:</strong>{" "}
              <code className="text-xs bg-muted px-1 py-0.5 rounded">
                /Users/omega/Projects/FUTURE_ENHANCEMENTS.md
              </code>
            </div>
          </main>
        </div>
      </div>
    </AuthGate>
  );
}
