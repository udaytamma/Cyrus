import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderMarkdown(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="my-4 space-y-2 pl-6">
          {listItems.map((item, i) => (
            <li key={i} className="list-disc text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
    inList = false;
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {tableHeaders.map((header, i) => (
                  <th
                    key={i}
                    className="px-4 py-2 text-left font-semibold text-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, ri) => (
                <tr key={ri} className="border-b border-border">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2 text-muted-foreground">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      tableHeaders = [];
    }
    inTable = false;
  };

  const flushCode = () => {
    if (codeLines.length > 0) {
      elements.push(
        <pre
          key={`code-${elements.length}`}
          className="my-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm"
        >
          <code className="text-foreground">{codeLines.join("\n")}</code>
        </pre>
      );
      codeLines = [];
    }
    inCodeBlock = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        flushCode();
      } else {
        flushList();
        flushTable();
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    // Horizontal rule
    if (line === "---") {
      flushList();
      flushTable();
      elements.push(
        <hr key={`hr-${elements.length}`} className="my-8 border-border" />
      );
      continue;
    }

    // Headers
    if (line.startsWith("## ")) {
      flushList();
      flushTable();
      elements.push(
        <h2
          key={`h2-${elements.length}`}
          className="mb-4 mt-8 text-2xl font-bold text-foreground"
        >
          {line.slice(3)}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      flushTable();
      elements.push(
        <h3
          key={`h3-${elements.length}`}
          className="mb-3 mt-6 text-xl font-semibold text-foreground"
        >
          {line.slice(4)}
        </h3>
      );
      continue;
    }

    // Table
    if (line.startsWith("|") && line.endsWith("|")) {
      flushList();
      const cells = line
        .split("|")
        .filter((c) => c.trim() !== "")
        .map((c) => c.trim());

      if (!inTable) {
        tableHeaders = cells;
        inTable = true;
      } else if (cells.every((c) => c.match(/^[-:]+$/))) {
        // Separator row, skip
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      flushTable();
    }

    // List items
    if (line.startsWith("- ")) {
      if (!inList) {
        inList = true;
      }
      listItems.push(line.slice(2));
      continue;
    } else if (inList) {
      flushList();
    }

    // Numbered list
    if (line.match(/^\d+\. /)) {
      flushList();
      const text = line.replace(/^\d+\. /, "");
      elements.push(
        <p key={`num-${elements.length}`} className="my-2 text-muted-foreground">
          <span className="font-semibold text-foreground">
            {line.match(/^\d+/)?.[0]}.
          </span>{" "}
          {renderInline(text)}
        </p>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={`p-${elements.length}`} className="my-4 text-muted-foreground">
        {renderInline(line)}
      </p>
    );
  }

  // Flush remaining
  flushList();
  flushTable();
  flushCode();

  return elements;
}

function renderInline(text: string): React.ReactNode {
  // Bold
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Inline code
    const codeParts = part.split(/(`[^`]+`)/g);
    return codeParts.map((codePart, j) => {
      if (codePart.startsWith("`") && codePart.endsWith("`")) {
        return (
          <code
            key={`${i}-${j}`}
            className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground"
          >
            {codePart.slice(1, -1)}
          </code>
        );
      }
      return codePart;
    });
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    Leadership: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    "System Design": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Product: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    Architecture: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    Engineering: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground"
            >
              Blog
            </Link>
            <svg
              className="h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-foreground line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Header */}
        <header className="mb-8 border-b border-border pb-8">
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                categoryColors[post.category] || "bg-muted text-muted-foreground"
              }`}
            >
              {post.category}
            </span>
            <time className="text-sm text-muted-foreground">
              {formatDate(post.date)}
            </time>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground">{post.description}</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-muted px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-slate max-w-none dark:prose-invert">
          {renderMarkdown(post.content)}
        </div>
      </article>

      {/* Back to blog */}
      <div className="border-t border-border py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
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
            Back to blog
          </Link>
        </div>
      </div>
    </div>
  );
}
