"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string | null;
  onInitialMessageSent?: () => void;
}

// Worker URL - update after deployment
const WORKER_URL = "https://uday-ai-worker.udaytamma.workers.dev";
const STORAGE_KEY = "uday-ai-chat-history";

export function ChatModal({ isOpen, onClose, initialMessage, onInitialMessageSent }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>(() => {
    // Initialize from sessionStorage if available
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const initialMessageSentRef = useRef(false);

  // Persist messages to sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input and scroll to bottom when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        // Scroll to bottom if there are existing messages
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
      }, 100);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Core send function that accepts message directly
  const sendMessageDirect = useCallback(
    async (messageText: string) => {
      if (!messageText.trim() || isLoading) return;

      const userMessage = messageText.trim();
      setError(null);

      // Add user message to chat
      const newUserMessage: Message = {
        role: "user",
        parts: [{ text: userMessage }],
      };
      setMessages((prev) => [...prev, newUserMessage]);
      setIsLoading(true);

      try {
        const response = await fetch(WORKER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: userMessage,
            history: messages,
          }),
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        // Add AI response to chat
        const aiMessage: Message = {
          role: "model",
          parts: [{ text: data.response }],
        };
        setMessages((prev) => [...prev, aiMessage]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to send message");
        // Remove the user message if there was an error
        setMessages((prev) => prev.slice(0, -1));
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages]
  );

  // Handle initial message from suggestion buttons on home page
  useEffect(() => {
    if (isOpen && initialMessage && !initialMessageSentRef.current && !isLoading) {
      initialMessageSentRef.current = true;
      // Small delay to ensure modal is fully rendered
      setTimeout(() => {
        sendMessageDirect(initialMessage);
        onInitialMessageSent?.();
      }, 150);
    }
    // Reset flag when modal closes
    if (!isOpen) {
      initialMessageSentRef.current = false;
    }
  }, [isOpen, initialMessage, isLoading, sendMessageDirect, onInitialMessageSent]);

  // Send message from input field
  const sendMessage = useCallback(() => {
    if (!input.trim()) return;
    const messageText = input.trim();
    setInput("");
    sendMessageDirect(messageText);
  }, [input, sendMessageDirect]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal - full screen on mobile, constrained on desktop */}
      <div className="relative z-10 flex h-full w-full flex-col overflow-hidden bg-card sm:h-auto sm:max-h-[90vh] sm:max-w-4xl sm:rounded-2xl sm:border sm:border-border sm:shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/favicon.svg"
                alt="zeroleaf"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-semibold text-foreground">
                Uday&apos;s AI Assistant
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Ask me about Uday&apos;s experience
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                title="Clear chat"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            )}
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center px-2">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 sm:h-8 sm:w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-medium text-foreground">
                How can I help you?
              </h3>
              <p className="mb-4 sm:mb-6 max-w-sm text-sm sm:text-base text-muted-foreground">
                I can answer questions about Uday&apos;s professional experience,
                technical skills, and portfolio projects.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "What is Uday's experience with AI?",
                  "Tell me about the Fraud Detection project",
                  "What certifications does Uday have?",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => sendMessageDirect(suggestion)}
                    className="rounded-full border border-border bg-background px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => {
                const isLastModelMessage =
                  message.role === "model" &&
                  index === messages.length - 1;
                const { mainContent, questions } =
                  message.role === "model"
                    ? extractFollowUpQuestions(message.parts[0].text)
                    : { mainContent: message.parts[0].text, questions: [] };

                return (
                  <div key={index}>
                    <div
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] px-3 py-2 ${
                          message.role === "user"
                            ? "rounded-2xl rounded-br-md bg-primary text-primary-foreground"
                            : "rounded-2xl rounded-bl-md bg-muted text-foreground"
                        }`}
                      >
                        <div
                          className={`prose prose-base max-w-none ${
                            message.role === "user"
                              ? "prose-invert"
                              : "dark:prose-invert"
                          }`}
                        >
                          {message.role === "model" ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: formatMarkdown(mainContent),
                              }}
                            />
                          ) : (
                            <p className="m-0">{message.parts[0].text}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Follow-up suggestions - only show for the last AI message */}
                    {isLastModelMessage && questions.length > 0 && !isLoading && (
                      <div className="mt-3 flex flex-wrap gap-2 pl-2">
                        {questions.map((question, qIndex) => (
                          <button
                            key={qIndex}
                            onClick={() => sendMessageDirect(question)}
                            className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/5 hover:text-foreground"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-muted px-3 py-2">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.3s]" />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.15s]" />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Error message */}
        {error && (
          <div className="border-t border-red-500/20 bg-red-500/10 px-4 sm:px-6 py-2 sm:py-3">
            <p className="text-xs sm:text-sm text-red-500">{error}</p>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-border p-3 sm:p-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Uday's experience..."
              disabled={isLoading}
              className="flex-1 rounded-xl border border-border bg-background px-3 py-2.5 sm:px-4 sm:py-3.5 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              aria-label={isLoading ? "Sending message..." : "Send message"}
            >
              {isLoading ? (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <p className="mt-2 text-center text-[10px] sm:text-xs text-muted-foreground">
            Powered by Gemini 3 Flash
          </p>
        </div>
      </div>
    </div>
  );
}

// Extract follow-up questions from AI response
function extractFollowUpQuestions(text: string): { mainContent: string; questions: string[] } {
  // Look for the follow-up section pattern
  const followUpPattern = /---\s*\n\*\*Want to learn more\?\*\*\s*\n([\s\S]*?)$/;
  const match = text.match(followUpPattern);

  if (!match) {
    return { mainContent: text, questions: [] };
  }

  const mainContent = text.slice(0, match.index).trim();
  const questionsSection = match[1];

  // Extract questions from brackets: - [Question here?]
  const questionPattern = /\[([^\]]+)\]/g;
  const questions: string[] = [];
  let questionMatch;

  while ((questionMatch = questionPattern.exec(questionsSection)) !== null) {
    questions.push(questionMatch[1]);
  }

  return { mainContent, questions };
}

// Markdown formatter for AI responses
function formatMarkdown(text: string): string {
  // Split into lines for processing
  const lines = text.split("\n");
  let html = "";
  let inList = false;
  let consecutiveEmpty = 0;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Track consecutive empty lines to avoid excessive spacing
    if (line.trim() === "") {
      consecutiveEmpty++;
      if (consecutiveEmpty > 1) continue; // Skip multiple empty lines
    } else {
      consecutiveEmpty = 0;
    }

    // Process inline formatting first
    line = line
      // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Italic (but not bullets)
      .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>")
      // Code inline
      .replace(/`(.*?)`/g, '<code class="rounded bg-muted/50 px-1.5 py-0.5 text-sm">$1</code>')
      // Links
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:text-primary/80">$1</a>'
      );

    // Handle headings
    if (line.startsWith("## ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h3 class="text-base font-semibold text-foreground mt-3 mb-1">${line.slice(3)}</h3>`;
    }
    // Handle bullet points
    else if (line.startsWith("- ") || line.startsWith("• ") || line.startsWith("* ")) {
      if (!inList) {
        html += '<ul class="list-disc list-inside space-y-0.5 my-1">';
        inList = true;
      }
      const content = line.startsWith("* ") ? line.slice(2) : line.slice(2);
      html += `<li class="text-foreground">${content}</li>`;
    }
    // Handle empty lines - use minimal spacing
    else if (line.trim() === "") {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      // Don't add <br> - rely on element margins instead
    }
    // Regular text
    else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<p class="my-1">${line}</p>`;
    }
  }

  // Close any open list
  if (inList) {
    html += "</ul>";
  }

  return html;
}
