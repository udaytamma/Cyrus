# Scratch Pad Sync

Sync LLM conversation documents to the Nebula Scratch Pad section.

## When to Use

Apply this skill when the user mentions:
- Syncing scratch pad documents
- Adding new LLM documents to Nebula
- Updating the scratch pad
- New files in the LLM Suggestions folder
- Refreshing document list

## Source and Destination

- **Source folder:** `/Users/omega/Documents/Job Search/LLM Suggestions/`
- **Output file:** `src/data/scratch-pad.ts`
- **Sync script:** `scripts/sync-scratch-pad.js`

## How to Sync

Run the sync script:

```bash
cd /Users/omega/Projects/Cyrus && npm run sync:scratch-pad
```

Or during build (runs automatically via prebuild hook):

```bash
npm run build
```

## What the Sync Does

1. Reads all `.md` files from the source folder
2. Extracts smart titles (handles LLM prompts as H1 gracefully)
3. Gets modification date from file stats
4. Generates `src/data/scratch-pad.ts` with all document data
5. Sorts documents by date (newest first)

## Title Extraction Strategy

The sync script uses a 5-strategy pipeline to extract clean titles:

1. **Code block H1** - Looks for H1 inside markdown code blocks (Perplexity exports)
2. **Prompt pattern mapping** - Maps known prompt patterns to meaningful titles
3. **Bold text** - Extracts bold text that looks like a title
4. **Clean H2** - Falls back to first non-generic H2 heading
5. **Content analysis** - Analyzes content for recurring topics

## After Syncing

1. Verify the sync output shows correct titles
2. Run `npm run build` to generate static pages
3. Test locally at http://localhost:4001/nebula/scratch-pad
4. Commit and push to deploy

## Troubleshooting

**Document not appearing:**
- Ensure file has `.md` extension
- Check file has an H1 heading (`# Title`)
- Run sync script and check for warnings

**Title showing as prompt:**
- Add a mapping in `scripts/sync-scratch-pad.js` under `promptMappings`
- Or add a proper H1 inside a markdown code block in the source file

**Build fails:**
- Check `src/data/scratch-pad.ts` was generated
- Ensure no syntax errors in markdown content
