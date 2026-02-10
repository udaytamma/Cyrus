import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Uday Tamma - Principal Technical Program Manager specializing in AI, Engineering, and Enterprise Transformation.",
};

// Icons
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// Feature card component
function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-background to-background">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 shadow-lg shadow-primary/10 sm:h-36 sm:w-36">
              <span className="text-5xl font-bold text-primary sm:text-6xl">UT</span>
            </div>

            {/* Name */}
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Uday Tamma
            </h1>

            {/* Title with colored keywords */}
            <p className="mb-2 text-lg text-muted-foreground sm:text-xl">
              Principal Technical Program Manager specializing in
            </p>
            <p className="mb-4 text-lg sm:text-xl">
              <span className="font-medium text-primary">AI</span>
              <span className="text-muted-foreground">, </span>
              <span className="font-medium text-primary">Engineering</span>
              <span className="text-muted-foreground">, and </span>
              <span className="font-medium text-primary">Enterprise Transformation</span>
            </p>

            {/* Personal interests */}
            <p className="mb-8 text-base italic text-muted-foreground">
              Off the keyboard: motorcycles and macroeconomics.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary sm:text-3xl">15+ yrs</div>
                <div className="text-sm text-muted-foreground">Telecom &rarr; AI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground sm:text-3xl">$1.5M</div>
                <div className="text-sm text-muted-foreground">Net-New ARR</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary sm:text-3xl">150+</div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground sm:text-3xl">8</div>
                <div className="text-sm text-muted-foreground">AI Projects</div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="mt-8">
              <a
                href="/Uday_Tamma_Resume.pdf"
                download
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-primary/5 px-6 text-sm font-medium text-primary transition-all hover:border-primary/60 hover:bg-primary/10"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-secondary/5 blur-3xl" />
        </div>
      </section>

      {/* What I Bring Section */}
      <section className="border-y border-border bg-card/50 py-16 sm:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              What I Bring
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              15+ years leading high-blast-radius platform and reliability programs across billing, compliance, and large-scale migrations for Tier-1 operators
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<ChartIcon className="h-6 w-6 text-primary" />}
              title="$1.5M Net-New ARR"
              description="Built and operationalized a self-healing reliability platform, deliberately positioning it as a managed service tier and enabling sale as a new SKU"
            />
            <FeatureCard
              icon={<ServerIcon className="h-6 w-6 text-primary" />}
              title="150+ Services"
              description="Drove org-wide reliability transformation across 150+ Tier-0/Tier-1 services by shifting to vertical stack ownership and enforcing PRR, HA/DR, and tested rollback"
            />
            <FeatureCard
              icon={<BriefcaseIcon className="h-6 w-6 text-primary" />}
              title="~18% EBIT Improvement"
              description="Led cross-company SOC compliance automation without formal authority; standardized control libraries and reusable evidence pipelines for durable cost reduction"
            />
            <FeatureCard
              icon={<UsersIcon className="h-6 w-6 text-primary" />}
              title="~110-Person Org"
              description="Provided execution leverage across a global operations organization by enforcing common reliability standards, escalation norms, and risk-based capacity allocation"
            />
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              How I Work
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Cross-functional influence without direct authority. Decision-forcing, not consensus-seeking.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Executive Decision Cadence</h3>
              <p className="text-sm text-muted-foreground">OKRs, roadmaps, and QBRs to drive funding shifts, scope cuts, and timeline resets. Dependency coupling and recovery risk reframed into revenue- and margin-aware decisions.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Phased Rollout with Explicit Gates</h3>
              <p className="text-sm text-muted-foreground">Dual-run support by wave with go/no-go criteria. Explicit risk acceptance at each phase. No silent failures, no unbounded blast radius.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Error-Budget-Driven Prioritization</h3>
              <p className="text-sm text-muted-foreground">Automation prioritized by incident frequency x MTTR x error-budget burn. High-frequency, high-blast-radius failures addressed first to cut escalations and on-call burnout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Experience */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <BriefcaseIcon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Experience</h2>
              </div>
              <div className="space-y-6">
                <div className="relative border-l-2 border-primary/30 pl-6">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  <span className="text-sm font-medium text-primary">Oct 2025 - Present</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">Independent Builder</h3>
                  <p className="text-muted-foreground">AI/ML &amp; Systems Prototyping</p>
                  <p className="mt-2 text-sm text-muted-foreground">Built and operated 2 live, production-grade platforms (fraud detection, network incident RCA) with full documentation and demos.</p>
                </div>
                <div className="relative border-l-2 border-primary/30 pl-6">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  <span className="text-sm font-medium text-primary">2008 - Sept 2025</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">Principal Technical Program Manager</h3>
                  <p className="text-muted-foreground">Amdocs Inc</p>
                  <p className="mt-2 text-sm text-muted-foreground">Fast-tracked from Engineering Lead to Principal TPM. Led high-blast-radius reliability and platform programs for Tier-1 MSOs serving ~1.6M subscribers.</p>
                </div>
                <div className="relative border-l-2 border-muted pl-6">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-muted-foreground/30 bg-background" />
                  <span className="text-sm font-medium text-muted-foreground">Earlier</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">Java/Web Developer</h3>
                  <p className="text-muted-foreground">Wolfram Research</p>
                  <p className="mt-2 text-sm text-muted-foreground">Full-stack development and web applications</p>
                </div>
                <div className="relative border-l-2 border-muted pl-6">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-muted-foreground/30 bg-background" />
                  <span className="text-sm font-medium text-muted-foreground">Earlier</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">Sr. Software Engineer</h3>
                  <p className="text-muted-foreground">Lucid Technologies</p>
                  <p className="mt-2 text-sm text-muted-foreground">Software engineering and system design</p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <h2 className="text-2xl font-bold text-foreground">Education</h2>
              </div>
              <div className="mb-8 space-y-4">
                <div className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground">MBA</h3>
                  <p className="text-sm text-muted-foreground">University of Illinois at Urbana-Champaign</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground">MS Electrical Engineering</h3>
                  <p className="text-sm text-muted-foreground">University of Texas at Arlington</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-4 flex items-center gap-3">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground">SAFe Agilist</span>
                <span className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground">GenAI with LLMs (Coursera)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Looking For Section */}
      <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              What I&apos;m Looking For
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Targeting roles where I own the outcome, not just the process.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Role</h3>
              <p className="text-sm text-muted-foreground">Senior / Principal TPM or Platform Programs Lead at companies where technical depth matters and program managers are expected to force decisions, not just track them.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Environment</h3>
              <p className="text-sm text-muted-foreground">High-scale platform teams (billing, infrastructure, reliability, data) where blast radius is real, tradeoffs are non-trivial, and cross-functional influence without direct authority is the operating model.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground">What I Bring</h3>
              <p className="text-sm text-muted-foreground">Deep experience running programs across billing platforms (~1.6M subscribers), compliance automation (SOC, PCI), large-scale migrations, and reliability transformations (150+ services). I build durable operating models, not one-off project plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Interested in discussing AI initiatives, engineering transformation, or technical leadership opportunities? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
            <a
              href="mailto:udaytamma@zeroleaf.dev"
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <MailIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground text-center">udaytamma@zeroleaf.dev</p>
            </a>

            <a
              href="https://linkedin.com/in/udaytamma"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <LinkedInIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect with me</p>
            </a>

            <a
              href="https://github.com/udaytamma"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <GitHubIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">GitHub</h3>
              <p className="text-sm text-muted-foreground">View my code</p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View my projects
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
