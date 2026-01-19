"use client";

/**
 * TableOfContents Component
 *
 * Displays a sticky table of contents for long pages.
 * Automatically highlights the current section based on scroll position.
 */

import { useState, useEffect, useCallback, useSyncExternalStore, useRef } from "react";

export interface TOCItem {
  id: string;
  title: string;
  level: number; // 2 = h2, 3 = h3
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export function TableOfContents({ items, className = "" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  const handleScroll = useCallback(() => {
    const headings = items.map((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        return { id: item.id, top: rect.top };
      }
      return null;
    }).filter(Boolean) as { id: string; top: number }[];

    // Find the heading closest to the top of the viewport
    const currentHeading = headings.find((h) => h.top >= 0 && h.top < 200) ||
      headings.filter((h) => h.top < 0).pop();

    if (currentHeading) {
      setActiveId(currentHeading.id);
    }
  }, [items]);

  useEffect(() => {
    // Add scroll listener with throttling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("scroll"));
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 96;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToHeading(id);
    setActiveId(id);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <nav className={`text-sm ${className}`}>
      <div className="font-semibold mb-3 text-foreground">On This Page</div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: item.level === 3 ? "0.75rem" : 0 }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block py-1 transition-colors ${
                activeId === item.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Extracts TOC items from page content.
 * Use this to generate TOC items from h2 and h3 elements.
 *
 * Usage:
 * const items = extractTOCItems([
 *   { id: "overview", title: "Overview", level: 2 },
 *   { id: "installation", title: "Installation", level: 2 },
 *   { id: "step-1", title: "Step 1: Clone", level: 3 },
 * ]);
 */
export function useTOCItems(articleRef: React.RefObject<HTMLElement | null>): TOCItem[] {
  // Cache the snapshot to avoid infinite loops with useSyncExternalStore
  const cachedSnapshot = useRef<TOCItem[]>([]);

  const assignHeadingIds = useCallback(() => {
    const root = articleRef.current;
    if (!root) return;

    const headings = root.querySelectorAll("h2, h3");
    const idCounts = new Map<string, number>();

    const slugify = (text: string) =>
      text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

    const getUniqueId = (base: string) => {
      const count = idCounts.get(base) || 0;
      idCounts.set(base, count + 1);
      return count === 0 ? base : `${base}-${count + 1}`;
    };

    headings.forEach((heading) => {
      const text = heading.textContent || "";
      let id = heading.id || "";
      if (!id && text) {
        id = getUniqueId(slugify(text) || "section");
        heading.id = id;
      } else if (id) {
        const uniqueId = getUniqueId(id);
        if (uniqueId !== id) {
          id = uniqueId;
          heading.id = id;
        }
      }
    });
  }, [articleRef]);

  useEffect(() => {
    assignHeadingIds();
  }, [assignHeadingIds]);

  const subscribe = useCallback(
    (listener: () => void) => {
      const root = articleRef.current;
      if (!root || typeof MutationObserver === "undefined") return () => {};

      const handleMutations = () => {
        assignHeadingIds();
        listener();
      };

      const observer = new MutationObserver(handleMutations);
      observer.observe(root, { childList: true, subtree: true, attributes: true });
      return () => observer.disconnect();
    },
    [articleRef, assignHeadingIds]
  );

  const getSnapshot = useCallback(() => {
    const root = articleRef.current;
    if (!root) return cachedSnapshot.current;

    const headings = root.querySelectorAll("h2, h3");
    const tocItems: TOCItem[] = [];

    headings.forEach((heading) => {
      const text = heading.textContent || "";
      const id = heading.id || "";
      if (id && text) {
        tocItems.push({
          id,
          title: text,
          level: heading.tagName === "H2" ? 2 : 3,
        });
      }
    });

    // Compare with cached snapshot - return cached if unchanged to avoid infinite loops
    const cached = cachedSnapshot.current;
    if (
      cached.length === tocItems.length &&
      cached.every((item, i) => item.id === tocItems[i].id && item.title === tocItems[i].title)
    ) {
      return cached;
    }

    cachedSnapshot.current = tocItems;
    return tocItems;
  }, [articleRef]);

  const emptyArray = useRef<TOCItem[]>([]);
  return useSyncExternalStore(subscribe, getSnapshot, () => emptyArray.current);
}
