import type { Metadata } from "next";
import SectionHeading from "../components/section-heading";
import ProjectCard from "../components/project-card";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of web applications and business systems engineered by Theophilus Akowuah — HR platforms, ERP integrations, EdTech and enterprise management systems.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="work"
        title="Projects & case studies"
        description="Every project below includes the problem, my role, technical approach, challenges and outcomes — not just a screenshot."
      />

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
