"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingChat } from "@/components/FloatingChat";
import { ChatProvider } from "@/context/ChatContext";
import { ColorThemeProvider } from "@/context/ColorThemeContext";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ColorThemeProvider>
        <ChatProvider>
        <ScrollProgress variant="gradient" />
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <FloatingChat />
        </ChatProvider>
      </ColorThemeProvider>
    </ThemeProvider>
  );
}
