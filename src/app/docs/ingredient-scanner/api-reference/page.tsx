import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "API Reference | AI Ingredient Scanner",
  description: "REST API endpoints for the AI Ingredient Scanner mobile app integration.",
};

export default function ApiReferencePage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>API Reference</h1>

        <p className="lead">
          The AI Ingredient Scanner provides a FastAPI REST backend for mobile app integration. This reference documents all available endpoints, request/response schemas, and usage examples.
        </p>

        <div className="not-prose my-6 rounded-lg border border-border bg-muted/30 p-4">
          <div className="text-sm font-medium">Base URL</div>
          <code className="text-sm">http://your-server-ip:8000</code>
        </div>

        <hr />

        <h2>Health Endpoints</h2>

        <h3>GET /</h3>

        <p>Basic health check endpoint.</p>

        <div className="not-prose mb-4">
          <div className="rounded-t-lg bg-green-600 px-3 py-1 text-xs font-medium text-white">Response 200</div>
          <pre className="rounded-t-none rounded-b-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "status": "ok",
  "message": "AI Ingredient Safety Analyzer API"
}`}
          </pre>
        </div>

        <h3>GET /health</h3>

        <p>Service health status for monitoring.</p>

        <div className="not-prose mb-4">
          <div className="rounded-t-lg bg-green-600 px-3 py-1 text-xs font-medium text-white">Response 200</div>
          <pre className="rounded-t-none rounded-b-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "status": "healthy"
}`}
          </pre>
        </div>

        <hr />

        <h2>POST /ocr</h2>

        <p>
          Extract ingredients from an image using Gemini Vision API. Supports multi-language labels with automatic translation to English.
        </p>

        <h3>Request Body</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "image": "<base64_encoded_image>"
}`}
        </pre>

        <h3>Response</h3>

        <div className="not-prose mb-4">
          <div className="rounded-t-lg bg-green-600 px-3 py-1 text-xs font-medium text-white">Success Response</div>
          <pre className="rounded-t-none rounded-b-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "success": true,
  "text": "Water, Glycerin, Sodium Lauryl Sulfate, Fragrance, Citric Acid",
  "error": null
}`}
          </pre>
        </div>

        <div className="not-prose mb-4">
          <div className="rounded-t-lg bg-red-600 px-3 py-1 text-xs font-medium text-white">Error Response</div>
          <pre className="rounded-t-none rounded-b-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "success": false,
  "text": "",
  "error": "Failed to process image"
}`}
          </pre>
        </div>

        <h3>Supported Languages</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Language</th>
                <th className="px-4 py-3 text-left font-semibold">Detection Headers</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">English</td>
                <td className="px-4 py-3 font-mono text-xs">Ingredients:, INGREDIENTS:</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">French</td>
                <td className="px-4 py-3 font-mono text-xs">Ingrédients:, COMPOSITION:</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Spanish</td>
                <td className="px-4 py-3 font-mono text-xs">Ingredientes:</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">German</td>
                <td className="px-4 py-3 font-mono text-xs">Inhaltsstoffe:, Zutaten:</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Italian</td>
                <td className="px-4 py-3 font-mono text-xs">Ingredienti:</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Korean</td>
                <td className="px-4 py-3 font-mono text-xs">성분:, 전성분:</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Japanese</td>
                <td className="px-4 py-3 font-mono text-xs">成分:, 全成分:</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Chinese</td>
                <td className="px-4 py-3 font-mono text-xs">成分:, 配料:</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Portuguese</td>
                <td className="px-4 py-3 font-mono text-xs">Ingredientes:</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>POST /analyze</h2>

        <p>
          Analyze ingredients for safety with personalized recommendations based on user profile.
        </p>

        <h3>Request Body</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "product_name": "CeraVe Moisturizer",
  "ingredients": "Water, Glycerin, Cetearyl Alcohol, Phenoxyethanol, Fragrance",
  "allergies": ["Fragrance", "Parabens"],
  "skin_type": "sensitive",
  "expertise": "beginner"
}`}
        </pre>

        <h3>Parameters</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Field</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Required</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">product_name</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">Product name (default: "Unknown Product")</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">ingredients</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 font-medium text-green-600">Yes</td>
                <td className="px-4 py-3 text-muted-foreground">Comma-separated ingredient list</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">allergies</td>
                <td className="px-4 py-3">string[]</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">User&apos;s known allergies</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">skin_type</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">User&apos;s skin type</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">expertise</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">Explanation style</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Skin Types</div>
            <div className="flex flex-wrap gap-2">
              {["normal", "dry", "oily", "combination", "sensitive"].map((type) => (
                <span key={type} className="rounded bg-muted px-2 py-1 text-xs font-mono">
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Expertise Levels</div>
            <div className="flex flex-wrap gap-2">
              {["beginner", "expert"].map((level) => (
                <span key={level} className="rounded bg-muted px-2 py-1 text-xs font-mono">
                  {level}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h3>Response</h3>

        <div className="not-prose mb-4">
          <div className="rounded-t-lg bg-green-600 px-3 py-1 text-xs font-medium text-white">Success Response</div>
          <pre className="rounded-t-none rounded-b-lg bg-muted p-4 text-xs overflow-x-auto">
{`{
  "success": true,
  "product_name": "CeraVe Moisturizer",
  "overall_risk": "low",
  "average_safety_score": 8,
  "summary": "This product is generally safe for sensitive skin...",
  "allergen_warnings": [
    "ALLERGEN WARNING: Fragrance - matches your declared sensitivity"
  ],
  "ingredients": [
    {
      "name": "Water",
      "purpose": "Solvent, hydration",
      "safety_score": 10,
      "risk_level": "low",
      "concerns": "No specific concerns",
      "recommendation": "SAFE",
      "origin": "Natural",
      "category": "Both",
      "allergy_risk": "low",
      "is_allergen_match": false,
      "alternatives": []
    },
    {
      "name": "Fragrance",
      "purpose": "Scent, masking agent",
      "safety_score": 4,
      "risk_level": "medium",
      "concerns": "Common allergen, may cause sensitivity",
      "recommendation": "CAUTION",
      "origin": "Synthetic",
      "category": "Cosmetics",
      "allergy_risk": "high",
      "is_allergen_match": true,
      "alternatives": ["fragrance-free alternatives", "natural essential oils"]
    }
  ],
  "execution_time": 12.5,
  "error": null
}`}
          </pre>
        </div>

        <hr />

        <h2>Data Types</h2>

        <h3>IngredientDetail</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`interface IngredientDetail {
  name: string;
  purpose: string;
  safety_score: number;      // 1-10
  risk_level: RiskLevel;     // "low" | "medium" | "high"
  concerns: string;
  recommendation: string;    // "SAFE" | "CAUTION" | "AVOID"
  origin: string;            // "Natural" | "Synthetic" | "Semi-synthetic"
  category: string;          // "Food" | "Cosmetics" | "Both"
  allergy_risk: string;      // "high" | "low"
  is_allergen_match: boolean;
  alternatives: string[];
}`}
        </pre>

        <h3>AnalysisResponse</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`interface AnalysisResponse {
  success: boolean;
  product_name: string;
  overall_risk: string;
  average_safety_score: number;
  summary: string;
  allergen_warnings: string[];
  ingredients: IngredientDetail[];
  execution_time: number;
  error?: string;
}`}
        </pre>

        <hr />

        <h2>Error Handling</h2>

        <h3>HTTP Status Codes</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Code</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-green-600">200</td>
                <td className="px-4 py-3">Success</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-yellow-600">400</td>
                <td className="px-4 py-3">Bad Request (invalid input)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-red-600">500</td>
                <td className="px-4 py-3">Internal Server Error</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Error Response Format</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "success": false,
  "error": "Error description",
  "product_name": "Unknown Product",
  "overall_risk": "unknown",
  "average_safety_score": 0,
  "summary": "",
  "allergen_warnings": [],
  "ingredients": [],
  "execution_time": 0
}`}
        </pre>

        <hr />

        <h2>CORS Configuration</h2>

        <p>
          The API allows all origins for development:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)`}
        </pre>

        <div className="not-prose my-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
          <div className="font-semibold text-yellow-600 dark:text-yellow-400">Production Warning</div>
          <p className="mt-1 text-sm">
            For production deployments, restrict <code>allow_origins</code> to your specific domains.
          </p>
        </div>

        <hr />

        <h2>Usage Examples</h2>

        <h3>cURL</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Health Check
curl http://localhost:8000/health

# OCR
curl -X POST http://localhost:8000/ocr \\
  -H "Content-Type: application/json" \\
  -d '{"image": "base64_encoded_image_data"}'

# Analysis
curl -X POST http://localhost:8000/analyze \\
  -H "Content-Type: application/json" \\
  -d '{
    "product_name": "Test Product",
    "ingredients": "Water, Glycerin, Fragrance",
    "allergies": ["Fragrance"],
    "skin_type": "sensitive",
    "expertise": "beginner"
  }'`}
        </pre>

        <h3>TypeScript</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import axios from 'axios';

const API_URL = 'http://192.168.1.100:8000';

// Analyze ingredients
const response = await axios.post(\`\${API_URL}/analyze\`, {
  product_name: 'My Product',
  ingredients: 'Water, Glycerin, Citric Acid',
  allergies: ['Fragrance'],
  skin_type: 'sensitive',
  expertise: 'beginner'
});

console.log(response.data.ingredients);`}
        </pre>

        <h3>Python</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import requests

API_URL = 'http://localhost:8000'

# Analyze ingredients
response = requests.post(f'{API_URL}/analyze', json={
    'product_name': 'My Product',
    'ingredients': 'Water, Glycerin, Citric Acid',
    'allergies': ['Fragrance'],
    'skin_type': 'sensitive',
    'expertise': 'beginner'
})

data = response.json()
print(f"Overall risk: {data['overall_risk']}")`}
        </pre>

        <hr />

        <h2>Running the API</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Development</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`uvicorn api:app --host 0.0.0.0 \\
  --port 8000 --reload`}
            </pre>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Production</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`uvicorn api:app --host 0.0.0.0 \\
  --port 8000 --workers 4`}
            </pre>
          </div>
        </div>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/agents"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Agent Implementation →</div>
            <div className="text-sm text-muted-foreground">Backend agent code details</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/mobile-setup"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Mobile App Setup →</div>
            <div className="text-sm text-muted-foreground">React Native integration guide</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
