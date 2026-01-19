"use client";

/**
 * TableOfContents Component
 *
 * Displays a sticky table of contents for long pages.
 * Automatically highlights the current section based on scroll position.
 */

import { useState, useEffect, useCallback } from "react";

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
    // Initial check
    handleScroll();

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
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Account for fixed header
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
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
  const [items, setItems] = useState<TOCItem[]>([]);

  useEffect(() => {
    if (articleRef.current) {
      const headings = articleRef.current.querySelectorAll("h2, h3");
      const tocItems: TOCItem[] = [];
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
        if (id && text) {
          tocItems.push({
            id,
            title: text,
            level: heading.tagName === "H2" ? 2 : 3,
          });
        }
      });

      setItems(tocItems);
    }
  }, [articleRef]);

  return items;
}
