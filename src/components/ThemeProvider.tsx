"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { notifyLocalStorageChange } from "../hooks/useLocalStorageFlag";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(
    (listener) => {
      if (typeof window === "undefined") return () => {};

      const handler = (event: StorageEvent | Event) => {
        if (event instanceof StorageEvent && event.key && event.key !== "theme") return;
        listener();
      };

      window.addEventListener("storage", handler);
      window.addEventListener("cyrus-local-storage", handler as EventListener);
      return () => {
        window.removeEventListener("storage", handler);
        window.removeEventListener("cyrus-local-storage", handler as EventListener);
      };
    },
    (): Theme => {
      if (typeof window === "undefined") return "system";
      const stored = localStorage.getItem("theme") as Theme | null;
      return stored ?? "system";
    },
    (): Theme => "system"
  );

  const prefersDark = useSyncExternalStore(
    (listener) => {
      if (typeof window === "undefined") return () => {};
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => listener();
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    },
    () => (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches),
    () => false
  );

  const resolvedTheme: "light" | "dark" = theme === "system" ? (prefersDark ? "dark" : "light") : theme;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", resolvedTheme);
  }, [resolvedTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    notifyLocalStorageChange("theme");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
