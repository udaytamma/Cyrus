# Security Review Findings (Capstone & Hobby Projects)

Date: 2026-02-12

This document captures true vulnerabilities only (no nitpicks) with remediation guidance. Reviews are based on code inspection.
Severity ordering within each project: Critical → High → Medium → Low.

---

## Demo Must-Fix Summary

Assumes the demo is reachable beyond localhost or shared with reviewers. If the demo is strictly local/offline, fix at least the **Critical** items.

- **emailAssistant:** 4 must-fix (2 Critical, 2 High) — debug RCE exposure, no auth on destructive endpoints, remote test execution, plaintext OAuth tokens.
- **FraudDetection:** 3 must-fix (1 Critical, 2 High) — fail-open auth, optional encryption/hashing, exposed infra services.
- **TeleOps:** 2 must-fix (1 Critical, 1 High) — fail-open auth, tenant header spoofing.
- **IngredientScanner:** 1 must-fix (1 High) — no auth on API endpoints.
- **uday-ai-worker:** 1 must-fix (1 High) — public endpoint with no auth and open CORS.
- **ProfessorGemini:** 1 must-fix (1 High) — no auth on Streamlit app.
- **Auros:** 1 must-fix (1 High) — fail-open API key.

Projects with zero Critical/High findings: Cyrus, MindGames, chatbot-ollama, scripts-dashboard, shared-tools, docs, storage, Documentation, myPrompts, zeroleaf-portfolio.

---

## FraudDetection

### Critical
1. **Auth can be effectively disabled (fail-open)**  
Why it matters: All API/admin/metrics endpoints can be publicly accessible if tokens are not configured.  
Evidence: `src/api/auth.py`, `src/config/settings.py`.  
Remediation: Fail closed in production (startup should error if tokens are missing). Use JWT/OAuth with scoped roles and rotation.

### High
2. **Sensitive data at rest protection can be silently skipped**  
Why it matters: If `EVIDENCE_VAULT_KEY` or `EVIDENCE_HASH_KEY` is unset, encryption/hashing is skipped but evidence still stores identifiers, creating PCI/privacy exposure.  
Evidence: `src/evidence/service.py`.  
Remediation: Require keys in production (fail startup if missing). Move identifiers into encrypted vault or store only hashed fields.

3. **Infra services exposed without auth**  
Why it matters: Redis, Postgres, and Prometheus are published to the host with no authentication; a remote attacker could read/modify data or scrape metrics.  
Evidence: `docker-compose.yml` exposes ports `6379`, `5432`, `9090` without auth/TLS.  
Remediation: Bind to localhost, remove host port publishing for non-dev, enable Redis AUTH/TLS, and restrict via firewall/security groups.

### Medium
4. **Policy audit trail spoofing**  
Why it matters: `changed_by` is user-supplied and written to audit records, allowing impersonation of any identity.  
Evidence: `src/api/main.py` policy mutation endpoints; `PolicyVersioningService`.  
Remediation: Derive `changed_by` from authenticated principal; ignore user-supplied values. Log request IDs and IPs server-side for audit integrity.

5. **Internal error details returned to clients**  
Why it matters: Leaks stack/DB errors and internal context useful to attackers.  
Evidence: `src/api/main.py` returns `detail=str(e)` on 500 errors.  
Remediation: Return generic error messages in production; log full details server-side.

6. **Debug/SQL echo defaults can leak PII in logs**  
Why it matters: SQLAlchemy echo can log queries/params containing identifiers.  
Evidence: `app_debug` defaults to `True` and is used as SQLAlchemy `echo` in `src/api/dependencies.py` and `src/evidence/service.py`.  
Remediation: Default `app_debug` to `False`; ensure `echo=False` in production and add log redaction.

7. **No rate limiting or request size controls on `/decide`**  
Why it matters: DoS/cost exhaustion risk via heavy CPU/DB/Redis/ML work.  
Evidence: No limiter middleware or proxy limits in API code.  
Remediation: Add rate limiting (gateway or FastAPI middleware), body size limits, and concurrency caps/circuit breakers.

### Test gaps
- No tests that enforce “fail-closed” auth in production mode.
- No tests that assert encryption/hashing is required for evidence vaults in production.

---

## TeleOps (TelcoOps)

### Critical
1. **Auth can be effectively disabled (fail-open)**  
Why it matters: All read/write/admin/metrics endpoints can be publicly accessible if tokens are not configured.  
Evidence: `teleops/api/app.py`, `teleops/config.py`.  
Remediation: Fail closed in production; implement JWT/OAuth with scoped roles and rotation.

### High
2. **Tenant isolation is based on a client-supplied header with no verification**  
Why it matters: Any caller can set `X-Tenant-Id` to view or act on another tenant’s data.  
Evidence: `require_tenant_id` only checks presence; tenant scoping uses header value.  
Remediation: Bind tenant identity to authenticated principal (token claims); enforce row-level security or per-tenant DBs.

### Medium
3. **Raw alert payloads can be retrieved by any API user**  
Why it matters: If raw payloads contain sensitive infrastructure data, any API token holder can exfiltrate it with `include_raw=true`.  
Evidence: `/alerts` and `/incidents/{id}/alerts` allow `include_raw=true` without role checks.  
Remediation: Require elevated scopes for raw payload access, or sanitize/redact fields by default.

4. **Internal LLM/RAG error details returned to clients**  
Why it matters: Upstream errors may leak internal URLs, stack traces, or provider responses.  
Evidence: `generate_llm_rca` returns `detail=f"LLM/RAG error: {exc}"`.  
Remediation: Return generic error messages; log full details server-side.

5. **No rate limiting or request size controls**  
Why it matters: DoS/cost exhaustion risk via RAG + LLM workloads.  
Evidence: No limiter middleware or proxy limits.  
Remediation: Add rate limiting, body size limits, concurrency caps; consider per-tenant quotas.

### Test gaps
- No tests that enforce fail-closed auth in production.
- No tests verifying tenant isolation cannot be bypassed by header spoofing.

---

## Auros

### High
1. **API key is optional (fail-open auth)**  
Why it matters: If `API_KEY` is unset, all API endpoints are publicly accessible.  
Evidence: `api/auth.py`, `api/config.py`.  
Remediation: Fail closed in production; use per-user keys and rotation.

---

## Cyrus (Portfolio Site)

### Medium
1. **Client-side “AuthGate” is bypassable**  
Why it matters: Access control is enforced only in the browser using localStorage and hardcoded hashes; any user can bypass it by editing localStorage or inspecting code.  
Evidence: `src/components/AuthGate.tsx`.  
Remediation: Move protected content behind server-side auth (JWT/OAuth) or remove the gate for public content.

---

## Documentation

No executable code. Documentation files only. No security findings.

---

## IngredientScanner

### High
1. **No authentication on API endpoints**  
Why it matters: Anyone who can reach the service can trigger OCR and analysis, consuming paid LLM quota and compute.  
Evidence: `api.py` exposes `/ocr` and analysis endpoints with no auth or API key checks.  
Remediation: Add API key/JWT auth and per-client rate limiting/quotas.

### Medium
2. **Overly permissive CORS**  
Why it matters: `allow_origins=["*"]` with `allow_credentials=True` is unsafe if auth is added later, and allows unrestricted cross-origin usage today.  
Evidence: `api.py` CORS middleware configuration.  
Remediation: Restrict CORS to trusted origins and set `allow_credentials=False` unless required.

3. **Internal error details leaked to clients**  
Why it matters: Exposes exception messages and stack details to callers.  
Evidence: `api.py` returns `detail=str(e)` on 500.  
Remediation: Return generic errors in production; log details server-side.

4. **No request size limits for base64 images**  
Why it matters: Large payloads can cause memory pressure or DoS.  
Evidence: `/ocr` accepts base64 image string with no size validation.  
Remediation: Enforce max payload size at API gateway and validate base64 length before processing.

---

## MindGames

Static Next.js site. No server/API code. No security findings.

---

## ProfessorGemini

### High
1. **No authentication on Streamlit app**  
Why it matters: If deployed publicly, any user can trigger Gemini/Claude calls using your API keys, resulting in cost exposure and abuse.  
Evidence: `app.py` has no auth gate and directly invokes LLM providers.  
Remediation: Add authentication (Streamlit auth, reverse proxy with auth, or JWT) and per-user rate limits.

---

## chatbot-ollama

### Medium
1. **No auth on API endpoints**  
Why it matters: Public deployment allows anyone to proxy requests to the Ollama backend and use server resources.  
Evidence: `pages/api/chat.ts`, `pages/api/parse-pdf.ts`, `pages/api/models.ts`.  
Remediation: Add API key/JWT auth and per-IP rate limiting.

---

## emailAssistant

### Critical
1. **Flask runs on 0.0.0.0 with debug=True**  
Why it matters: Werkzeug debugger can enable remote code execution if the server is reachable.  
Evidence: `src/web/server.py` runs `app.run(host='0.0.0.0', port=8001, debug=True)`.  
Remediation: Disable debug in any non-local environment. Bind to localhost or put behind auth proxy.

2. **No authentication/authorization on sensitive endpoints**  
Why it matters: Any caller can delete emails, mark read, create calendar events, add tasks, or send unsubscribe emails.  
Evidence: `/api/email/*` endpoints in `src/web/server.py`.  
Remediation: Require authenticated user session + CSRF protection or API token auth.

### High
3. **Remote test execution endpoint**  
Why it matters: `/api/tests/run/<suite>` triggers subprocess execution without auth, enabling DoS and potential abuse.  
Evidence: `src/web/server.py` `run_tests` endpoint.  
Remediation: Remove from production or restrict to admin-only with strong auth.

4. **OAuth credentials stored in plaintext on disk**  
Why it matters: `credentials.json` and `token.json` contain sensitive OAuth secrets and refresh tokens; compromise gives full Gmail/Calendar/Tasks access.  
Evidence: Root-level `credentials.json` and `token.json`; `server.py` reads/writes these files.  
Remediation: Store tokens in OS keychain or secrets manager; restrict file permissions; never keep in repo.

---

## myPrompts

Text-only content. No security findings.

---

## scripts-dashboard

Static front-end dashboard. No server/API code. No security findings.

---

## shared-tools/pdf-generator-js

Library-only code. No security findings.

---

## shared-tools/pdf-generator-py

Library-only code. No security findings.

---

## src

Data-only directory. No security findings.

---

## uday-ai-worker

### High
1. **Public endpoint with no auth and open CORS**  
Why it matters: Anyone can use the worker to consume Gemini API calls at your expense.  
Evidence: `src/index.ts` has no auth checks and sets `Access-Control-Allow-Origin: *`.  
Remediation: Add API key/JWT auth, rate limiting, and restrict CORS to trusted domains.

---

## zeroleaf-portfolio

Static HTML/CSS site. No security findings.

---

## docs

RAG corpus only. No executable code. No security findings.

---

## storage

Data storage directory only. No executable code. No security findings.
