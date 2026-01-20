#!/usr/bin/env node

/**
 * Mermaid Diagram Validation Script
 *
 * Extracts all mermaid code blocks from markdown files and validates their syntax.
 * Used in pre-commit hooks to catch diagram errors before they reach the browser.
 *
 * Usage:
 *   node validate-mermaid.js           # Validate all markdown files
 *   node validate-mermaid.js --staged  # Validate only staged files (for pre-commit)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Parse command line arguments
const args = process.argv.slice(2);
const STAGED_ONLY = args.includes('--staged');

// Directories containing markdown with mermaid diagrams
const MARKDOWN_DIRS = [
  'gemini-responses',
];

// Regex to extract mermaid code blocks
const MERMAID_REGEX = /```mermaid\n([\s\S]*?)```/g;

/**
 * Extract all mermaid diagrams from a markdown file
 */
function extractMermaidDiagrams(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const diagrams = [];
  let match;

  while ((match = MERMAID_REGEX.exec(content)) !== null) {
    const startLine = content.substring(0, match.index).split('\n').length;
    diagrams.push({
      content: match[1],
      startLine,
      file: filePath,
    });
  }

  return diagrams;
}

/**
 * Validate a single mermaid diagram using mmdc CLI
 */
function validateDiagram(diagram, tempDir) {
  const inputFile = path.join(tempDir, 'diagram.mmd');
  const outputFile = path.join(tempDir, 'diagram.svg');

  fs.writeFileSync(inputFile, diagram.content);

  try {
    execSync(`npx mmdc -i "${inputFile}" -o "${outputFile}" -q`, {
      stdio: 'pipe',
      timeout: 30000,
    });
    return { valid: true };
  } catch (error) {
    const stderr = error.stderr?.toString() || error.message;
    return {
      valid: false,
      error: stderr,
    };
  }
}

/**
 * Get staged markdown files from git
 */
function getStagedMarkdownFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    const stagedFiles = output.trim().split('\n').filter(Boolean);

    // Filter to only markdown files in our target directories
    return stagedFiles
      .filter(file => {
        const inTargetDir = MARKDOWN_DIRS.some(dir => file.startsWith(dir + '/'));
        return inTargetDir && file.endsWith('.md');
      })
      .map(file => path.join(process.cwd(), file))
      .filter(file => fs.existsSync(file));
  } catch (error) {
    // If git command fails, return empty array
    return [];
  }
}

/**
 * Get all markdown files from specified directories
 */
function getAllMarkdownFiles() {
  const files = [];

  for (const dir of MARKDOWN_DIRS) {
    const dirPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(dirPath)) continue;

    const entries = fs.readdirSync(dirPath);
    for (const entry of entries) {
      if (entry.endsWith('.md')) {
        files.push(path.join(dirPath, entry));
      }
    }
  }

  return files;
}

/**
 * Main validation function
 */
async function main() {
  const mode = STAGED_ONLY ? 'staged' : 'all';
  console.log(`🔍 Validating Mermaid diagrams (${mode} files)...\n`);

  const files = STAGED_ONLY ? getStagedMarkdownFiles() : getAllMarkdownFiles();

  if (files.length === 0) {
    if (STAGED_ONLY) {
      console.log('📊 No staged markdown files with mermaid diagrams to validate.\n');
      console.log('✅ Skipping Mermaid validation.\n');
      process.exit(0);
    }
  }
  const tempDir = path.join(process.cwd(), 'node_modules', '.cache', 'mermaid-validate');

  // Create temp directory
  fs.mkdirSync(tempDir, { recursive: true });

  let totalDiagrams = 0;
  let validDiagrams = 0;
  const errors = [];

  for (const file of files) {
    const diagrams = extractMermaidDiagrams(file);
    const fileName = path.relative(process.cwd(), file);

    for (let i = 0; i < diagrams.length; i++) {
      const diagram = diagrams[i];
      totalDiagrams++;

      const result = validateDiagram(diagram, tempDir);

      if (result.valid) {
        validDiagrams++;
      } else {
        errors.push({
          file: fileName,
          diagramIndex: i + 1,
          line: diagram.startLine,
          error: result.error,
          preview: diagram.content.split('\n').slice(0, 3).join('\n') + '...',
        });
      }
    }
  }

  // Clean up temp files
  try {
    fs.rmSync(tempDir, { recursive: true });
  } catch (e) {
    // Ignore cleanup errors
  }

  // Report results
  console.log(`📊 Results: ${validDiagrams}/${totalDiagrams} diagrams valid\n`);

  if (errors.length > 0) {
    console.log('❌ Validation errors:\n');

    for (const err of errors) {
      console.log(`  File: ${err.file}`);
      console.log(`  Diagram #${err.diagramIndex} (line ${err.line})`);
      console.log(`  Preview:\n    ${err.preview.replace(/\n/g, '\n    ')}`);
      console.log(`  Error: ${err.error.trim()}\n`);
    }

    console.log('💡 Fix the diagram syntax errors before committing.\n');
    process.exit(1);
  }

  console.log('✅ All Mermaid diagrams are valid!\n');
  process.exit(0);
}

main().catch((error) => {
  console.error('Script error:', error);
  process.exit(1);
});
