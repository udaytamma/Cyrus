"use client";

/**
 * Interview Questions Page with Pagination
 *
 * Features:
 * - 67 questions with pagination (10 per page)
 * - Filter by level (Sr Manager, Director, Executive)
 * - Filter by topic
 * - Search functionality
 * - Expandable answer cards
 */

import { useState, useMemo } from "react";
import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";
import { questions, type Question, type Level, type Topic } from "@/data/questions";

const QUESTIONS_PER_PAGE = 10;
const levels: ("all" | Level)[] = ["all", "Sr Manager", "Director", "Executive"];

// Level badge colors
const levelColors: Record<Level, { bg: string; text: string }> = {
  "Sr Manager": { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400" },
  Director: { bg: "bg-primary/10", text: "text-primary" },
  Executive: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400" },
};

function QuestionCard({ question, index }: { question: Question; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const levelStyle = levelColors[question.level];

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
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${levelStyle.bg} ${levelStyle.text}`}>
                {question.level}
              </span>
              {question.topics.slice(0, 3).map((topic) => (
                <span key={topic} className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  {topic}
                </span>
              ))}
              {question.topics.length > 3 && (
                <span className="text-xs text-muted-foreground">+{question.topics.length - 3}</span>
              )}
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
          <div className="pl-11">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Answer</div>
            <div
              className="text-sm text-muted-foreground prose prose-sm max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: formatAnswer(question.answer) }}
            />

            {((question.projectLinks?.length ?? 0) > 0 || (question.externalResources?.length ?? 0) > 0) && (
              <div className="mt-4 pt-4 border-t border-border">
                {question.projectLinks && question.projectLinks.length > 0 && (
                  <div className="mb-3">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">Project Documentation</div>
                    <div className="flex flex-wrap gap-2">
                      {question.projectLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          className="text-xs text-primary hover:underline bg-primary/5 px-2 py-1 rounded"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {question.externalResources && question.externalResources.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-2">External Resources</div>
                    <div className="flex flex-wrap gap-2">
                      {question.externalResources.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-primary bg-muted px-2 py-1 rounded inline-flex items-center gap-1"
                        >
                          {link.label}
                          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5V8.5C3 8.77614 3.22386 9 3.5 9H8.5C8.77614 9 9 8.77614 9 8.5V6.5H10V8.5C10 9.32843 9.32843 10 8.5 10H3.5C2.67157 10 2 9.32843 2 8.5V3.5C2 2.67157 2.67157 2 3.5 2H5.5V3H3.5ZM7 2H10V5H9V3.70711L6.35355 6.35355L5.64645 5.64645L8.29289 3H7V2Z" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-lg border border-border text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
      >
        Previous
      </button>

      <div className="flex items-center gap-1">
        {pages.map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`} className="px-2 text-muted-foreground">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={`w-10 h-10 rounded-lg text-sm transition-colors ${
                currentPage === page
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:bg-muted"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-lg border border-border text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
      >
        Next
      </button>
    </div>
  );
}

function QuestionsContent() {
  const [selectedLevel, setSelectedLevel] = useState<"all" | Level>("all");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    questions.forEach((q) => q.topics.forEach((t) => topics.add(t)));
    return Array.from(topics).sort();
  }, []);

  const levelCounts = useMemo(() => {
    const counts: Record<string, number> = { all: questions.length };
    questions.forEach((q) => {
      counts[q.level] = (counts[q.level] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (selectedLevel !== "all" && q.level !== selectedLevel) return false;
      if (selectedTopic !== "all" && !q.topics.includes(selectedTopic as Topic)) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          q.question.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query) ||
          q.topics.some((t) => t.toLowerCase().includes(query))
        );
      }
      return true;
    });
  }, [selectedLevel, selectedTopic, searchQuery]);

  const totalPages = Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE);
  const paginatedQuestions = filteredQuestions.slice(
    (currentPage - 1) * QUESTIONS_PER_PAGE,
    currentPage * QUESTIONS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleFilterChange = <T,>(setter: (value: T) => void, value: T) => {
    setter(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-8">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/nebula" className="hover:text-primary transition-colors">
              Nebula
            </Link>
            <span>/</span>
            <span className="text-foreground">Questions</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <span className="text-2xl">📋</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Interview Questions</h1>
              <p className="text-muted-foreground">
                {questions.length} questions across {allTopics.length} topics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card py-4">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          {/* Level filter */}
          <div className="mb-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Level
            </label>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => handleFilterChange(setSelectedLevel, level)}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    selectedLevel === level
                      ? "bg-primary text-primary-foreground"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  {level === "all" ? "All Levels" : level}
                  <span className="ml-1.5 text-xs opacity-70">({levelCounts[level] || 0})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Topic and Search */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Topic
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => handleFilterChange(setSelectedTopic, e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              >
                <option value="all">All Topics</option>
                {allTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => handleFilterChange(setSearchQuery, e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-6">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="text-sm text-muted-foreground mb-4 flex items-center justify-between">
            <span>
              Showing {(currentPage - 1) * QUESTIONS_PER_PAGE + 1}-
              {Math.min(currentPage * QUESTIONS_PER_PAGE, filteredQuestions.length)} of{" "}
              {filteredQuestions.length} questions
            </span>
            <span>Page {currentPage} of {totalPages}</span>
          </div>

          <div className="space-y-4">
            {paginatedQuestions.map((question, idx) => (
              <QuestionCard
                key={question.id}
                question={question}
                index={(currentPage - 1) * QUESTIONS_PER_PAGE + idx}
              />
            ))}

            {paginatedQuestions.length === 0 && (
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <p className="text-muted-foreground">No questions match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedLevel("all");
                    setSelectedTopic("all");
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          )}
        </div>
      </section>
    </div>
  );
}

export default function QuestionsPage() {
  return (
    <AuthGate storageKey="cyrus_nebula_auth" title="Nebula" subtitle="Interview Preparation Hub">
      <QuestionsContent />
    </AuthGate>
  );
}
