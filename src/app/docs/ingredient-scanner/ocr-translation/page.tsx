import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "OCR & Translation | AI Ingredient Scanner",
  description: "Multi-language ingredient extraction and automatic translation for the AI Ingredient Scanner.",
};

export default function OcrTranslationPage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>OCR &amp; Translation</h1>

        <p className="lead">
          The AI Ingredient Scanner supports multi-language ingredient labels, automatically detecting and translating non-English text using Gemini Vision.
        </p>

        <hr />

        <h2>Overview</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────┐
│                    OCR & TRANSLATION FLOW                        │
│                                                                  │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────┐      │
│  │   Image     │ →  │   Gemini    │ →  │   Language      │      │
│  │   Capture   │    │   Vision    │    │   Detection     │      │
│  └─────────────┘    └─────────────┘    └────────┬────────┘      │
│                                                 │                │
│                                    ┌────────────┴────────────┐  │
│                                    │ English?                │  │
│                                    └────────────┬────────────┘  │
│                                                 │                │
│                               ┌─────────────────┼─────────────┐ │
│                               │ YES             │ NO          │ │
│                               ▼                 ▼             │ │
│                        ┌─────────────┐   ┌─────────────┐     │ │
│                        │ Return Text │   │  Translate  │     │ │
│                        └──────┬──────┘   └──────┬──────┘     │ │
│                               │                 │             │ │
│                               └────────┬────────┘             │ │
│                                        ▼                      │ │
│                                 ┌─────────────┐               │ │
│                                 │  Analysis   │               │ │
│                                 │  Pipeline   │               │ │
│                                 └─────────────┘               │ │
└─────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Supported Languages</h2>

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

        <h2>How It Works</h2>

        <h3>Step 1: Image Capture</h3>

        <p>
          The mobile app captures the ingredient label image and encodes it as base64:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Mobile App
const takePicture = async () => {
  const photo = await cameraRef.current.takePictureAsync({
    base64: true,
    quality: 0.8,
  });

  // Send to backend
  const response = await api.post('/ocr', {
    image: photo.base64,
  });

  setIngredients(response.data.text);
};`}
        </pre>

        <h3>Step 2: OCR with Language Detection</h3>

        <p>
          The backend uses Gemini Vision to extract ingredients and detect the language:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Backend OCR Prompt
"""
Find and extract ONLY the ingredient list from this product label image.

INSTRUCTIONS:
1. Look for ingredient list headers in ANY language:
   - English: "Ingredients:", "INGREDIENTS:"
   - French: "Ingrédients:", "COMPOSITION:"
   - Korean: "성분:", "전성분:"
   - (and others...)

2. Extract the complete list of ingredients

OUTPUT FORMAT:
First line: LANGUAGE_DETECTED: <language code>
Second line onwards: The extracted ingredients
"""`}
        </pre>

        <div className="not-prose my-4 rounded-lg border border-border bg-card p-4">
          <div className="mb-2 font-semibold">Example Response (Korean Label)</div>
          <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`LANGUAGE_DETECTED: ko
정제수, 글리세린, 나이아신아마이드, 부틸렌글라이콜`}
          </pre>
        </div>

        <h3>Step 3: Translation (if needed)</h3>

        <p>
          Non-English ingredients are translated while preserving scientific names:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def _translate_ingredients_to_english(client, ingredients_text):
    """Translate non-English ingredient text to English."""

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=f"""
You are an expert translator specializing in cosmetic and food ingredients.

TASK: Translate the following ingredient list to English.

INSTRUCTIONS:
1. Translate each ingredient name to its standard English equivalent
2. Keep scientific/INCI names unchanged:
   - "Aqua" stays "Aqua"
   - "Sodium Lauryl Sulfate" stays the same
3. Translate common ingredient names:
   - "Eau" → "Water"
   - "정제수" → "Purified Water"
4. Preserve the comma-separated format
5. Return ONLY the translated ingredient list

INGREDIENT LIST TO TRANSLATE:
{ingredients_text}

TRANSLATED INGREDIENTS:"""
    )

    return response.text.strip()`}
        </pre>

        <div className="not-prose my-4 rounded-lg border border-primary/30 bg-primary/5 p-4">
          <div className="mb-2 font-semibold text-primary">Translation Example</div>
          <div className="text-sm space-y-1">
            <div><strong>Input:</strong> <code>정제수, 글리세린, 나이아신아마이드</code></div>
            <div><strong>Output:</strong> <code>Purified Water, Glycerin, Niacinamide</code></div>
          </div>
        </div>

        <h3>Step 4: Analysis</h3>

        <p>
          The translated English ingredients proceed through the normal analysis pipeline.
        </p>

        <hr />

        <h2>Backend Implementation</h2>

        <h3>OCR Endpoint</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`@app.post("/ocr")
async def extract_text_from_image(request: OCRRequest):
    client = genai.Client(api_key=settings.google_api_key)

    # Decode image
    image_data = base64.b64decode(request.image)
    image_part = genai.types.Part.from_bytes(
        data=image_data,
        mime_type="image/jpeg"
    )

    # Extract ingredients with language detection
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[image_part, OCR_PROMPT]
    )

    # Parse language
    lines = response.text.strip().split('\\n', 1)
    detected_language = "en"
    ingredients_text = response.text

    if lines[0].startswith("LANGUAGE_DETECTED:"):
        detected_language = lines[0].replace("LANGUAGE_DETECTED:", "").strip().lower()
        ingredients_text = lines[1].strip() if len(lines) > 1 else ""

    # Translate if non-English
    if detected_language != "en" and detected_language != "none":
        ingredients_text = _translate_ingredients_to_english(client, ingredients_text)

    return OCRResponse(success=True, text=ingredients_text)`}
        </pre>

        <hr />

        <h2>Mobile Integration</h2>

        <h3>OCR Service</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// services/ocr.ts
import { File } from 'expo-file-system';
import api from './api';

export async function extractIngredients(imageUri: string): Promise<string> {
  // Read image as base64
  const imageFile = new File(imageUri);
  const base64Image = await imageFile.base64();

  // Send to backend
  const response = await api.post('/ocr', {
    image: base64Image,
  });

  if (response.data?.text) {
    return cleanIngredientText(response.data.text);
  }

  return '';
}

function cleanIngredientText(text: string): string {
  return text
    .replace(/\\s+/g, ' ')           // Normalize whitespace
    .replace(/ingredients?\\s*:?\\s*/gi, '')  // Remove headers
    .trim();
}`}
        </pre>

        <h3>Usage in HomeScreen</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const handleCapture = async (base64Image: string) => {
  setLoading(true);

  try {
    const extractedText = await extractIngredients(base64Image);
    setIngredients(extractedText);
    setShowCamera(false);
  } catch (error) {
    Alert.alert('OCR Failed', 'Could not extract ingredients from image');
  } finally {
    setLoading(false);
  }
};`}
        </pre>

        <hr />

        <h2>Best Practices</h2>

        <h3>Image Quality</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border-2 border-green-500 bg-green-500/10 p-4">
            <div className="mb-2 font-semibold text-green-600 dark:text-green-400">Good</div>
            <ul className="space-y-1 text-sm">
              <li>Good lighting</li>
              <li>Steady camera</li>
              <li>Clear focus on ingredient list</li>
              <li>Minimal background noise</li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-red-500 bg-red-500/10 p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Avoid</div>
            <ul className="space-y-1 text-sm">
              <li>Blurry images</li>
              <li>Partial ingredient lists</li>
              <li>Glare or reflections</li>
              <li>Poor lighting</li>
            </ul>
          </div>
        </div>

        <h3>Error Handling</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`try {
  const ingredients = await extractIngredients(imageUri);

  if (!ingredients) {
    // Allow manual input
    Alert.alert(
      'No Ingredients Found',
      'Please enter ingredients manually or try a clearer photo'
    );
  }
} catch (error) {
  if (error.response?.status === 404) {
    // OCR endpoint not available
    console.log('Using manual input mode');
  } else {
    throw error;
  }
}`}
        </pre>

        <hr />

        <h2>Troubleshooting</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">OCR Not Extracting Text</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Ensure good lighting conditions</li>
              <li>Hold camera steady</li>
              <li>Frame just the ingredient list</li>
              <li>Try selecting from gallery for clearer images</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Translation Errors</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Scientific/INCI names should remain unchanged</li>
              <li>Check if the language is supported</li>
              <li>Very rare ingredients may not translate correctly</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Network Issues</div>
            <pre className="mt-2 rounded bg-muted p-3 text-xs overflow-x-auto">
{`const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000,  // 2 minutes for OCR + translation
});`}
            </pre>
          </div>
        </div>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/mobile-setup"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Setup Guide →</div>
            <div className="text-sm text-muted-foreground">Getting the app running</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/mobile-components"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Components →</div>
            <div className="text-sm text-muted-foreground">UI component documentation</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/api-reference"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Reference →</div>
            <div className="text-sm text-muted-foreground">REST endpoint documentation</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
