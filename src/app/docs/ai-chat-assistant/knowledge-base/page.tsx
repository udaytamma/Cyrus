import { AIChatAssistantDocsLayout } from "@/components/AIChatAssistantDocsLayout";

export const metadata = {
  title: "Knowledge Base | AI Chat Assistant",
  description: "System prompt and knowledge base configuration.",
};

export default function KnowledgeBasePage() {
  return (
    <AIChatAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Knowledge Base</h1>

        <p className="lead">
          The AI assistant&apos;s knowledge is defined in a comprehensive system prompt that covers professional background, projects, and response guidelines.
        </p>

        <hr />

        <h2>System Prompt Structure</h2>

        <pre><code>{`SYSTEM_PROMPT
├── Personality
├── Knowledge Base
│   ├── About Uday Tamma
│   ├── Professional Summary
│   ├── Key Achievements
│   ├── Work Experience
│   ├── Previous Companies
│   ├── Education
│   ├── Certifications
│   ├── Technical Skills
│   ├── Portfolio Projects
│   ├── Target Roles
│   └── Logistics & Availability
├── Response Guidelines
│   ├── Formatting Rules
│   └── Link Requirements
├── Follow-up Questions
│   └── Format Specification
└── Example Responses`}</code></pre>

        <hr />

        <h2>Knowledge Sections</h2>

        <h3>Professional Summary</h3>

        <p>High-level overview of expertise areas:</p>

        <ul>
          <li>Applied AI Operations (RAG, LLM fine-tuning, production AI)</li>
          <li>Hybrid-Cloud Observability</li>
          <li>Large-Scale Data Migrations</li>
          <li>Engineering Transformation</li>
        </ul>

        <h3>Key Achievements</h3>

        <p>Quantifiable metrics and impact:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Achievement</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">AI Production (opsGPT)</td>
                <td className="px-4 py-3 text-muted-foreground">63% reduction in AHT</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Engineering Transformation</td>
                <td className="px-4 py-3 text-muted-foreground">99.9% availability</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">MTTR Improvement</td>
                <td className="px-4 py-3 text-muted-foreground">42% reduction</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Revenue Generation</td>
                <td className="px-4 py-3 text-muted-foreground">$1.5M + $2.7M</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Portfolio Projects</h3>

        <p>The system prompt includes details for each project:</p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Capstone Projects</div>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Payment Fraud Detection Platform</li>
              <li>TelcoOps: AI-Assisted Network Incident RCA</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Hobby Projects</div>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>AI Chat Assistant (this project)</li>
              <li>Professor Gemini</li>
              <li>MindGames</li>
              <li>AI Ingredient Scanner</li>
              <li>Email Assistant</li>
            </ul>
          </div>
        </div>

        <hr />

        <h2>Response Guidelines</h2>

        <h3>Formatting Rules</h3>

        <ol>
          <li>Use clear headings (## for main sections)</li>
          <li>Use bullet points for lists</li>
          <li>Use bold for key terms and metrics</li>
          <li>Include specific numbers when discussing achievements</li>
          <li>Keep paragraphs short (2-3 sentences)</li>
          <li>Always use full markdown links with https://</li>
        </ol>

        <h3>Follow-up Questions</h3>

        <p>Every response must end with exactly this format:</p>

        <pre><code>{`---
**Want to learn more?**
- [Question 1 here?]
- [Question 2 here?]`}</code></pre>

        <p>Rules:</p>

        <ul>
          <li>Always suggest exactly 2 questions</li>
          <li>Make them specific to the topic just discussed</li>
          <li>Keep questions under 10 words each</li>
          <li>Cover different aspects (details vs. related topics)</li>
        </ul>

        <hr />

        <h2>Updating the Knowledge Base</h2>

        <p>To update the assistant&apos;s knowledge:</p>

        <ol>
          <li>Edit <code>worker/src/index.ts</code></li>
          <li>Modify the <code>SYSTEM_PROMPT</code> constant</li>
          <li>Deploy the worker: <code>npx wrangler deploy</code></li>
        </ol>

        <h3>Best Practices</h3>

        <ul>
          <li><strong>Keep it structured</strong> - Use clear sections with headers</li>
          <li><strong>Be specific</strong> - Include exact metrics and dates</li>
          <li><strong>Provide examples</strong> - Show the AI how to format responses</li>
          <li><strong>Test after updates</strong> - Verify responses are accurate</li>
        </ul>

        <hr />

        <h2>Prompt Engineering Notes</h2>

        <h3>Personality Definition</h3>

        <p>The prompt establishes:</p>

        <ul>
          <li>Professional yet approachable tone</li>
          <li>Concise but thorough responses</li>
          <li>Emphasis on quantifiable achievements</li>
          <li>Proactive suggestions for next steps</li>
        </ul>

        <h3>Scope Constraints</h3>

        <p>The AI is constrained to only answer about:</p>

        <ul>
          <li>Professional background and experience</li>
          <li>Technical skills and certifications</li>
          <li>Portfolio projects</li>
          <li>Contact and availability information</li>
        </ul>

        <p>This prevents off-topic responses while maintaining helpfulness.</p>
      </article>
    </AIChatAssistantDocsLayout>
  );
}
