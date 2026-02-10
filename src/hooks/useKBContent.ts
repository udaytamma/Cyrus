import { useState, useEffect, useRef } from "react";

export interface KnowledgeBaseContent {
  slug: string;
  title: string;
  date: string;
  content: string;
  sourceFile: string;
}

interface UseKBContentResult {
  content: KnowledgeBaseContent | null;
  isLoading: boolean;
  error: Error | null;
}

// Simple in-memory cache to avoid re-fetching documents
const contentCache = new Map<string, KnowledgeBaseContent>();

/**
 * Hook to fetch knowledge base document content on demand.
 * Content is loaded from /public/kb/{slug}.json files.
 *
 * Features:
 * - Lazy loading: content only fetched when slug is provided
 * - Caching: previously fetched documents are cached in memory
 * - Abort handling: cancels in-flight requests when slug changes
 */
export function useKBContent(slug: string | null): UseKBContentResult {
  const [content, setContent] = useState<KnowledgeBaseContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Reset state when no slug
    if (!slug) {
      setContent(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    // Check cache first
    const cached = contentCache.get(slug);
    if (cached) {
      setContent(cached);
      setIsLoading(false);
      setError(null);
      return;
    }

    // Cancel any in-flight request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);

    fetch(`/kb/${slug}.json`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load document: ${slug}`);
        }
        return res.json();
      })
      .then((data: KnowledgeBaseContent) => {
        // Cache the result
        contentCache.set(slug, data);
        setContent(data);
        setIsLoading(false);
      })
      .catch((err) => {
        // Ignore abort errors (expected when slug changes quickly)
        if (err.name === "AbortError") {
          return;
        }
        setError(err);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [slug]);

  return { content, isLoading, error };
}

/**
 * Utility to prefetch a document into cache (optional optimization)
 */
export async function prefetchKBContent(slug: string): Promise<void> {
  if (contentCache.has(slug)) return;

  try {
    const res = await fetch(`/kb/${slug}.json`);
    if (res.ok) {
      const data = await res.json();
      contentCache.set(slug, data);
    }
  } catch {
    // Silently fail - prefetch is optional
  }
}

/**
 * Clear the content cache (useful for testing or forced refresh)
 */
export function clearKBContentCache(): void {
  contentCache.clear();
}
