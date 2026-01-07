import Link from "next/link";
import { blogPosts, getAllCategories } from "@/data/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writing on system design, AI architecture, product thinking, and engineering leadership.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  // Using primary color variants that work with the theme system
  const categoryColors: Record<string, string> = {
    Leadership: "bg-primary/15 text-primary border border-primary/20",
    "System Design": "bg-primary/15 text-primary border border-primary/20",
    Product: "bg-warning/15 text-warning border border-warning/20",
    Architecture: "bg-primary/15 text-primary border border-primary/20",
    Engineering: "bg-success/15 text-success border border-success/20",
  };

  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <Link href={`/blog/${post.slug}`} className="block p-6">
        {/* Category and date */}
        <div className="mb-3 flex items-center gap-3">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              categoryColors[post.category] || "bg-muted text-muted-foreground"
            }`}
          >
            {post.category}
          </span>
          <time className="text-xs text-muted-foreground">
            {formatDate(post.date)}
          </time>
        </div>

        {/* Title */}
        <h2 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h2>

        {/* Description */}
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read more arrow */}
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Read article
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </article>
  );
}

export default function BlogPage() {
  const categories = getAllCategories();
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-muted/30 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Technical writing on system design, AI architecture, product
            thinking, and engineering leadership. Sharing lessons learned from
            building real systems.
          </p>

          {/* Category pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
