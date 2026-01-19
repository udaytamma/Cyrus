"use client";

/**
 * PageMinimap - Compact page location indicator for long-form content.
 */

import type { RefObject } from "react";
import { useCallback, useEffect, useState } from "react";
import type { TOCItem } from "./TableOfContents";
import { useTOCItems } from "./TableOfContents";

interface PageMinimapProps {
  targetRef: RefObject<HTMLElement | null>;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  levels?: number[];
  labelMode?: "title" | "roman" | "roman-title";
  widthClass?: string;
  className?: string;
}

export function PageMinimap({
  targetRef,
  scrollContainerRef,
  levels = [2, 3],
  labelMode = "title",
  widthClass = "w-44",
  className = "",
}: PageMinimapProps) {
  const items = useTOCItems(targetRef);
  const visibleItems = items.filter((item) => levels.includes(item.level));
  const [activeId, setActiveId] = useState<string>("");

  const toRoman = (value: number) => {
    const map: Array<[number, string]> = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"],
    ];
    let remaining = value;
    let result = "";
    map.forEach(([num, roman]) => {
      while (remaining >= num) {
        result += roman;
        remaining -= num;
      }
    });
    return result;
  };

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef?.current;
    const isContainerScrollable = !!container && container.scrollHeight > container.clientHeight + 1;
    const containerTop = isContainerScrollable ? container.getBoundingClientRect().top : 0;
    const trackItems = visibleItems.length > 0 ? visibleItems : items;
    const headings = trackItems
      .map((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return { id: item.id, top: rect.top - containerTop };
        }
        return null;
      })
      .filter(Boolean) as { id: string; top: number }[];

    const currentHeading =
      headings.find((h) => h.top >= 0 && h.top < 220) ||
      headings.filter((h) => h.top < 0).pop();

    if (currentHeading) {
      setActiveId(currentHeading.id);
    }
  }, [items, scrollContainerRef, visibleItems]);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    handleScroll();

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
    const scrollTarget = scrollContainerRef?.current;

    if (scrollTarget) {
      scrollTarget.addEventListener("scroll", onScroll as EventListener, { passive: true });
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (scrollTarget) {
        scrollTarget.removeEventListener("scroll", onScroll as EventListener);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll, items.length, scrollContainerRef]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const container = scrollContainerRef?.current;
      if (container && container.scrollHeight > container.clientHeight + 1) {
        const containerTop = container.getBoundingClientRect().top;
        const top = element.getBoundingClientRect().top - containerTop + container.scrollTop - offset;
        container.scrollTo({ top, behavior: "smooth" });
      } else {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setActiveId(id);
    }
  };

  if (visibleItems.length === 0) {
    return null;
  }

  const renderItem = (item: TOCItem, index: number) => {
    const isActive = activeId === item.id;
    const dotSize = item.level === 2 ? "h-2.5 w-2.5" : "h-2 w-2";
    const indentClass = item.level === 3 ? "pl-3" : "pl-0";
    const cleanTitle = (title: string) =>
      title.replace(/^\s*(?:[ivxlcdm]+|\d+)[\.\)\-:]\s+/i, "").trim();
    const baseTitle = labelMode === "roman-title" ? cleanTitle(item.title) : item.title;
    const label =
      labelMode === "roman"
        ? toRoman(index + 1)
        : labelMode === "roman-title"
        ? `${toRoman(index + 1)}. ${baseTitle}`
        : baseTitle;
    return (
      <li key={item.id} className={indentClass}>
        <a
          href={`#${item.id}`}
          onClick={(e) => handleClick(e, item.id)}
          className={`group flex items-center gap-2 text-xs transition-colors ${
            isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span
            className={`rounded-full border ${
              isActive ? "bg-primary border-primary" : "border-muted-foreground/50"
            } ${dotSize}`}
          />
          <span className="whitespace-normal leading-snug">{label}</span>
        </a>
      </li>
    );
  };

  return (
    <aside className={`hidden lg:block ${widthClass} shrink-0 ${className}`}>
      <div className="sticky top-28">
        <div className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase mb-3">
          Minimap
        </div>
        <div className="relative pl-3">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />
          <ul className="space-y-3">{visibleItems.map((item, index) => renderItem(item, index))}</ul>
        </div>
      </div>
    </aside>
  );
}
