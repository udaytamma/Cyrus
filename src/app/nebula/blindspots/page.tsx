"use client";

/**
 * Blindspots Page - Deep Technical Interview Prep
 *
 * Features:
 * - Technical questions targeting knowledge gaps
 * - Filter by category, difficulty, mastery level
 * - Expandable answers with follow-ups and red flags
 * - Project context integration
 */

import { useState, useMemo } from "react";
import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";
import {
  blindspotQuestions,
  type BlindspotQuestion,
  type BlindspotCategory,
  type Difficulty,
  type MasteryLevel,
} from "@/data/blindspots";

// Color schemes
const difficultyColors: Record<Difficulty, { bg: string; text: string }> = {
  Hard: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400" },
  "Very Hard": { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400" },
  Expert: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400" },
};

const masteryColors: Record<MasteryLevel, { bg: string; text: string }> = {
  Master: { bg: "bg-primary/10", text: "text-primary" },
  "In Detail": { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400" },
  "In Brief": { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400" },
};

function BlindspotCard({
  question,
  index,
}: {
  question: BlindspotQuestion;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const difficultyStyle = difficultyColors[question.difficulty];
  const masteryStyle = masteryColors[question.masteryLevel];

  const formatAnswer = (answer: string): string => {
    return answer
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>')
      .replace(
        /```(\w+)?\n([\s\S]*?)```/g,
        '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>'
      )
      .replace(/^- (.*)$/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>\n?)+/g, '<ul class="list-disc pl-6 my-2">$&</ul>')
      .replace(/^\d+\. (.*)$/gm, "<li>$1</li>")
      .replace(/\n\n/g, "</p><p class='my-3'>")
      .replace(/\n/g, "<br />");
  };

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-start gap-3">
          <span className="text-sm font-bold text-muted-foreground mt-1 w-8">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                {question.category}
              </span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${difficultyStyle.bg} ${difficultyStyle.text}`}>
                {question.difficulty}
              </span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${masteryStyle.bg} ${masteryStyle.text}`}>
                {question.masteryLevel}
              </span>
            </div>
            <h3 className="font-medium text-foreground">{question.question}</h3>
          </div>
          <svg
            className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border bg-muted/20 p-4">
          <div className="pl-11 space-y-4">
            {/* Why This is Asked */}
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Why This Is Asked
              </div>
              <p className="text-sm text-muted-foreground">{question.whyAsked}</p>
            </div>

            {/* Project Context */}
            {question.projectContext && (
              <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  Project Context
                </div>
                <p className="text-sm text-muted-foreground">{question.projectContext}</p>
              </div>
            )}

            {/* Answer */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                Answer
              </div>
              <div
                className="text-sm text-muted-foreground prose prose-sm max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: formatAnswer(question.answer) }}
              />
            </div>

            {/* Follow-up Questions */}
            {question.followUps?.length > 0 && (
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Follow-up Questions
                </div>
                <ul className="space-y-2">
                  {question.followUps.map((followUp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">Q{idx + 1}.</span>
                      <span>{followUp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Red Flags */}
            {question.redFlags?.length > 0 && (
              <div className="p-3 bg-red-500/5 rounded-lg border border-red-500/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
                  Red Flags (Avoid Saying)
                </div>
                <ul className="space-y-1">
                  {question.redFlags.map((flag, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-red-500">-</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function BlindspotsContent() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | BlindspotCategory>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"all" | Difficulty>("all");
  const [selectedMastery, setSelectedMastery] = useState<"all" | MasteryLevel>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories = useMemo(() => {
    const categories = new Set<BlindspotCategory>();
    blindspotQuestions.forEach((q) => categories.add(q.category));
    return Array.from(categories).sort();
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blindspotQuestions.forEach((q) => {
      counts[q.category] = (counts[q.category] || 0) + 1;
    });
    return counts;
  }, []);

  const masteryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blindspotQuestions.forEach((q) => {
      counts[q.masteryLevel] = (counts[q.masteryLevel] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredQuestions = useMemo(() => {
    return blindspotQuestions.filter((q) => {
      if (selectedCategory !== "all" && q.category !== selectedCategory) return false;
      if (selectedDifficulty !== "all" && q.difficulty !== selectedDifficulty) return false;
      if (selectedMastery !== "all" && q.masteryLevel !== selectedMastery) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          q.question.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query) ||
          q.category.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedCategory, selectedDifficulty, selectedMastery, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedDifficulty("all");
    setSelectedMastery("all");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/nebula" className="hover:text-primary transition-colors">
              Nebula
            </Link>
            <span>/</span>
            <span className="text-foreground">Blindspots</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Blindspots</h1>
              <p className="text-muted-foreground">
                {blindspotQuestions.length} deep technical questions
              </p>
            </div>
          </div>

          {/* Mastery Level Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            {(["Master", "In Detail", "In Brief"] as MasteryLevel[]).map((level) => {
              const style = masteryColors[level];
              return (
                <button
                  key={level}
                  onClick={() => setSelectedMastery(selectedMastery === level ? "all" : level)}
                  className={`rounded-lg p-3 text-center border transition-colors ${
                    selectedMastery === level
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className={`text-xl font-bold ${style.text}`}>
                    {masteryCounts[level] || 0}
                  </div>
                  <div className="text-xs text-muted-foreground">{level}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card py-4">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as "all" | BlindspotCategory)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              >
                <option value="all">All Categories ({blindspotQuestions.length})</option>
                {allCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat} ({categoryCounts[cat] || 0})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value as "all" | Difficulty)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              >
                <option value="all">All Difficulties</option>
                <option value="Hard">Hard</option>
                <option value="Very Hard">Very Hard</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search blindspots..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-sm text-muted-foreground mb-4">
            Showing {filteredQuestions.length} of {blindspotQuestions.length} questions
          </div>

          <div className="space-y-4">
            {filteredQuestions.map((question, idx) => (
              <BlindspotCard key={question.id} question={question} index={idx} />
            ))}

            {filteredQuestions.length === 0 && (
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <p className="text-muted-foreground">No questions match your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-sm text-primary hover:underline">
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BlindspotsPage() {
  return (
    <AuthGate storageKey="cyrus_nebula_auth" title="Nebula" subtitle="Interview Preparation Hub">
      <BlindspotsContent />
    </AuthGate>
  );
}
