"use client";

/**
 * Scratch Pad Document Client Component
 *
 * Renders individual documents with full markdown support including Mermaid diagrams
 */

import { useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AuthGate } from "@/components/AuthGate";
import { getScratchPadDoc } from "@/data/scratch-pad";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

// Initialize mermaid with dark mode support
mermaid.initialize({
  startOnLoad: false,
  theme: "neutral",
  securityLevel: "loose",
  fontFamily: "inherit",
});

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Mermaid diagram component
function MermaidDiagram({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
      containerRef.current.innerHTML = "";

      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        })
        .catch((error) => {
          console.error("Mermaid render error:", error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `<pre class="text-red-500">Diagram error: ${error.message}</pre>`;
          }
        });
    }
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className="my-6 flex justify-center overflow-x-auto"
    />
  );
}

// Custom code block renderer
function CodeBlock({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";
  const code = String(children).replace(/\n$/, "");

  // Render Mermaid diagrams
  if (language === "mermaid") {
    return <MermaidDiagram chart={code} />;
  }

  // Regular code block with monospace font
  return (
    <code
      className={`${className || ""} font-mono text-sm`}
      style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}
    >
      {children}
    </code>
  );
}

function DocumentContent() {
  const params = useParams();
  const slug = params.slug as string;
  const doc = getScratchPadDoc(slug);

  if (!doc) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Document Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The document you are looking for does not exist.
          </p>
          <Link
            href="/nebula/scratch-pad"
            className="text-primary hover:underline"
          >
            &larr; Back to Scratch Pad
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link
            href="/nebula/scratch-pad"
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 mb-4"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Scratch Pad
          </Link>

          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {doc.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span>{formatDate(doc.date)}</span>
            <span className="text-border">|</span>
            <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
              {doc.sourceFile}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-primary prose-code:before:content-none prose-code:after:content-none prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code: CodeBlock,
              }}
            >
              {doc.content}
            </ReactMarkdown>
          </article>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-6 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 flex justify-between items-center">
          <Link
            href="/nebula/scratch-pad"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            &larr; All Documents
          </Link>
          <Link
            href="/nebula"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Nebula Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function ScratchPadDocumentClient() {
  return (
    <AuthGate
      storageKey="cyrus_nebula_auth"
      title="Scratch Pad"
      subtitle="Document"
    >
      <DocumentContent />
    </AuthGate>
  );
}
