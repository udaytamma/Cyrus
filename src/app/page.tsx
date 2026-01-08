import Link from "next/link";
import { projects } from "@/data/projects";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Category badge */}
      <div className="mb-4 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            project.category === "capstone"
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {project.category === "capstone" ? "Capstone" : "Hobby"}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-xs ${
            project.status === "active"
              ? "bg-success/10 text-success"
              : project.status === "completed"
              ? "bg-muted text-muted-foreground"
              : "bg-warning/10 text-warning"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Title and description */}
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        {project.links.demo && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Live
          </span>
        )}
      </div>
      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* Metrics */}
      {project.metrics && (
        <div className="mb-4 grid grid-cols-2 gap-2">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-lg font-semibold text-primary">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Links */}
      <div className={`flex items-center gap-3 ${project.links.demo ? "justify-between" : "justify-end"}`}>
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Try Demo
          </a>
        )}
        <div className="flex items-center gap-3 whitespace-nowrap">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          )}
          {project.links.docs && (
            <a
              href={project.links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Docs
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const capstoneProjects = projects.filter((p) => p.category === "capstone");
  const hobbyProjects = projects.filter((p) => p.category === "hobby");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-32">
          <div className="text-center">
            {/* Greeting */}
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Welcome to my portfolio
            </p>

            {/* Name */}
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Uday Tamma</span>
            </h1>

            {/* Tagline */}
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              After 17 years in IT, now building AI-powered portfolio projects
              and targeting senior technical leadership roles in top-tier tech
              companies. Off the keyboard: motorcycles, macroeconomics, and cars.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                About Me
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-12 flex items-center justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground sm:text-3xl">17+</div>
                <div className="text-sm text-muted-foreground">Years IT</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground sm:text-3xl">4</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground sm:text-3xl">Telecom</div>
                <div className="text-sm text-muted-foreground">Domain</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-secondary/5 blur-3xl" />
        </div>
      </section>

      {/* Capstone Project Section */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Capstone Project
              </h2>
              <p className="mt-2 text-muted-foreground">
                Enterprise-grade system demonstrating principal-level engineering
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden text-sm font-medium text-primary hover:underline sm:block"
            >
              View all projects →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            {capstoneProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Hobby Projects Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Hobby Projects
            </h2>
            <p className="mt-2 text-muted-foreground">
              Personal explorations in AI, web development, and automation
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hobbyProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Interested in working together?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            I&apos;m currently exploring Principal TPM and PM roles at leading tech
            companies. Let&apos;s connect and discuss how I can contribute to your
            team.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://linkedin.com/in/udaytamma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Learn more about me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
