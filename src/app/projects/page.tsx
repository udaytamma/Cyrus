import Link from "next/link";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of AI-powered applications including fraud detection, mental math training, ingredient analysis, and email automation.",
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Header with category */}
      <div className="border-b border-border bg-muted/30 px-6 py-4">
        <div className="flex items-center justify-between">
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
      </div>

      {/* Content */}
      <div className="p-6">
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
        <p className="mb-4 text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Key Features
          </h4>
          <ul className="space-y-1">
            {project.features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="mb-4 grid grid-cols-2 gap-3 rounded-lg bg-muted/50 p-3 sm:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-lg font-semibold text-primary">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        <div className={`flex items-center gap-3 border-t border-border pt-4 ${project.links.demo ? "justify-between" : "justify-end"}`}>
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
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
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            {project.links.docs && (
              <a
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Docs
              </a>
            )}
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View Details
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const capstoneProjects = projects.filter((p) => p.category === "capstone");
  const hobbyProjects = projects.filter((p) => p.category === "hobby");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-muted/30 py-12 sm:py-16">
        <div className="mx-auto max-w-[1330px] px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A collection of AI-powered applications and technical explorations.
            Each project demonstrates different aspects of system design,
            architecture, and engineering excellence.
          </p>
        </div>
      </section>

      {/* Capstone Projects */}
      <section className="border-b border-border py-12 sm:py-16">
        <div className="mx-auto max-w-[1330px] px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Capstone Project
            </h2>
            <p className="mt-2 text-muted-foreground">
              Enterprise-grade system demonstrating principal-level engineering
              and architecture decisions
            </p>
          </div>
          <div className="grid gap-6">
            {capstoneProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Hobby Projects */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1330px] px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Hobby Projects
            </h2>
            <p className="mt-2 text-muted-foreground">
              Personal explorations in AI, web development, and automation
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {hobbyProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
