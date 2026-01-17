# Product Requirements Document
## AI Chat Assistant v1.0

**Document Version:** 1.0
**Last Updated:** January 17, 2026
**Product Owner:** Uday Tamma
**Status:** Production

---

## 1. Executive Summary

The AI Chat Assistant is an embedded conversational interface on the zeroleaf.dev portfolio website. It enables visitors to interactively learn about Uday Tamma's professional experience, technical skills, and portfolio projects through natural language conversation powered by Google Gemini 3 Flash.

**Core Value Proposition:**
- Reduce time for recruiters/hiring managers to understand candidate qualifications
- Provide 24/7 interactive exploration of professional background
- Differentiate portfolio with modern AI-powered engagement
- Demonstrate practical AI implementation skills

---

## 2. Product Overview

### 2.1 Target Users
- Technical recruiters researching candidates
- Hiring managers evaluating portfolios
- Engineering leaders assessing technical depth
- Peers exploring project implementations

### 2.2 Key Features
1. **Conversational AI** - Natural language Q&A about professional background
2. **Context Persistence** - Maintains conversation history within browser session
3. **Markdown Responses** - Rich text formatting with structured information
4. **Follow-up Suggestions** - AI recommends relevant follow-up questions
5. **Mobile-First Design** - Full-screen mobile experience, modal on desktop

---

## 3. Functional Requirements

### 3.1 Chat Interface

**FR-1.1: Modal Activation**
- **Requirement:** Chat accessible via floating action button on all pages
- **Trigger:** Click opens modal overlay
- **Close:** Click outside modal, close button, or Escape key

**FR-1.2: Message Input**
- **Requirement:** Text input field with send button
- **Behavior:** Enter key sends message, input clears after send
- **Validation:** Empty messages cannot be sent

**FR-1.3: Message Display**
- **Requirement:** Display conversation as message bubbles
- **User Messages:** Right-aligned, primary color background
- **AI Messages:** Left-aligned, muted background with markdown formatting

**FR-1.4: Loading State**
- **Requirement:** Visual indicator during AI response generation
- **Implementation:** Animated typing dots in message area

**FR-1.5: Error Handling**
- **Requirement:** Display errors inline without disrupting conversation
- **Behavior:** Error banner appears above input, user message removed on failure

### 3.2 AI Response Generation

**FR-2.1: Conversation Context**
- **Requirement:** AI maintains context of previous messages in session
- **Implementation:** Full conversation history sent with each request

**FR-2.2: Knowledge Scope**
- **Requirement:** AI answers only about professional background
- **Topics Covered:**
  - Work experience and achievements
  - Technical skills and certifications
  - Portfolio projects and implementations
  - Education and background
  - Availability and contact information

**FR-2.3: Response Formatting**
- **Requirement:** Responses use structured markdown
- **Elements Supported:** Headings, bullet lists, bold text, links, tables

**FR-2.4: Follow-up Questions**
- **Requirement:** AI suggests 2 relevant follow-up questions after each response
- **Format:** Clickable buttons below AI message
- **Behavior:** Clicking sends question automatically

### 3.3 Session Management

**FR-3.1: History Persistence**
- **Requirement:** Conversation survives page navigation within session
- **Storage:** sessionStorage (clears on tab close)

**FR-3.2: Clear Chat**
- **Requirement:** User can reset conversation
- **Trigger:** Trash icon in header (visible when messages exist)
- **Behavior:** Clears messages and sessionStorage

**FR-3.3: Suggested Prompts**
- **Requirement:** Empty state shows starter questions
- **Prompts:**
  - "What is Uday's experience with AI?"
  - "Tell me about the Fraud Detection project"
  - "What certifications does Uday have?"

### 3.4 Backend API

**FR-4.1: Request Handling**
- **Endpoint:** POST to Cloudflare Worker
- **Payload:** `{ message: string, history: Message[] }`

**FR-4.2: Gemini Integration**
- **Model:** gemini-3-flash-preview
- **System Prompt:** Comprehensive knowledge base about professional background

**FR-4.3: Response Format**
- **Success:** `{ response: string, history: Message[] }`
- **Error:** `{ error: string, details?: string }`

**FR-4.4: CORS Support**
- **Requirement:** Allow cross-origin requests from zeroleaf.dev
- **Headers:** Access-Control-Allow-Origin, Methods, Headers

---

## 4. Non-Functional Requirements

### 4.1 Performance

**NFR-1.1: Response Latency**
- AI response returned in &lt;3 seconds (p95)
- Target: 1-2 seconds average

**NFR-1.2: Initial Load**
- Modal component loads in &lt;100ms
- No impact on page LCP (modal hidden initially)

**NFR-1.3: Bundle Size**
- Chat components &lt;10KB gzipped
- No external chat library dependencies

### 4.2 Reliability

**NFR-2.1: Error Recovery**
- Graceful degradation on API failures
- User message removed on error (not stuck in conversation)
- Error message displayed with retry capability

**NFR-2.2: Edge Deployment**
- Worker deployed on Cloudflare edge network
- Global availability with low latency

### 4.3 Security

**NFR-3.1: API Security**
- Gemini API key stored in Cloudflare encrypted secrets
- No API key exposure to client

**NFR-3.2: Input Validation**
- Server-side validation of message content
- Type checking for all request fields

**NFR-3.3: Content Safety**
- Gemini safety filters enabled (BLOCK_ONLY_HIGH)
- System prompt constrains response scope

**NFR-3.4: Data Privacy**
- No server-side conversation storage
- sessionStorage isolated to browser tab
- No cross-session tracking

### 4.4 Usability

**NFR-4.1: Responsive Design**
- Full-screen on mobile (&lt;768px)
- Modal overlay on desktop (max-width: 896px)

**NFR-4.2: Accessibility**
- Keyboard navigation (Tab, Enter, Escape)
- Focus management on modal open/close
- Semantic HTML structure

**NFR-4.3: Visual Feedback**
- Loading indicator during AI response
- Clear distinction between user/AI messages
- Error states visible and actionable

---

## 5. Technical Architecture

### 5.1 Technology Stack

**Frontend:**
- Next.js 15 (React 19)
- TypeScript 5.x
- Tailwind CSS 4.x

**Backend:**
- Cloudflare Workers (serverless)
- TypeScript 5.x
- Wrangler CLI for deployment

**AI Service:**
- Google Gemini 3 Flash (gemini-3-flash-preview)
- REST API integration

**Infrastructure:**
- Cloudflare Pages (frontend hosting)
- Cloudflare Workers (API backend)
- Cloudflare KV (secrets management)

### 5.2 System Components

```
┌─────────────────────────────────────────────────────────────┐
│                      Web Browser                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ ChatModal.tsx         │ ChatContext.tsx             │    │
│  │ - Message rendering   │ - Modal state (open/close)  │    │
│  │ - Markdown formatting │ - React Context provider    │    │
│  │ - API communication   │                             │    │
│  │ - Session storage     │                             │    │
│  └───────────────────────┴─────────────────────────────┘    │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS POST
┌──────────────────────────▼──────────────────────────────────┐
│                  Cloudflare Worker                           │
│  - CORS handling                                             │
│  - Request validation                                        │
│  - System prompt injection                                   │
│  - Conversation management                                   │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS POST
┌──────────────────────────▼──────────────────────────────────┐
│                   Google Gemini API                          │
│  - Natural language understanding                            │
│  - Response generation                                       │
│  - Safety filtering                                          │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 File Structure

```
Cyrus/
├── src/
│   ├── components/
│   │   └── ChatModal.tsx        # Chat UI (490 lines)
│   └── context/
│       └── ChatContext.tsx      # Modal state (33 lines)
└── worker/
    └── src/
        └── index.ts             # Worker API (350 lines)
```

---

## 6. Data Models

### 6.1 Message Object

```typescript
interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}
```

### 6.2 Chat Request

```typescript
interface ChatRequest {
  message: string;
  history?: Message[];
}
```

### 6.3 Chat Response

```typescript
interface ChatResponse {
  response: string;
  history: Message[];
}
```

### 6.4 Error Response

```typescript
interface ErrorResponse {
  error: string;
  details?: string;
  message?: string;
}
```

---

## 7. User Workflows

### 7.1 Primary Workflow: Ask a Question

1. User clicks chat button to open modal
2. User sees empty state with suggested questions
3. User types question or clicks suggestion
4. Loading indicator appears
5. AI response displays with markdown formatting
6. Follow-up question buttons appear below response
7. User continues conversation or closes modal

### 7.2 Secondary Workflow: Continue Conversation

1. User navigates to different page on site
2. User reopens chat modal
3. Previous conversation loads from sessionStorage
4. User continues conversation with full context

### 7.3 Error Workflow: API Failure

1. User sends message
2. API returns error (network, rate limit, etc.)
3. Error banner displays above input
4. User message removed from conversation
5. User can retry or continue with different question

---

## 8. API Specification

### 8.1 Chat Endpoint

**URL:** `https://uday-ai-worker.udaytamma.workers.dev`
**Method:** POST
**Content-Type:** application/json

**Request:**
```json
{
  "message": "What projects has Uday worked on?",
  "history": []
}
```

**Success Response (200):**
```json
{
  "response": "Uday has built several **portfolio projects**...\n\n---\n**Want to learn more?**\n- [Tell me about TelcoOps?]\n- [What tech stack does he use?]",
  "history": [
    { "role": "user", "parts": [{ "text": "What projects has Uday worked on?" }] },
    { "role": "model", "parts": [{ "text": "Uday has built several **portfolio projects**..." }] }
  ]
}
```

**Error Response (4xx/5xx):**
```json
{
  "error": "AI service error",
  "details": "Rate limit exceeded"
}
```

### 8.2 Error Codes

| Code | Error | Cause |
|------|-------|-------|
| 400 | Message is required | Empty message field |
| 405 | Method not allowed | Non-POST request |
| 502 | AI service error | Gemini API failure |
| 500 | Internal server error | Worker exception |

---

## 9. Success Metrics

### 9.1 Product Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Conversation Rate | 10% of visitors | Analytics tracking |
| Messages per Session | 3+ average | Session analysis |
| Error Rate | &lt;2% | Worker logs |

### 9.2 Technical Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Response Latency (p95) | &lt;3s | Cloudflare analytics |
| Worker Uptime | 99.9% | Cloudflare dashboard |
| Bundle Size | &lt;10KB | Build output |

---

## 10. Future Enhancements

### 10.1 Planned Features

**Phase 2:**
- Conversation export (download as text/PDF)
- Voice input support (Web Speech API)
- Multi-language responses

**Phase 3:**
- Analytics dashboard for conversation insights
- A/B testing for system prompts
- Integration with calendar for scheduling calls

### 10.2 Technical Improvements

- Streaming responses (reduce perceived latency)
- Conversation summarization for long sessions
- Feedback collection (thumbs up/down)
- Response caching for common questions

---

## 11. Constraints & Assumptions

### 11.1 Constraints

- **API Quotas:** Limited by Gemini free tier (15 RPM)
- **Worker Limits:** 100,000 requests/day on free tier
- **Response Length:** Max 1024 tokens per response
- **No Authentication:** Public access to chat

### 11.2 Assumptions

- Visitors have modern browsers with JavaScript enabled
- Questions will primarily be about professional background
- Session duration typically under 10 minutes
- Mobile users represent significant traffic

---

## 12. Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Gemini API quota exceeded | High | Medium | Monitor usage, implement rate limiting |
| Inappropriate responses | Medium | Low | Safety filters enabled, scoped system prompt |
| Worker downtime | Medium | Low | Edge deployment, error handling |
| Slow responses | Medium | Medium | Gemini Flash model, timeout handling |
| Session storage cleared | Low | Medium | Clear UX expectations, no critical data |

---

## 13. Acceptance Criteria

### 13.1 Release Criteria

**Chat Interface:**
- [x] Modal opens/closes correctly
- [x] Messages display with proper styling
- [x] Markdown renders correctly (headings, lists, bold, links)
- [x] Loading indicator shows during AI response
- [x] Errors display inline
- [x] Clear chat functionality works

**AI Responses:**
- [x] Responses are relevant to professional background
- [x] Follow-up questions appear after responses
- [x] Conversation context maintained across messages
- [x] Response time under 3 seconds

**Session Management:**
- [x] History persists across page navigation
- [x] Clear chat removes all messages
- [x] New session starts fresh

**Responsiveness:**
- [x] Full-screen on mobile devices
- [x] Modal overlay on desktop
- [x] Keyboard navigation works

---

## 14. Appendices

### 14.1 Glossary

- **Gemini 3 Flash:** Google's fast, efficient language model
- **Cloudflare Workers:** Serverless compute platform at the edge
- **sessionStorage:** Browser API for tab-scoped data persistence
- **System Prompt:** Instructions that define AI behavior and knowledge

### 14.2 References

- [Google Gemini API Documentation](https://ai.google.dev/docs)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Next.js Documentation](https://nextjs.org/docs)

### 14.3 Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | January 17, 2026 | Uday Tamma | Initial PRD creation |

---

**Document Status:** Approved
**Production URL:** [zeroleaf.dev](https://zeroleaf.dev)
