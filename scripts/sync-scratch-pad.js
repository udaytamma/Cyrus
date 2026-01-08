#!/usr/bin/env node

/**
 * Sync Scratch Pad Documents
 *
 * Reads markdown files from the source folder and generates a TypeScript
 * data file for the Nebula Scratch Pad section.
 *
 * Source: /Users/omega/Documents/Job Search/LLM Suggestions/
 * Output: src/data/scratch-pad.ts
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SOURCE_DIR = '/Users/omega/Documents/Job Search/LLM Suggestions';
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'scratch-pad.ts');

// Patterns that indicate a prompt rather than a proper title
const PROMPT_PATTERNS = [
  /^(okay|great|give me|suggest|help me|can you|please|i want|i need|here are my)/i,
  /\?$/,  // Ends with question mark
  /^[a-z]/,  // Starts with lowercase
];

// Maximum length for a "real" title
const MAX_TITLE_LENGTH = 80;

/**
 * Generate a URL-safe slug from a title
 */
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-')          // Spaces to hyphens
    .replace(/-+/g, '-')           // Collapse multiple hyphens
    .replace(/^-|-$/g, '')         // Trim leading/trailing hyphens
    .substring(0, 60);             // Limit length
}

/**
 * Check if a title looks like a prompt rather than a proper title
 */
function looksLikePrompt(title) {
  if (title.length > MAX_TITLE_LENGTH) return true;
  return PROMPT_PATTERNS.some(pattern => pattern.test(title.trim()));
}

/**
 * Extract a better title from content when H1 is a prompt
 */
function extractBetterTitle(content, h1Title) {
  // Strategy 1: Look for H1 inside a markdown code block (common in Perplexity outputs)
  const codeBlockH1Match = content.match(/```markdown\s*\n#\s+([^\n]+)/);
  if (codeBlockH1Match && !looksLikePrompt(codeBlockH1Match[1])) {
    return codeBlockH1Match[1].trim();
  }

  // Strategy 2: Map common prompt patterns to meaningful titles
  // This runs before H2 extraction to give better titles
  const promptMappings = [
    [/checklist/i, 'Work Session Guardrails'],
    [/here are my answers/i, 'Principal TPM Interview Prep Assessment'],
    [/system design.*suggest|suggest.*system design/i, 'System Design Practice Problems'],
    [/markdown file/i, 'LLMs and Principal TPM Work'],
  ];

  for (const [pattern, fallbackTitle] of promptMappings) {
    if (pattern.test(h1Title)) {
      return fallbackTitle;
    }
  }

  // Strategy 3: Look for bold text at the start that might be a title
  const boldMatch = content.match(/^\*\*([^*]+)\*\*/m);
  if (boldMatch && !looksLikePrompt(boldMatch[1]) && boldMatch[1].length < MAX_TITLE_LENGTH) {
    return boldMatch[1].trim();
  }

  // Strategy 4: Look for the first H2 that looks like a real title
  const h2Matches = content.match(/^##\s+(.+)$/gm);
  if (h2Matches) {
    for (const match of h2Matches) {
      const h2Title = match.replace(/^##\s+/, '').trim();
      // Skip generic or numbered H2s
      if (!looksLikePrompt(h2Title) &&
          !h2Title.match(/^(what|where|how|why|when|summary|overview|introduction|background|\d+\.)/i) &&
          !h2Title.match(/^level \d/i)) {
        return h2Title;
      }
    }
  }

  // Strategy 5: Generate title from content analysis
  // Look for key topics mentioned multiple times
  const topics = {
    'Interview Prep Plan': /interview|behavioral|practice|stories/gi,
    'System Design Practice': /system design|architecture|design exercise/gi,
    'TPM Checklist': /checklist|guardrails|rules|daily/gi,
    'Career Strategy': /career|strategy|assessment|gaps|strengths/gi,
    'LLM Usage Guidelines': /llm|ai|orchestrator|prompts/gi,
  };

  for (const [title, pattern] of Object.entries(topics)) {
    const matches = content.match(pattern);
    if (matches && matches.length >= 3) {
      return title;
    }
  }

  // Last resort: clean up the H1 and truncate
  return h1Title.substring(0, 60) + (h1Title.length > 60 ? '...' : '');
}

/**
 * Extract title from markdown content (first H1 header)
 * Falls back to smarter extraction if H1 looks like a prompt
 */
function extractTitle(content) {
  // Look for first H1 header
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (!h1Match) {
    return null;
  }

  const h1Title = h1Match[1].trim();

  // If H1 looks like a prompt, try to find a better title
  if (looksLikePrompt(h1Title)) {
    return extractBetterTitle(content, h1Title);
  }

  return h1Title;
}

/**
 * Clean markdown content
 * - Remove Perplexity logo images
 * - Remove other leading artifacts
 */
function cleanContent(content) {
  let cleaned = content;

  // Remove Perplexity logo image tags (HTML img tags)
  cleaned = cleaned.replace(/<img[^>]*perplexity[^>]*>/gi, '');

  // Remove any leading empty lines after cleanup
  cleaned = cleaned.replace(/^\s*\n+/, '');

  return cleaned;
}

/**
 * Process a single markdown file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const stats = fs.statSync(filePath);

  const cleanedContent = cleanContent(content);
  const title = extractTitle(cleanedContent);

  if (!title) {
    console.warn(`  Warning: No H1 title found in ${path.basename(filePath)}, skipping...`);
    return null;
  }

  const slug = generateSlug(title);
  const date = stats.mtime.toISOString().split('T')[0]; // YYYY-MM-DD format

  return {
    slug,
    title,
    date,
    content: cleanedContent,
    sourceFile: path.basename(filePath),
  };
}

/**
 * Main sync function
 */
function sync() {
  console.log('Syncing Scratch Pad documents...');
  console.log(`Source: ${SOURCE_DIR}`);
  console.log(`Output: ${OUTPUT_FILE}\n`);

  // Check if source directory exists
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Error: Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  // Get all markdown files
  const files = fs.readdirSync(SOURCE_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(SOURCE_DIR, f));

  console.log(`Found ${files.length} markdown files\n`);

  // Process each file
  const documents = [];
  for (const file of files) {
    console.log(`Processing: ${path.basename(file)}`);
    const doc = processFile(file);
    if (doc) {
      documents.push(doc);
      console.log(`  -> "${doc.title}" (${doc.date})`);
    }
  }

  // Sort by date (newest first)
  documents.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Generate TypeScript file
  const output = `/**
 * Scratch Pad Documents
 *
 * Auto-generated by scripts/sync-scratch-pad.js
 * Source: ${SOURCE_DIR}
 * Generated: ${new Date().toISOString()}
 *
 * DO NOT EDIT MANUALLY - Run "npm run sync:scratch-pad" to regenerate
 */

export interface ScratchPadDoc {
  slug: string;
  title: string;
  date: string;
  content: string;
  sourceFile: string;
}

export const scratchPadDocs: ScratchPadDoc[] = ${JSON.stringify(documents, null, 2)};

export function getScratchPadDoc(slug: string): ScratchPadDoc | undefined {
  return scratchPadDocs.find(doc => doc.slug === slug);
}

export function getAllScratchPadSlugs(): string[] {
  return scratchPadDocs.map(doc => doc.slug);
}
`;

  // Ensure data directory exists
  const dataDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write output file
  fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');

  console.log(`\nGenerated ${OUTPUT_FILE}`);
  console.log(`Total documents: ${documents.length}`);
}

// Run sync
sync();
