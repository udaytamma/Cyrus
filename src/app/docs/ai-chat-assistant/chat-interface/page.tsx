import { AIChatAssistantDocsLayout } from "@/components/AIChatAssistantDocsLayout";

export const metadata = {
  title: "Chat Interface | AI Chat Assistant",
  description: "UI components and state management for the chat modal.",
};

export default function ChatInterfacePage() {
  return (
    <AIChatAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Chat Interface</h1>

        <p className="lead">
          The ChatModal component provides the complete chat UI with markdown rendering, follow-up suggestions, and responsive design.
        </p>

        <hr />

        <h2>Component Structure</h2>

        <pre><code>{`ChatModal.tsx
├── Modal container (fixed overlay)
├── Header
│   ├── Logo + title
│   ├── Clear chat button
│   └── Close button
├── Messages area
│   ├── Empty state (with suggestions)
│   └── Message list
│       ├── User messages (right-aligned)
│       ├── AI messages (left, markdown)
│       └── Follow-up buttons
├── Error banner (when present)
└── Input area
    ├── Text input
    ├── Send button
    └── "Powered by" footer`}</code></pre>

        <hr />

        <h2>Key Functions</h2>

        <h3>sendMessageDirect()</h3>

        <p>Core function that sends a message to the API:</p>

        <pre><code>{`const sendMessageDirect = useCallback(async (messageText: string) => {
  // 1. Validate input
  if (!messageText.trim() || isLoading) return;

  // 2. Add user message to state
  setMessages(prev => [...prev, newUserMessage]);
  setIsLoading(true);

  // 3. Call worker API
  const response = await fetch(WORKER_URL, {
    method: "POST",
    body: JSON.stringify({ message, history }),
  });

  // 4. Add AI response to state
  setMessages(prev => [...prev, aiMessage]);
}, [isLoading, messages]);`}</code></pre>

        <h3>extractFollowUpQuestions()</h3>

        <p>Extracts suggested questions from AI response:</p>

        <pre><code>{`function extractFollowUpQuestions(text: string) {
  // Look for: ---\\n**Want to learn more?**\\n- [Question?]
  const match = text.match(/---\\s*\\n\\*\\*Want to learn more\\?\\*\\*\\s*\\n([\\s\\S]*?)$/);

  if (!match) return { mainContent: text, questions: [] };

  // Extract questions from [brackets]
  const questions = [...questionsSection.matchAll(/\\[([^\\]]+)\\]/g)]
    .map(m => m[1]);

  return { mainContent, questions };
}`}</code></pre>

        <h3>formatMarkdown()</h3>

        <p>Converts markdown to HTML for rendering:</p>

        <pre><code>{`function formatMarkdown(text: string): string {
  // Process line by line
  // - Headings: ## Title -> <h3>
  // - Bullets: - item -> <li>
  // - Bold: **text** -> <strong>
  // - Links: [text](url) -> <a>
  // - Code: \`code\` -> <code>
  return html;
}`}</code></pre>

        <hr />

        <h2>State Variables</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">State</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">messages</td>
                <td className="px-4 py-3 text-muted-foreground">Message[]</td>
                <td className="px-4 py-3 text-muted-foreground">Conversation history</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">input</td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3 text-muted-foreground">Current input field value</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">isLoading</td>
                <td className="px-4 py-3 text-muted-foreground">boolean</td>
                <td className="px-4 py-3 text-muted-foreground">API request in progress</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">error</td>
                <td className="px-4 py-3 text-muted-foreground">string | null</td>
                <td className="px-4 py-3 text-muted-foreground">Error message to display</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Refs</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Ref</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">messagesEndRef</td>
                <td className="px-4 py-3 text-muted-foreground">Scroll to bottom on new messages</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">inputRef</td>
                <td className="px-4 py-3 text-muted-foreground">Focus input when modal opens</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Effects</h2>

        <ol>
          <li><strong>Persist messages</strong> - Save to sessionStorage when messages change</li>
          <li><strong>Scroll to bottom</strong> - Auto-scroll when new messages added</li>
          <li><strong>Focus on open</strong> - Focus input and scroll when modal opens</li>
          <li><strong>Escape handler</strong> - Close modal on Escape key</li>
        </ol>

        <hr />

        <h2>Responsive Design</h2>

        <h3>Mobile (&lt;768px)</h3>

        <ul>
          <li>Full-screen modal (no rounded corners)</li>
          <li>Smaller text and padding</li>
          <li>Touch-friendly button sizes</li>
        </ul>

        <h3>Desktop (&ge;768px)</h3>

        <ul>
          <li>Constrained modal (max-width: 896px, max-height: 900px)</li>
          <li>Rounded corners and shadow</li>
          <li>Larger text and spacing</li>
        </ul>

        <hr />

        <h2>Accessibility</h2>

        <ul>
          <li><strong>Keyboard navigation</strong> - Tab through controls, Enter to send, Escape to close</li>
          <li><strong>Focus management</strong> - Input auto-focused on open</li>
          <li><strong>Screen reader</strong> - Semantic HTML structure</li>
          <li><strong>Backdrop click</strong> - Click outside to close</li>
        </ul>
      </article>
    </AIChatAssistantDocsLayout>
  );
}
