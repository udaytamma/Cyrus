"use client";

/**
 * CopyableCodeBlock Component
 *
 * A code block with:
 * - Syntax highlighting via Shiki
 * - Copy-to-clipboard button with visual feedback
 * - Language badge in header
 */

import { useState, useCallback, useEffect } from "react";
import { codeToHtml } from "shiki";

interface CopyableCodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export function CopyableCodeBlock({
  code,
  language = "text",
  title,
  className = "",
}: CopyableCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);

  // Highlight code on mount/change
  useEffect(() => {
    let mounted = true;

    const highlight = async () => {
      try {
        // Map common language aliases
        const langMap: Record<string, string> = {
          sh: "bash",
          shell: "bash",
          zsh: "bash",
          js: "javascript",
          ts: "typescript",
          py: "python",
          yml: "yaml",
          dockerfile: "docker",
          env: "bash",
          ini: "ini",
          conf: "ini",
        };

        const lang = langMap[language.toLowerCase()] || language.toLowerCase();

        const html = await codeToHtml(code, {
          lang,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
        });

        if (mounted) {
          setHighlightedCode(html);
        }
      } catch {
        // Fallback for unsupported languages
        if (mounted) {
          setHighlightedCode(null);
        }
      }
    };

    highlight();

    return () => {
      mounted = false;
    };
  }, [code, language]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [code]);

  return (
    <div className={`not-prose my-4 rounded-lg border border-border overflow-hidden ${className}`}>
      {/* Header with title and copy button */}
      <div className="flex items-center justify-between bg-muted/50 px-4 py-2 border-b border-border">
        <div className="flex items-center gap-2">
          {title && <span className="text-sm font-semibold">{title}</span>}
          {language && (
            <span className="text-xs text-muted-foreground uppercase px-1.5 py-0.5 bg-muted rounded">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          title={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? (
            <>
              <CheckIcon className="h-3.5 w-3.5 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content with syntax highlighting */}
      {highlightedCode ? (
        <div
          className="shiki-wrapper p-4 text-sm overflow-x-auto [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      ) : (
        <pre className="p-4 text-sm overflow-x-auto bg-muted/30">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

// Simple inline SVG icons
function CopyIcon({ className }: { className?: string }) {
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
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
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
