"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface ChatContextType {
  isChatOpen: boolean;
  initialMessage: string | null;
  openChat: () => void;
  openChatWithMessage: (message: string) => void;
  closeChat: () => void;
  clearInitialMessage: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string | null>(null);

  const openChat = useCallback(() => setIsChatOpen(true), []);

  const openChatWithMessage = useCallback((message: string) => {
    setInitialMessage(message);
    setIsChatOpen(true);
  }, []);

  const closeChat = useCallback(() => setIsChatOpen(false), []);

  const clearInitialMessage = useCallback(() => setInitialMessage(null), []);

  return (
    <ChatContext.Provider value={{
      isChatOpen,
      initialMessage,
      openChat,
      openChatWithMessage,
      closeChat,
      clearInitialMessage
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
