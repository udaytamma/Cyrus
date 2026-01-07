import { EmailAssistantDocsLayout } from "@/components/EmailAssistantDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Deployment | Email Assistant",
  description: "Production deployment and automation for the Email Assistant.",
};

export default function DeploymentPage() {
  return (
    <EmailAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Deployment</h1>

        <p className="lead">
          This guide covers deploying the Email Assistant for production use, including local scheduling, Docker containers, and cloud platforms.
        </p>

        <hr />

        <h2>Deployment Options</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────────────────┐
│                         DEPLOYMENT OPTIONS                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   LOCAL                      CLOUD                     CONTAINER            │
│   ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐  │
│   │ macOS           │       │ Google Cloud Run│       │ Docker          │  │
│   │ LaunchAgent     │       │                 │       │                 │  │
│   ├─────────────────┤       ├─────────────────┤       ├─────────────────┤  │
│   │ Linux Cron      │       │ AWS Lambda      │       │ Docker Compose  │  │
│   ├─────────────────┤       ├─────────────────┤       │                 │  │
│   │ Windows Task    │       │ Railway/Render  │       │                 │  │
│   │ Scheduler       │       │                 │       │                 │  │
│   └─────────────────┘       └─────────────────┘       └─────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Local Deployment</h2>

        <h3>macOS LaunchAgent</h3>

        <p>
          Create a LaunchAgent for automatic scheduling:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`<!-- ~/Library/LaunchAgents/com.emailassistant.digest.plist -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.emailassistant.digest</string>

    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/python3</string>
        <string>/Users/you/EmailAssistant/src/main.py</string>
    </array>

    <key>WorkingDirectory</key>
    <string>/Users/you/EmailAssistant</string>

    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>8</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>

    <key>StandardOutPath</key>
    <string>/Users/you/EmailAssistant/logs/stdout.log</string>

    <key>StandardErrorPath</key>
    <string>/Users/you/EmailAssistant/logs/stderr.log</string>

    <key>EnvironmentVariables</key>
    <dict>
        <key>GOOGLE_API_KEY</key>
        <string>your-api-key</string>
    </dict>
</dict>
</plist>`}
        </pre>

        <p>
          Load the agent:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`launchctl load ~/Library/LaunchAgents/com.emailassistant.digest.plist`}
        </pre>

        <h3>Linux Cron</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Edit crontab
crontab -e

# Run daily at 8 AM
0 8 * * * cd /home/user/EmailAssistant && /usr/bin/python3 src/main.py >> logs/cron.log 2>&1`}
        </pre>

        <h3>Web Server (systemd)</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# /etc/systemd/system/emailassistant.service
[Unit]
Description=Email Assistant Web Server
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/emailassistant
ExecStart=/opt/emailassistant/venv/bin/gunicorn -w 2 -b 0.0.0.0:8001 server:app
Restart=always
Environment=GOOGLE_API_KEY=your-key

[Install]
WantedBy=multi-user.target`}
        </pre>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`sudo systemctl enable emailassistant
sudo systemctl start emailassistant`}
        </pre>

        <hr />

        <h2>Docker Deployment</h2>

        <h3>Dockerfile</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

# Create non-root user
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

# Expose port
EXPOSE 8001

# Run server
CMD ["gunicorn", "-w", "2", "-b", "0.0.0.0:8001", "server:app"]`}
        </pre>

        <h3>Docker Compose</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8001:8001"
    environment:
      - GOOGLE_API_KEY=\${GOOGLE_API_KEY}
    volumes:
      - ./data:/app/data
      - ./credentials:/app/credentials:ro
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8001/api/status"]
      interval: 30s
      timeout: 10s
      retries: 3

  scheduler:
    build: .
    command: python src/scheduler.py
    environment:
      - GOOGLE_API_KEY=\${GOOGLE_API_KEY}
    volumes:
      - ./data:/app/data
      - ./credentials:/app/credentials:ro
    restart: unless-stopped`}
        </pre>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down`}
        </pre>

        <hr />

        <h2>Cloud Deployment</h2>

        <h3>Google Cloud Run</h3>

        <h4>1. Build and Push</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Authenticate
gcloud auth configure-docker

# Build
docker build -t gcr.io/YOUR_PROJECT/email-assistant:latest .

# Push
docker push gcr.io/YOUR_PROJECT/email-assistant:latest`}
        </pre>

        <h4>2. Deploy</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`gcloud run deploy email-assistant \\
  --image gcr.io/YOUR_PROJECT/email-assistant:latest \\
  --platform managed \\
  --region us-central1 \\
  --allow-unauthenticated \\
  --set-env-vars "GOOGLE_API_KEY=xxx"`}
        </pre>

        <h4>3. Cloud Scheduler</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`gcloud scheduler jobs create http email-digest \\
  --schedule="0 8 * * *" \\
  --uri="https://your-service-url.run.app/api/refresh" \\
  --http-method=POST \\
  --time-zone="America/New_York"`}
        </pre>

        <h3>Railway / Render</h3>

        <p>
          Both platforms support automatic deployment from GitHub:
        </p>

        <div className="not-prose my-6">
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
              <span>Connect GitHub repository</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
              <span>Set environment variables in dashboard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
              <span>Deploy automatically on push</span>
            </li>
          </ol>
        </div>

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
                <td className="px-4 py-3 text-muted-foreground">Gemini API key</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">PORT</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">Server port (auto-set)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Environment Configuration</h2>

        <h3>Production Settings</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# config/production.py

import os

class ProductionConfig:
    """Production configuration."""

    # Security
    DEBUG = False
    TESTING = False

    # API Keys (from environment)
    GOOGLE_API_KEY = os.environ["GOOGLE_API_KEY"]

    # Logging
    LOG_LEVEL = "WARNING"
    LOG_FILE = "/var/log/emailassistant/app.log"

    # Performance
    CACHE_SIZE = 2000
    REQUEST_TIMEOUT = 30

    # Rate limiting
    RATE_LIMIT = "100/hour"`}
        </pre>

        <h3>Security Checklist</h3>

        <div className="not-prose my-6 rounded-lg border border-border bg-card p-4">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>API keys stored in environment variables or secret manager</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Gmail credentials secured with appropriate permissions</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>HTTPS enabled for web interface</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Rate limiting configured</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Log files do not contain sensitive data</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Regular credential rotation scheduled</span>
            </li>
          </ul>
        </div>

        <hr />

        <h2>Monitoring</h2>

        <h3>Health Check Endpoint</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`@app.route("/health")
def health():
    """Health check for container orchestrators."""
    checks = {
        "api": check_gemini_connection(),
        "gmail": check_gmail_connection(),
        "disk": check_disk_space(),
    }

    healthy = all(checks.values())
    status_code = 200 if healthy else 503

    return jsonify({
        "status": "healthy" if healthy else "unhealthy",
        "checks": checks,
        "timestamp": datetime.now().isoformat()
    }), status_code`}
        </pre>

        <h3>Alerting</h3>

        <p>
          Set up alerts for:
        </p>

        <ul>
          <li>Script execution failures</li>
          <li>API rate limit errors</li>
          <li>Low cache hit rates</li>
          <li>High error rates</li>
        </ul>

        <hr />

        <h2>Backup and Recovery</h2>

        <h3>Data Backup</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`#!/bin/bash
# backup.sh - Run daily

BACKUP_DIR="/backups/emailassistant"
DATE=$(date +%Y%m%d)

# Backup data directory
tar -czf "$BACKUP_DIR/data-$DATE.tar.gz" /app/data/

# Keep only last 30 days
find "$BACKUP_DIR" -name "*.tar.gz" -mtime +30 -delete`}
        </pre>

        <h3>Recovery Procedure</h3>

        <div className="not-prose my-6">
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
              <span>Stop the service</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
              <span>Restore data directory from backup</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
              <span>Verify Gmail credentials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">4</span>
              <span>Restart the service</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">5</span>
              <span>Run manual refresh to verify</span>
            </li>
          </ol>
        </div>

        <hr />

        <h2>Scaling Considerations</h2>

        <h3>Horizontal Scaling</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────┐
│                    HORIZONTAL SCALING                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│                    ┌─────────────────┐                          │
│                    │  Load Balancer  │                          │
│                    └────────┬────────┘                          │
│                             │                                    │
│         ┌───────────────────┼───────────────────┐               │
│         │                   │                   │               │
│         ▼                   ▼                   ▼               │
│   ┌───────────┐       ┌───────────┐       ┌───────────┐       │
│   │ Instance 1│       │ Instance 2│       │ Instance N│       │
│   └─────┬─────┘       └─────┬─────┘       └─────┬─────┘       │
│         │                   │                   │               │
│         └───────────────────┼───────────────────┘               │
│                             │                                    │
│                             ▼                                    │
│                    ┌─────────────────┐                          │
│                    │  Shared Cache   │                          │
│                    │     (Redis)     │                          │
│                    └─────────────────┘                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
        </pre>

        <h3>Redis for Shared Cache</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import redis

redis_client = redis.from_url(os.environ.get("REDIS_URL"))

def get_cached(key: str) -> dict | None:
    """Get from Redis cache."""
    data = redis_client.get(key)
    return json.loads(data) if data else None

def set_cached(key: str, value: dict, ttl: int = 3600):
    """Set in Redis cache with TTL."""
    redis_client.setex(key, ttl, json.dumps(value))`}
        </pre>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/email-assistant/getting-started"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Getting Started →</div>
            <div className="text-sm text-muted-foreground">Setup and installation</div>
          </Link>
          <Link
            href="/docs/email-assistant/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">System design overview</div>
          </Link>
          <Link
            href="/docs/email-assistant/testing"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Testing →</div>
            <div className="text-sm text-muted-foreground">Test suite documentation</div>
          </Link>
          <Link
            href="/docs/email-assistant"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Overview →</div>
            <div className="text-sm text-muted-foreground">Back to Email Assistant</div>
          </Link>
        </div>
      </article>
    </EmailAssistantDocsLayout>
  );
}
