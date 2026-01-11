import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import Link from "next/link";

export const metadata = {
  title: "Deployment | AI Ingredient Scanner",
  description: "Production deployment guide for the AI Ingredient Scanner backend, mobile app, and Streamlit interface.",
};

export default function DeploymentPage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Deployment</h1>

        <p className="lead">
          This guide covers deploying the AI Ingredient Scanner to production environments, including the FastAPI backend, mobile applications, and Streamlit interface.
        </p>

        <hr />

        <h2>Architecture Overview</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph MOBILE["Mobile Apps"]
      IOS["iOS Store"]
      ANDROID["Android Play"]
    end

    subgraph CLOUDRUN["Google Cloud Run"]
      API["FastAPI Backend<br/>/ocr - Image processing<br/>/analyze - Safety analysis<br/>Auto-scaling, Load balancing"]
    end

    subgraph DATA["Data Layer"]
      QDRANT["Qdrant Cloud<br/>(Vector Store)"]
      REDIS["Redis Cloud<br/>(Cache)"]
      GEMINI["Google Gemini API<br/>(AI)"]
    end

    LANGSMITH["LangSmith<br/>(Observability)"]

    IOS --> API
    ANDROID --> API
    API --> QDRANT
    API --> REDIS
    API --> GEMINI
    GEMINI --> LANGSMITH

    style IOS fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style ANDROID fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style API fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style QDRANT fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style REDIS fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style GEMINI fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style LANGSMITH fill:#fce7f3,stroke:#ec4899,stroke-width:2px
`}
        />

        <hr />

        <h2>Backend Deployment</h2>

        <h3>Google Cloud Run (Recommended)</h3>

        <p>
          Cloud Run is the recommended deployment platform for the FastAPI backend due to its auto-scaling capabilities and managed infrastructure.
        </p>

        <h4>Step 1: Create Dockerfile</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

# Run with uvicorn
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8080"]`}
        </pre>

        <h4>Step 2: Build and Push Image</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Authenticate with GCP
gcloud auth configure-docker

# Build image
docker build -t gcr.io/YOUR_PROJECT/ingredient-scanner:latest .

# Push to Container Registry
docker push gcr.io/YOUR_PROJECT/ingredient-scanner:latest`}
        </pre>

        <h4>Step 3: Deploy to Cloud Run</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`gcloud run deploy ingredient-scanner \\
  --image gcr.io/YOUR_PROJECT/ingredient-scanner:latest \\
  --platform managed \\
  --region us-central1 \\
  --allow-unauthenticated \\
  --set-env-vars "GOOGLE_API_KEY=xxx,QDRANT_URL=xxx,QDRANT_API_KEY=xxx"`}
        </pre>

        <h3>Environment Variables</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Required</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">GOOGLE_API_KEY</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Yes</td>
                <td className="px-4 py-3 text-muted-foreground">Gemini API key for AI processing</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">QDRANT_URL</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Yes</td>
                <td className="px-4 py-3 text-muted-foreground">Qdrant Cloud cluster URL</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">QDRANT_API_KEY</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Yes</td>
                <td className="px-4 py-3 text-muted-foreground">Qdrant Cloud API key</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">REDIS_URL</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">Redis connection string for caching</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">LANGCHAIN_API_KEY</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">LangSmith API key for observability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-6 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
          <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Security Warning</div>
          <p className="text-sm text-muted-foreground">
            Never commit API keys to version control. Use secret management services:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li><strong>Cloud Run:</strong> Google Secret Manager</li>
            <li><strong>Kubernetes:</strong> K8s Secrets</li>
            <li><strong>Heroku:</strong> Config Vars</li>
          </ul>
        </div>

        <h3>Alternative: Docker Compose</h3>

        <p>
          For self-hosted or on-premise deployments:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - GOOGLE_API_KEY=\${GOOGLE_API_KEY}
      - QDRANT_URL=\${QDRANT_URL}
      - QDRANT_API_KEY=\${QDRANT_API_KEY}
    restart: unless-stopped

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  redis_data:`}
        </pre>

        <hr />

        <h2>Mobile App Deployment</h2>

        <h3>Expo EAS Build</h3>

        <h4>Step 1: Install EAS CLI</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`npm install -g eas-cli
eas login`}
        </pre>

        <h4>Step 2: Configure eas.json</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "cli": {
    "version": ">= 3.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "production": {
      "ios": {
        "resourceClass": "m1-medium"
      },
      "android": {
        "buildType": "apk"
      }
    }
  },
  "submit": {
    "production": {}
  }
}`}
        </pre>

        <h4>Step 3: Update API URL</h4>

        <p>
          Before building, update <code>src/services/api.ts</code> with your production API URL:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Production API URL
const API_BASE_URL = 'https://your-cloud-run-url.run.app';`}
        </pre>

        <h4>Step 4: Build for Production</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Android APK
eas build --platform android --profile production

# iOS (requires Apple Developer account)
eas build --platform ios --profile production`}
        </pre>

        <h3>App Store Submission</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-3 font-semibold">iOS App Store</div>
            <pre className="mb-3 rounded bg-muted p-2 text-xs overflow-x-auto">
{`eas submit --platform ios \\
  --profile production`}
            </pre>
            <div className="text-sm text-muted-foreground">
              <strong>Requirements:</strong>
              <ul className="mt-2 space-y-1">
                <li>Apple Developer Program ($99/year)</li>
                <li>App icons and screenshots</li>
                <li>Privacy policy URL</li>
                <li>App review information</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-3 font-semibold">Google Play Store</div>
            <pre className="mb-3 rounded bg-muted p-2 text-xs overflow-x-auto">
{`eas submit --platform android \\
  --profile production`}
            </pre>
            <div className="text-sm text-muted-foreground">
              <strong>Requirements:</strong>
              <ul className="mt-2 space-y-1">
                <li>Google Play Developer ($25 one-time)</li>
                <li>App icons and screenshots</li>
                <li>Privacy policy</li>
                <li>Content rating questionnaire</li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <h2>Streamlit Deployment</h2>

        <h3>Streamlit Cloud</h3>

        <div className="not-prose my-6">
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
              <span>Push your code to a GitHub repository</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
              <span>Connect at <a href="https://share.streamlit.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">share.streamlit.io</a></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
              <span>Configure secrets in the Streamlit Cloud dashboard</span>
            </li>
          </ol>
        </div>

        <h3>Google Cloud Run</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Dockerfile for Streamlit
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8501
CMD ["streamlit", "run", "app.py", "--server.port=8501", "--server.address=0.0.0.0"]`}
        </pre>

        <hr />

        <h2>Production Checklist</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-3 font-semibold text-red-600 dark:text-red-400">Security</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>API keys in secret management</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>CORS restricted to production domains</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>HTTPS enforced</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Rate limiting configured</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Input validation on all endpoints</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-3 font-semibold text-blue-600 dark:text-blue-400">Performance</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Qdrant Cloud in same region as API</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Redis caching enabled</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Connection pooling configured</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Appropriate instance sizing</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-3 font-semibold text-green-600 dark:text-green-400">Monitoring</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>LangSmith tracing enabled</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Error alerting configured</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Health check endpoints monitored</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>API latency tracked</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-3 font-semibold text-purple-600 dark:text-purple-400">Mobile</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Production API URL configured</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>App icons and splash screens</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Privacy policy implemented</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-border"></span>
                <span>Crash reporting (Sentry/Crashlytics)</span>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <h2>Scaling Considerations</h2>

        <h3>API Scaling</h3>

        <MermaidDiagram
          chart={`flowchart TB
    LB["Load Balancer"]
    I1["Instance 1"]
    I2["Instance 2"]
    IN["Instance N"]
    QDRANT["Qdrant Cloud"]

    LB --> I1
    LB --> I2
    LB --> IN
    I1 --> QDRANT
    I2 --> QDRANT
    IN --> QDRANT

    style LB fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style I1 fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style I2 fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style IN fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style QDRANT fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
`}
        />

        <div className="not-prose my-4 rounded-lg border border-border bg-card p-4">
          <div className="mb-2 font-semibold">Configuration</div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>Min instances: 1 (avoid cold starts)</li>
            <li>Max instances: Based on budget</li>
            <li>Concurrency: 80 requests per instance</li>
          </ul>
        </div>

        <h3>Qdrant Scaling</h3>

        <p>For high-volume production usage:</p>

        <ul>
          <li>Use Qdrant Cloud distributed mode</li>
          <li>Configure read replicas for query performance</li>
          <li>Consider dedicated cluster for enterprise workloads</li>
        </ul>

        <h3>Cost Optimization</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Service</th>
                <th className="px-4 py-3 text-left font-semibold">Free Tier</th>
                <th className="px-4 py-3 text-left font-semibold">Typical Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Google Gemini</td>
                <td className="px-4 py-3">15 RPM</td>
                <td className="px-4 py-3 text-muted-foreground">Pay-per-use</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Qdrant Cloud</td>
                <td className="px-4 py-3">1GB free</td>
                <td className="px-4 py-3 text-muted-foreground">$25+/month</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Cloud Run</td>
                <td className="px-4 py-3">2M requests</td>
                <td className="px-4 py-3 text-muted-foreground">Pay-per-use</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Redis Cloud</td>
                <td className="px-4 py-3">30MB free</td>
                <td className="px-4 py-3 text-muted-foreground">$5+/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/getting-started"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Getting Started →</div>
            <div className="text-sm text-muted-foreground">Setup and installation guide</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/api-reference"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Reference →</div>
            <div className="text-sm text-muted-foreground">REST endpoints documentation</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/mobile-setup"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Mobile Setup →</div>
            <div className="text-sm text-muted-foreground">React Native Expo configuration</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/testing"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Testing →</div>
            <div className="text-sm text-muted-foreground">Test suite and coverage</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
