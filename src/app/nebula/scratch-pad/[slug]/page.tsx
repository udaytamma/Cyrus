/**
 * Scratch Pad Document Page (Server Component)
 *
 * Handles static generation and renders client component for interactivity
 */

import { getAllScratchPadSlugs } from "@/data/scratch-pad";
import ScratchPadDocumentClient from "./ScratchPadDocumentClient";

// Generate static paths for all documents at build time
export function generateStaticParams() {
  return getAllScratchPadSlugs().map((slug) => ({ slug }));
}

export default function ScratchPadDocumentPage() {
  return <ScratchPadDocumentClient />;
}
