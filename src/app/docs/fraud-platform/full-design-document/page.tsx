"use client";

/**
 * Full Design Document - Redirect to Nebula archive
 *
 * This page has been moved to /nebula/fd-redundant-pages/full-design-document
 * because it duplicates the table of contents covered by the other documentation pages.
 * Keeping the route alive with a redirect to avoid broken links.
 */

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FullDesignDocumentRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/nebula/fd-redundant-pages/full-design-document");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to archived page...</p>
    </div>
  );
}
