import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/app/lib/projects";
import Chip from "./chip";
import ProjectVisual from "./project-visual";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-xl border border-line bg-surface overflow-hidden transition-colors hover:border-accent-line">
      <Link
        href={`/projects/${project.slug}`}
        className="block"
        aria-label={`View case study for ${project.name}`}
      >
        <div className="p-4 sm:p-5 border-b border-line bg-surface-2/50">
          <ProjectVisual images={project.images.slice(0, 1)} alt={project.name} compact />
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
              {project.category} · {project.year}
            </p>
            <h3 className="mt-1.5 font-display text-xl font-bold text-ink">
              <Link href={`/projects/${project.slug}`} className="hover:text-accent transition-colors">
                {project.name}
              </Link>
            </h3>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="shrink-0 p-2 rounded-md text-faint hover:text-accent hover:bg-accent-soft transition-colors"
            aria-label={`Open ${project.name} case study`}
          >
            <FiArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <p className="mt-3 text-sm text-muted leading-relaxed">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
          {project.stack.length > 4 && <Chip>+{project.stack.length - 4}</Chip>}
        </div>

        <div className="mt-auto pt-5 flex items-center gap-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="font-medium text-accent hover:text-accent-strong transition-colors"
          >
            Case study →
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              Live site ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
