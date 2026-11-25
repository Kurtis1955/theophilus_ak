import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import Chip from "../../components/chip";
import ProjectVisual from "../../components/project-visual";
import { getProject, projects } from "../../lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
      >
        <FiArrowLeft className="w-4 h-4" /> All projects
      </Link>

      {/* Header */}
      <header className="mt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
          {project.tagline}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        {(project.liveUrl || project.images.length === 0) && (
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-accent hover:text-accent-strong transition-colors"
              >
                Visit live site <FiArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </header>

      {/* Visual */}
      <div className="mt-10">
        <ProjectVisual images={project.images} alt={project.name} />
      </div>

      {/* Sections */}
      <div className="mt-14 space-y-12">
        <section>
          <h2 className="font-display text-2xl font-bold text-ink">Overview</h2>
          <p className="mt-3 text-muted leading-relaxed">{project.overview}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-ink">Problem</h2>
          <p className="mt-3 text-muted leading-relaxed">{project.problem}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-ink">My role</h2>
          <p className="mt-3 text-muted leading-relaxed">{project.role}</p>
          <p className="mt-3 text-sm text-faint leading-relaxed">
            Contribution: {project.contribution}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-ink">Technical stack</h2>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-ink">Architecture & implementation</h2>
          <ul className="mt-4 space-y-3">
            {project.architecture.map((a) => (
              <li key={a} className="flex gap-3 text-muted leading-relaxed">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-ink">Key features I engineered</h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {project.features.map((f) => (
              <li
                key={f}
                className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-muted leading-relaxed"
              >
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-ink">Challenges & approach</h2>
          <ul className="mt-4 space-y-3">
            {project.challenges.map((c) => (
              <li key={c} className="flex gap-3 text-muted leading-relaxed">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Links */}
      <div className="mt-14 rounded-xl border border-line bg-surface p-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Interested in how this was built? Let&apos;s talk.
        </p>
        <div className="flex items-center gap-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:text-accent-strong transition-colors"
            >
              Live site ↗
            </a>
          )}
          <Link
            href="/contact"
            className="font-semibold text-accent hover:text-accent-strong transition-colors"
          >
            Contact me →
          </Link>
        </div>
      </div>

      {/* Other projects */}
      <section className="mt-16">
        <h2 className="font-display text-xl font-bold text-ink">More projects</h2>
        <div className="mt-5 grid sm:grid-cols-3 gap-4">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-lg border border-line bg-surface p-4 hover:border-accent-line transition-colors"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
                {p.category}
              </p>
              <p className="mt-1.5 font-display font-bold text-ink group-hover:text-accent transition-colors">
                {p.name}
              </p>
              <p className="mt-1 text-xs text-muted line-clamp-2">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
