"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChatModal } from "./ChatModal";
import { useChat } from "@/context/ChatContext";

// Pages where the floating chat should NOT appear
const EXCLUDED_PATHS = ["/nebula", "/journey", "/blog"];

export function FloatingChat() {
  const pathname = usePathname();
  const { isChatOpen, initialMessage, openChat, closeChat, clearInitialMessage } = useChat();
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  // Check if current path should show the chat button
  const shouldShowChat = !EXCLUDED_PATHS.some((path) => pathname.startsWith(path));

  // Track scroll to show/hide floating chat button
  useEffect(() => {
    if (!shouldShowChat) return;

    const handleScroll = () => {
      // On home page, show after scrolling past hero (80vh)
      // On other pages, show after minimal scroll (100px)
      const isHomePage = pathname === "/";
      const scrollThreshold = isHomePage ? window.innerHeight * 0.8 : 100;
      setShowFloatingButton(window.scrollY > scrollThreshold);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, shouldShowChat]);

  // Don't render anything on excluded pages
  if (!shouldShowChat) return null;

  return (
    <>
      {/* AI Chat Modal */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={closeChat}
        initialMessage={initialMessage}
        onInitialMessageSent={clearInitialMessage}
      />

      {/* Floating AI Chat Button */}
      {showFloatingButton && !isChatOpen && (
        <button
          onClick={openChat}
          className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-background border border-border shadow-lg shadow-primary/20 transition-all hover:scale-110 hover:shadow-xl hover:shadow-primary/30 animate-in fade-in slide-in-from-bottom-4 duration-300"
          aria-label="Open AI Assistant"
        >
          {/* Subtle pulse ring - plays once on appear */}
          <span className="absolute inset-0 rounded-full border-2 border-primary/40 animate-[ping_1s_ease-out_1]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/favicon.svg"
            alt="zeroleaf AI assistant"
            className="h-8 w-8"
          />
          {/* Sparkle indicator */}
          <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-amber-900">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}
