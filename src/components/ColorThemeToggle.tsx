"use client";

import { useColorTheme, ColorTheme } from "@/context/ColorThemeContext";

const themes: { id: ColorTheme; color: string; label: string }[] = [
  { id: "goldenrod", color: "#DAA520", label: "Goldenrod" },
  { id: "steel", color: "#64748B", label: "Steel" },
  { id: "violet", color: "#8B5CF6", label: "Violet" },
  { id: "coral", color: "#F97316", label: "Coral" },
  { id: "honey", color: "#F59E0B", label: "Honey" },
  { id: "aqua", color: "#06B6D4", label: "Aqua" },
  { id: "magenta", color: "#D946EF", label: "Magenta" },
];

export function ColorThemeToggle() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground hidden sm:inline">Theme</span>
      <div className="flex items-center gap-1.5 rounded-full border border-border bg-background p-1">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setColorTheme(theme.id)}
            className={`h-6 w-6 rounded-full transition-all ${
              colorTheme === theme.id
                ? "ring-2 ring-offset-2 ring-offset-background ring-foreground/50 scale-110"
                : "hover:scale-105"
            }`}
            style={{ backgroundColor: theme.color }}
            title={theme.label}
            aria-label={`Switch to ${theme.label} theme`}
          />
        ))}
      </div>
    </div>
  );
}
