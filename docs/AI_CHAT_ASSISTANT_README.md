# AI Chat Assistant

**Uday's AI Assistant** - A conversational AI assistant powered by Google Gemini that answers questions about Uday Tamma's professional background, experience, and portfolio projects.

**Live Demo:** [zeroleaf.dev](https://zeroleaf.dev)

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Architecture](#architecture)
4. [Tech Stack](#tech-stack)
5. [Project Structure](#project-structure)
6. [Setup & Deployment](#setup--deployment)
7. [API Reference](#api-reference)
8. [Configuration](#configuration)
9. [Security](#security)
10. [Performance](#performance)

---

## Overview

The AI Chat Assistant is an embedded conversational interface on the zeroleaf.dev portfolio site. It provides visitors with an interactive way to learn about Uday's professional experience, technical skills, and portfolio projects through natural language conversation.

**Core Value Proposition:**
- Instant answers about professional background without navigating multiple pages
- Interactive exploration of portfolio projects and achievements
- 24/7 availability for recruiters and hiring managers
- Conversational context maintained throughout the session

---

## Features

### Conversational AI
- **Google Gemini 3 Flash** - Latest Gemini model for fast, accurate responses
- **Context-Aware Responses** - Maintains conversation history within session
- **Structured Knowledge Base** - Comprehensive system prompt with professional details
- **Follow-up Questions** - AI suggests relevant follow-up questions after each response

### User Interface
- **Modal Design** - Non-intrusive overlay that doesn't disrupt site navigation
- **Responsive Layout** - Full-screen on mobile, constrained modal on desktop
- **Markdown Rendering** - Rich text formatting with headings, lists, bold, links
- **Suggested Questions** - Pre-filled prompts to help users get started
- **Session Persistence** - Chat history maintained via sessionStorage
- **Keyboard Navigation** - Escape to close, Enter to send

### Visual Design
- **Branded Header** - zeroleaf favicon with assistant title
- **Typing Indicator** - Animated dots during AI response generation
- **Error Handling** - Inline error display with graceful degradation
- **Clear Chat** - One-click conversation reset

---

## Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        zeroleaf.dev                              │
│                    (Cloudflare Pages)                            │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    ChatModal.tsx                         │    │
│  │  - UI rendering                                          │    │
│  │  - Message state management                              │    │
│  │  - Markdown formatting                                   │    │
│  │  - Follow-up question extraction                         │    │
│  └──────────────────────────┬──────────────────────────────┘    │
│                             │                                    │
│  ┌─────────────────────────▼──────────────────────────────┐    │
│  │                    ChatContext.tsx                       │    │
│  │  - Global modal state (open/close)                       │    │
│  │  - React Context provider                                │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────┬───────────────────────────────┘
                                  │ HTTPS POST
                                  │
┌─────────────────────────────────▼───────────────────────────────┐
│                  Cloudflare Worker                               │
│              (uday-ai-worker.udaytamma.workers.dev)              │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                     index.ts                             │    │
│  │  - CORS handling                                         │    │
│  │  - Request validation                                    │    │
│  │  - Conversation history management                       │    │
│  │  - System prompt injection                               │    │
│  └──────────────────────────┬──────────────────────────────┘    │
└─────────────────────────────┬───────────────────────────────────┘
                              │ HTTPS POST
                              │
┌─────────────────────────────▼───────────────────────────────────┐
│                   Google Gemini API                              │
│              (gemini-3-flash-preview)                            │
│  - Natural language understanding                                │
│  - Response generation                                           │
│  - Safety filtering                                              │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **User Input** - User types message in ChatModal input field
2. **State Update** - Message added to local state, UI shows loading indicator
3. **API Request** - POST request to Cloudflare Worker with message + history
4. **Worker Processing** - Worker validates request, injects system prompt
5. **Gemini API** - Worker calls Gemini API with full conversation context
6. **Response** - Worker extracts response text, returns to frontend
7. **UI Update** - ChatModal renders formatted response with follow-up suggestions

### State Management

| State | Location | Persistence |
|-------|----------|-------------|
| Modal open/close | ChatContext (React Context) | None (resets on page reload) |
| Conversation messages | ChatModal (useState) | sessionStorage |
| Input field | ChatModal (useState) | None |
| Loading/Error | ChatModal (useState) | None |

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15 | React framework |
| React | 19 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Cloudflare Workers | - | Serverless compute |
| TypeScript | 5.x | Type safety |
| Wrangler | 4.x | Deployment tool |

### AI

| Service | Model | Purpose |
|---------|-------|---------|
| Google Gemini | gemini-3-flash-preview | Response generation |

### Infrastructure

| Service | Purpose |
|---------|---------|
| Cloudflare Pages | Frontend hosting |
| Cloudflare Workers | API backend |
| Cloudflare KV | Secrets management (API key) |

---

## Project Structure

```
Cyrus/
├── src/
│   ├── components/
│   │   └── ChatModal.tsx          # Main chat UI component
│   ├── context/
│   │   └── ChatContext.tsx        # Global chat state provider
│   └── app/
│       └── layout.tsx             # Chat provider wrapper
│
├── worker/
│   ├── src/
│   │   └── index.ts               # Cloudflare Worker entry point
│   ├── wrangler.toml              # Worker configuration
│   ├── package.json               # Worker dependencies
│   └── tsconfig.json              # TypeScript config
│
└── docs/
    ├── AI_CHAT_ASSISTANT_README.md    # This file
    └── AI_CHAT_ASSISTANT_PRD.md       # Product requirements
```

### Key Files

| File | Lines | Purpose |
|------|-------|---------|
| `ChatModal.tsx` | ~490 | Complete chat UI with markdown rendering |
| `ChatContext.tsx` | ~33 | React context for global modal state |
| `worker/src/index.ts` | ~350 | Cloudflare Worker with Gemini integration |

---

## Setup & Deployment

### Prerequisites

- Node.js 18+
- npm or yarn
- Cloudflare account
- Google AI API key (Gemini)

### Local Development

**Frontend:**
```bash
cd /Users/omega/Projects/Cyrus
npm install
npm run dev
# Open http://localhost:4001
```

**Worker:**
```bash
cd /Users/omega/Projects/Cyrus/worker
npm install
npx wrangler dev
# Worker runs at http://localhost:8787
```

### Environment Setup

**Worker Secrets:**
```bash
cd /Users/omega/Projects/Cyrus/worker
npx wrangler secret put GEMINI_API_KEY
# Enter your Google AI API key when prompted
```

### Deployment

**Frontend (automatic via GitHub):**
```bash
git push origin main
# Cloudflare Pages auto-deploys from main branch
```

**Worker (manual):**
```bash
cd /Users/omega/Projects/Cyrus/worker
npx wrangler deploy
# Deploys to uday-ai-worker.udaytamma.workers.dev
```

---

## API Reference

### Endpoint

```
POST https://uday-ai-worker.udaytamma.workers.dev
```

### Request

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "message": "What is Uday's experience with AI?",
  "history": [
    {
      "role": "user",
      "parts": [{ "text": "Previous question" }]
    },
    {
      "role": "model",
      "parts": [{ "text": "Previous response" }]
    }
  ]
}
```

### Response

**Success (200):**
```json
{
  "response": "Uday has extensive **production AI experience**...",
  "history": [
    { "role": "user", "parts": [{ "text": "Previous question" }] },
    { "role": "model", "parts": [{ "text": "Previous response" }] },
    { "role": "user", "parts": [{ "text": "What is Uday's experience with AI?" }] },
    { "role": "model", "parts": [{ "text": "Uday has extensive **production AI experience**..." }] }
  ]
}
```

**Error (4xx/5xx):**
```json
{
  "error": "Error description",
  "details": "Additional details (if available)"
}
```

### Error Codes

| Status | Error | Description |
|--------|-------|-------------|
| 400 | Message is required | Empty or invalid message field |
| 405 | Method not allowed | Non-POST request |
| 502 | AI service error | Gemini API failure |
| 500 | Internal server error | Worker exception |

---

## Configuration

### Worker Configuration (`wrangler.toml`)

```toml
name = "uday-ai-worker"
main = "src/index.ts"
compatibility_date = "2024-01-01"
```

### Gemini Parameters

| Parameter | Value | Purpose |
|-----------|-------|---------|
| temperature | 0.7 | Response creativity (0-1) |
| maxOutputTokens | 1024 | Maximum response length |
| topP | 0.95 | Nucleus sampling threshold |

### Safety Settings

All harm categories set to `BLOCK_ONLY_HIGH`:
- HARM_CATEGORY_HARASSMENT
- HARM_CATEGORY_HATE_SPEECH
- HARM_CATEGORY_SEXUALLY_EXPLICIT
- HARM_CATEGORY_DANGEROUS_CONTENT

### Frontend Constants

| Constant | Value | Purpose |
|----------|-------|---------|
| WORKER_URL | `https://uday-ai-worker.udaytamma.workers.dev` | API endpoint |
| STORAGE_KEY | `uday-ai-chat-history` | sessionStorage key |

---

## Security

### API Security

- **CORS** - Configured for cross-origin requests (open for portfolio use)
- **Input Validation** - Message field required and type-checked
- **No PII Storage** - Conversations not persisted server-side
- **Secrets Management** - API key stored in Cloudflare encrypted secrets

### Content Safety

- **Gemini Safety Filters** - Block high-severity harmful content
- **Scoped Knowledge** - AI only answers about professional background
- **No Arbitrary Execution** - System prompt constrains response scope

### Client Security

- **sessionStorage** - Chat history isolated to browser tab
- **No Cookies** - No cross-session tracking
- **HTTPS Only** - All API calls over TLS

---

## Performance

### Metrics

| Metric | Target | Actual |
|--------|--------|--------|
| Initial Load | &lt;100ms | ~50ms (modal hidden) |
| Response Latency | &lt;3s | ~1-2s (Gemini 3 Flash) |
| Bundle Size Impact | &lt;10KB | ~8KB (gzipped) |

### Optimizations

- **Lazy Loading** - Modal not rendered until opened
- **sessionStorage** - Avoids re-fetching conversation history
- **Edge Deployment** - Worker runs on Cloudflare edge network
- **Gemini Flash** - Optimized for low latency responses

### Rate Limits

| Service | Limit |
|---------|-------|
| Gemini API | Per Google AI quotas (free tier: 15 RPM) |
| Cloudflare Workers | 100,000 requests/day (free tier) |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | January 2026 | Initial release with Gemini 3 Flash |

---

## Related Documentation

- [AI_CHAT_ASSISTANT_PRD.md](./AI_CHAT_ASSISTANT_PRD.md) - Product Requirements Document
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Google Gemini API Documentation](https://ai.google.dev/docs)
