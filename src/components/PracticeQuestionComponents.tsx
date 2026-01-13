"use client";

/**
 * Shared components for Practice Questions pages
 * Used across all practice question sub-pages
 */

import { useState } from "react";

// Question component with expandable answer
export function Question({
  number,
  question,
  category,
  answer,
  principalNuance,
}: {
  number: number;
  question: string;
  category: string;
  answer: React.ReactNode;
  principalNuance?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 bg-gradient-to-r from-muted/30 to-transparent hover:from-muted/50 transition-colors"
      >
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
            {number}
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-primary mb-1">{category}</div>
            <p className="text-sm text-foreground font-medium">{question}</p>
          </div>
          <div className="text-muted-foreground text-lg shrink-0">
            {isOpen ? "−" : "+"}
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="p-5 border-t border-border bg-background">
          <div className="mb-4">
            <div className="text-xs font-semibold text-green-500 mb-2 flex items-center gap-2">
              <span>&#10003;</span> Principal-Level Answer
            </div>
            <div className="text-sm text-muted-foreground">{answer}</div>
          </div>
          {principalNuance && (
            <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/30">
              <div className="text-xs font-semibold text-amber-500 mb-2 flex items-center gap-2">
                <span>&#9733;</span> Principal Nuance
              </div>
              <div className="text-sm text-muted-foreground">{principalNuance}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Section header component
export function SectionHeader({
  title,
  description,
  color = "blue",
}: {
  title: string;
  description: string;
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
  };

  return (
    <div className="flex items-center gap-3 mb-6 mt-10 first:mt-0">
      <div className={`w-3 h-10 rounded-full ${colorClasses[color]}`}></div>
      <div>
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

// Part header for sub-pages
export function PartHeader({
  partNumber,
  title,
  description,
  questionRange,
  color = "blue",
}: {
  partNumber: string;
  title: string;
  description: string;
  questionRange: string;
  color?: string;
}) {
  const colorClasses: Record<string, { gradient: string; border: string; badge: string }> = {
    blue: { gradient: "from-blue-500/10", border: "border-blue-500/30", badge: "bg-blue-500" },
    cyan: { gradient: "from-cyan-500/10", border: "border-cyan-500/30", badge: "bg-cyan-500" },
    purple: { gradient: "from-purple-500/10", border: "border-purple-500/30", badge: "bg-purple-500" },
    green: { gradient: "from-green-500/10", border: "border-green-500/30", badge: "bg-green-500" },
  };

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div className={`mb-8 p-6 bg-gradient-to-r ${colors.gradient} to-transparent rounded-xl border ${colors.border}`}>
      <div className="flex items-center gap-3 mb-2">
        <span className={`px-2 py-1 ${colors.badge} text-white text-xs font-bold rounded`}>
          Part {partNumber}
        </span>
        <span className="text-xs text-muted-foreground">{questionRange}</span>
      </div>
      <h1 className="text-xl font-bold text-foreground mb-2">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

// Instructions box
export function InstructionsBox() {
  return (
    <div className="mb-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
      <p className="text-sm text-muted-foreground">
        <strong className="text-foreground">How to use:</strong> Answer each question in your own words before
        revealing the model answer. Focus on the <strong className="text-foreground">why</strong> and the{" "}
        <strong className="text-foreground">risk</strong>, not just definitions. At the Principal TPM bar,
        memorizing definitions is not enough&mdash;you must understand trade-offs well enough to push back on engineering leadership.
      </p>
    </div>
  );
}
