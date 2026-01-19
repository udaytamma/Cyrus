"use client";

/**
 * Sign Out Button - Navbar component for authenticated users.
 * Only visible when user is authenticated (nebula_auth in localStorage).
 */

import { useCallback } from "react";
import { notifyLocalStorageChange, useIsClient, useLocalStorageFlag } from "../hooks/useLocalStorageFlag";

export function SignOutButton() {
  const isClient = useIsClient();
  const isAuthenticated = useLocalStorageFlag("nebula_auth", false) === true;

  const handleSignOut = useCallback(() => {
    localStorage.removeItem("nebula_auth");
    notifyLocalStorageChange("nebula_auth");
    // Reload to trigger auth gate on protected pages
    window.location.reload();
  }, []);

  // Don't render on server or if not authenticated
  if (!isClient || !isAuthenticated) {
    return null;
  }

  return (
    <button
      onClick={handleSignOut}
      title="Sign Out"
      aria-label="Sign out of protected pages"
      className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground/60 transition-colors hover:bg-red-500/10 hover:text-red-500 dark:hover:bg-red-500/15 dark:hover:text-red-400"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    </button>
  );
}
