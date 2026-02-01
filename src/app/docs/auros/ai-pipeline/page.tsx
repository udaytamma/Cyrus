import { AurosDocsLayout } from "@/components/AurosDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

export const metadata = {
  title: "AI Pipeline | Auros",
  description: "LLM extraction, scoring algorithm, and confidence gating for Auros job tracker",
};

export default function AiPipelinePage() {
  return (
    <AurosDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>AI Pipeline</h1>

        <p className="lead">
          Auros uses Qwen 2.5 Coder via Ollama for job extraction and salary estimation. This page
          covers the LLM prompts, scoring algorithm, and confidence gating logic.
        </p>

        <hr />

        <h2>Pipeline Overview</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph Input["Raw Input"]
        HTML["Job Page HTML"]
        TEXT["Extracted Text<br/>(Playwright)"]
    end

    subgraph LLM["LLM Processing"]
        EXTRACT["Field Extraction<br/>Prompt"]
        SALARY["Salary Estimation<br/>Prompt"]
        OLLAMA["Ollama Server<br/>Qwen 2.5 Coder"]
    end

    subgraph Parse["Response Parsing"]
        JSON["JSON Parsing"]
        VALIDATE["Schema Validation"]
        FALLBACK["Fallback Values"]
    end

    subgraph Score["Scoring"]
        WEIGHTS["Weight Calculation"]
        TOTAL["Total Score<br/>0.0 - 1.0"]
    end

    subgraph Gate["Gating"]
        CONF{"confidence<br/>> 0.60?"}
        SHOW["Show Salary"]
        HIDE["Omit Salary"]
        ALERT{"score<br/>>= 0.70?"}
        SLACK["Send Slack"]
        SKIP["Skip Alert"]
    end

    HTML --> TEXT
    TEXT --> EXTRACT
    EXTRACT --> OLLAMA
    OLLAMA --> JSON
    JSON --> VALIDATE
    VALIDATE --> FALLBACK
    FALLBACK --> WEIGHTS
    WEIGHTS --> TOTAL

    TEXT --> SALARY
    SALARY --> OLLAMA
    OLLAMA --> CONF
    CONF --> |Yes| SHOW
    CONF --> |No| HIDE

    TOTAL --> ALERT
    ALERT --> |Yes| SLACK
    ALERT --> |No| SKIP

    style OLLAMA fill:#fef3c7,stroke:#d97706,stroke-width:2px
    style TOTAL fill:#d1fae5,stroke:#059669,stroke-width:2px
    style SHOW fill:#d1fae5,stroke:#059669
    style HIDE fill:#fee2e2,stroke:#dc2626
    style SLACK fill:#dbeafe,stroke:#2563eb`}
        />

        <h2>Field Extraction Prompt</h2>

        <p>
          The extraction prompt asks the LLM to parse structured data from the raw job description.
          Output is JSON with specific fields.
        </p>

        <CopyableCodeBlock
          language="python"
          title="api/services/llm.py"
          code={`EXTRACTION_PROMPT = """
You are a job posting analyzer. Extract structured information from the following job description.

Return a JSON object with these exact fields:
{
  "primary_function": "TPM" | "PM" | "Platform" | "SRE" | "AI-ML" | "Other",
  "yoe_required": {"min": number, "max": number} | null,
  "work_mode": "remote" | "hybrid" | "onsite" | "unclear",
  "location": "City, State" | "Remote" | "Multiple locations",
  "key_requirements": ["requirement1", "requirement2", "requirement3"],
  "relevance_factors": {
    "has_ai_ml_keywords": boolean,
    "has_platform_infra_keywords": boolean,
    "is_principal_level": boolean,
    "is_senior_level": boolean
  }
}

Rules:
- For yoe_required, extract explicit numbers from phrases like "10+ years", "8-12 years experience"
- If YOE is not explicitly stated, return null (will be inferred from level)
- For work_mode, look for explicit mentions of remote, hybrid, or in-office requirements
- For location, extract the primary job location; if multiple, list the first or "Multiple locations"
- For key_requirements, list 3-5 of the most important qualifications

Job Description:
{job_description}

Respond ONLY with the JSON object, no additional text.
"""`}
        />

        <h3>Response Parsing</h3>

        <CopyableCodeBlock
          language="python"
          title="api/services/llm.py"
          code={`import json
import re


def parse_llm_response(content: str) -> dict:
    """Parse LLM response, handling common formatting issues."""
    # Try direct JSON parse
    try:
        return json.loads(content)
    except json.JSONDecodeError:
        pass

    # Try extracting from markdown code fence
    fence_match = re.search(r"\`\`\`json\\s*(\\{.*?\\})\\s*\`\`\`", content, re.DOTALL)
    if fence_match:
        return json.loads(fence_match.group(1))

    # Try extracting JSON from surrounding text
    brace_start = content.find("{")
    brace_end = content.rfind("}")
    if brace_start != -1 and brace_end != -1:
        return json.loads(content[brace_start : brace_end + 1])

    raise ValueError("Could not parse LLM response as JSON")`}
        />

        <h2>Salary Estimation Prompt</h2>

        <p>
          If salary is not found in the job description, a separate prompt asks the LLM to estimate
          based on role, level, and company.
        </p>

        <CopyableCodeBlock
          language="python"
          title="api/services/salary.py"
          code={`SALARY_ESTIMATION_PROMPT = """
You are a compensation analyst. Estimate the salary range for this job posting.

Context:
- Company: {company_name}
- Title: {job_title}
- Location: {location}
- Level indicators: {level_keywords}

Return a JSON object:
{
  "salary_min": number (annual USD),
  "salary_max": number (annual USD),
  "confidence": number (0.0 to 1.0),
  "reasoning": "Brief explanation"
}

Confidence guidelines:
- 0.9+: Very confident (clear level, well-known company, explicit location)
- 0.7-0.9: Moderately confident (most factors clear)
- 0.5-0.7: Low confidence (missing key information)
- <0.5: Very uncertain (unusual role, unknown company)

For Principal/Senior TPM roles at top tech companies in 2024:
- Principal TPM at Tier 1 (FAANG): $280k-$400k total comp
- Principal TPM at Tier 2 (Top 50): $220k-$320k total comp
- Senior TPM at Tier 1: $200k-$300k total comp
- Senior TPM at Tier 2: $160k-$250k total comp

Adjust for location (SF/NYC +10%, remote -10%, midwest -20%).

Respond ONLY with the JSON object.
"""`}
        />

        <h3>Confidence Gating Logic</h3>

        <CopyableCodeBlock
          language="python"
          title="api/services/salary.py"
          code={`def process_salary(job_description: str, company: str, title: str, location: str) -> dict:
    """Extract or estimate salary with confidence gating."""
    # Step 1: Try regex extraction from JD
    extracted = extract_salary_from_text(job_description)
    if extracted:
        return {
            "salary_min": extracted["min"],
            "salary_max": extracted["max"],
            "salary_source": "jd",
            "salary_confidence": 1.0,  # Explicit data is trusted
        }

    # Step 2: Fall back to LLM estimation
    estimation = estimate_salary_with_llm(company, title, location)

    # Step 3: Apply confidence gating
    if estimation["confidence"] > SALARY_CONFIDENCE_THRESHOLD:  # 0.60
        return {
            "salary_min": estimation["salary_min"],
            "salary_max": estimation["salary_max"],
            "salary_source": "ai",
            "salary_confidence": estimation["confidence"],
        }

    # Step 4: Confidence too low - omit salary
    return {
        "salary_min": None,
        "salary_max": None,
        "salary_source": None,
        "salary_confidence": estimation["confidence"],
    }


SALARY_PATTERNS = [
    r"\\$([\\d,]+)k?\\s*[-–]\\s*\\$([\\d,]+)k?",  # $200k - $300k
    r"\\$([\\d,]+),?000\\s*[-–]\\s*\\$([\\d,]+),?000",  # $200,000 - $300,000
    r"base salary[:\\s]+\\$([\\d,]+)k?\\s*[-–]\\s*\\$([\\d,]+)k?",
]


def extract_salary_from_text(text: str) -> dict | None:
    """Extract salary range using regex patterns."""
    for pattern in SALARY_PATTERNS:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            min_val = int(match.group(1).replace(",", ""))
            max_val = int(match.group(2).replace(",", ""))
            # Handle "k" suffix
            if min_val < 1000:
                min_val *= 1000
            if max_val < 1000:
                max_val *= 1000
            return {"min": min_val, "max": max_val}
    return None`}
        />

        <h2>Match Scoring Algorithm</h2>

        <p>
          Each job receives a relevance score from 0.0 to 1.0 based on five weighted factors. The
          algorithm is tuned for Principal TPM roles in AI/Platform domains.
        </p>

        <MermaidDiagram
          chart={`flowchart LR
    subgraph Factors["Scoring Factors"]
        F1["Title Match<br/>0.30"]
        F2["AI/ML Keywords<br/>0.25"]
        F3["YOE Fit<br/>0.20"]
        F4["Company Tier<br/>0.15"]
        F5["Work Mode<br/>0.10"]
    end

    subgraph Calc["Calculation"]
        S1["title_score * 0.30"]
        S2["keywords_score * 0.25"]
        S3["yoe_score * 0.20"]
        S4["tier_score * 0.15"]
        S5["mode_score * 0.10"]
        SUM["Sum = Final Score"]
    end

    F1 --> S1
    F2 --> S2
    F3 --> S3
    F4 --> S4
    F5 --> S5

    S1 --> SUM
    S2 --> SUM
    S3 --> SUM
    S4 --> SUM
    S5 --> SUM

    style F1 fill:#dbeafe,stroke:#2563eb
    style F2 fill:#dbeafe,stroke:#2563eb
    style SUM fill:#d1fae5,stroke:#059669,stroke-width:2px`}
        />

        <h3>Scoring Implementation</h3>

        <CopyableCodeBlock
          language="python"
          title="api/services/scorer.py"
          code={`from dataclasses import dataclass


@dataclass
class ScoringWeights:
    title_match: float = 0.30
    ai_ml_keywords: float = 0.25
    yoe_fit: float = 0.20
    company_tier: float = 0.15
    work_mode: float = 0.10


TITLE_PATTERNS = {
    "principal_tpm": 1.0,
    "staff_tpm": 0.9,
    "senior_tpm": 0.8,
    "principal_pm": 0.85,
    "staff_pm": 0.75,
    "senior_pm": 0.7,
    "tpm": 0.5,
    "pm": 0.4,
}

AI_ML_KEYWORDS = {
    "artificial intelligence", "machine learning", "ml platform",
    "ai infrastructure", "llm", "large language model", "genai",
    "ml ops", "mlops", "data platform", "ai/ml",
}

PLATFORM_KEYWORDS = {
    "platform", "infrastructure", "developer experience",
    "devex", "internal tools", "cloud", "kubernetes",
}


def calculate_match_score(
    title: str,
    description: str,
    yoe_min: int | None,
    yoe_max: int | None,
    company_tier: int,
    work_mode: str,
    weights: ScoringWeights = ScoringWeights(),
) -> float:
    """Calculate weighted match score for a job posting."""

    # 1. Title Match (0.30)
    title_lower = title.lower()
    title_score = 0.0
    for pattern, score in TITLE_PATTERNS.items():
        if pattern.replace("_", " ") in title_lower:
            title_score = max(title_score, score)
            break

    # 2. AI/ML Keywords (0.25)
    desc_lower = description.lower()
    ai_count = sum(1 for kw in AI_ML_KEYWORDS if kw in desc_lower)
    platform_count = sum(1 for kw in PLATFORM_KEYWORDS if kw in desc_lower)
    keywords_score = min(1.0, (ai_count * 0.2 + platform_count * 0.15))

    # 3. YOE Fit (0.20) - Target: 8-15 years
    yoe_score = calculate_yoe_fit(yoe_min, yoe_max, target_min=8, target_max=15)

    # 4. Company Tier (0.15)
    tier_scores = {1: 1.0, 2: 0.8, 3: 0.6}
    tier_score = tier_scores.get(company_tier, 0.5)

    # 5. Work Mode (0.10)
    mode_scores = {"remote": 1.0, "hybrid": 0.8, "onsite": 0.5, "unclear": 0.6}
    mode_score = mode_scores.get(work_mode, 0.5)

    # Weighted sum
    total = (
        title_score * weights.title_match
        + keywords_score * weights.ai_ml_keywords
        + yoe_score * weights.yoe_fit
        + tier_score * weights.company_tier
        + mode_score * weights.work_mode
    )

    return round(total, 3)


def calculate_yoe_fit(
    job_min: int | None,
    job_max: int | None,
    target_min: int,
    target_max: int,
) -> float:
    """Calculate how well the job YOE range fits the target range."""
    if job_min is None and job_max is None:
        return 0.5  # Unknown - neutral score

    job_min = job_min or 0
    job_max = job_max or 30

    # Calculate overlap
    overlap_start = max(job_min, target_min)
    overlap_end = min(job_max, target_max)

    if overlap_start > overlap_end:
        # No overlap - penalize based on distance
        distance = min(abs(job_max - target_min), abs(job_min - target_max))
        return max(0.0, 1.0 - distance * 0.1)

    # Overlap exists - score based on coverage
    overlap_range = overlap_end - overlap_start
    target_range = target_max - target_min
    return min(1.0, overlap_range / target_range)`}
        />

        <h2>Ollama Client</h2>

        <CopyableCodeBlock
          language="python"
          title="api/services/llm.py"
          code={`import httpx
from api.config import settings


class OllamaClient:
    def __init__(self):
        self.base_url = settings.OLLAMA_BASE_URL
        self.model = settings.OLLAMA_MODEL
        self.timeout = 60.0  # LLM can be slow

    async def generate(self, prompt: str) -> str:
        """Send prompt to Ollama and return response text."""
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            response = await client.post(
                f"{self.base_url}/api/generate",
                json={
                    "model": self.model,
                    "prompt": prompt,
                    "stream": False,
                    "options": {
                        "temperature": 0.1,  # Low temp for structured output
                        "num_predict": 1024,
                    },
                },
            )
            response.raise_for_status()
            return response.json()["response"]

    async def is_healthy(self) -> bool:
        """Check if Ollama is running and model is available."""
        try:
            async with httpx.AsyncClient(timeout=5.0) as client:
                response = await client.get(f"{self.base_url}/api/tags")
                models = [m["name"] for m in response.json().get("models", [])]
                return self.model in models or self.model.split(":")[0] in models
        except Exception:
            return False


ollama_client = OllamaClient()`}
        />

        <h2>YOE Inference</h2>

        <p>
          When YOE is not explicitly stated in the job description, the LLM infers it from title
          level and requirements context.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Title Level</th>
                <th className="px-4 py-3 text-left font-semibold">Inferred YOE</th>
                <th className="px-4 py-3 text-left font-semibold">yoe_source</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Principal / Distinguished</td>
                <td className="px-4 py-3">12-20 years</td>
                <td className="px-4 py-3 text-muted-foreground">inferred</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Staff</td>
                <td className="px-4 py-3">10-15 years</td>
                <td className="px-4 py-3 text-muted-foreground">inferred</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Senior</td>
                <td className="px-4 py-3">5-10 years</td>
                <td className="px-4 py-3 text-muted-foreground">inferred</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Mid-level (no prefix)</td>
                <td className="px-4 py-3">3-6 years</td>
                <td className="px-4 py-3 text-muted-foreground">inferred</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Explicit in JD</td>
                <td className="px-4 py-3">As stated</td>
                <td className="px-4 py-3 text-muted-foreground">extracted</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Error Handling</h2>

        <p>
          The AI pipeline handles failures gracefully to prevent scan interruption:
        </p>

        <ul>
          <li>
            <strong>LLM timeout:</strong> Use fallback values, log warning, continue scan
          </li>
          <li>
            <strong>JSON parse error:</strong> Retry with simplified prompt once, then use defaults
          </li>
          <li>
            <strong>Ollama unavailable:</strong> Mark job as &quot;extraction_failed&quot;, skip
            scoring
          </li>
          <li>
            <strong>Low confidence salary:</strong> Set salary fields to NULL, not error
          </li>
        </ul>

        <CopyableCodeBlock
          language="python"
          code={`async def extract_job_fields(job_description: str) -> dict:
    """Extract fields with fallback handling."""
    try:
        response = await ollama_client.generate(
            EXTRACTION_PROMPT.format(job_description=job_description)
        )
        return parse_llm_response(response)
    except Exception as e:
        logger.warning(f"LLM extraction failed: {e}")
        return {
            "primary_function": "Other",
            "yoe_required": None,
            "work_mode": "unclear",
            "location": "Unknown",
            "key_requirements": [],
            "relevance_factors": {
                "has_ai_ml_keywords": False,
                "has_platform_infra_keywords": False,
                "is_principal_level": False,
                "is_senior_level": False,
            },
        }`}
        />
      </article>
    </AurosDocsLayout>
  );
}
