import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "../components/section-heading";
import ExperienceTimeline from "../components/experience-timeline";
import { experiences, skillCategories } from "../lib/experience";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a Frontend Engineer with 3+ years of experience building React and Next.js applications, enterprise dashboards and business systems.`,
};

const approach = [
  {
    title: "Understand the business first",
    body: "Most of my work is business software. I start from the workflow — who uses it, what decision it supports, what happens when it fails — before touching components.",
  },
  {
    title: "Engineer for the maintainer",
    body: "Reusable components, typed data models and predictable state. Code I leave behind should be cheaper to extend than it was to write.",
  },
  {
    title: "Integrate, don't isolate",
    body: "Frontend rarely exists alone. I design API boundaries deliberately — typed contracts, clear error states, and UIs that degrade gracefully when services do.",
  },
  {
    title: "Verify in the real world",
    body: "Responsive behaviour, permission edge cases and messy data are tested against actual usage, not just the happy path.",
  },
];

const credentials = [
  { label: "BSc Computer Science", note: "University degree" },
  { label: "2× Hackathon winner", note: "Competitive builds" },
  { label: "3+ years", note: "Professional experience" },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Header */}
      <header className="max-w-3xl">
        <p className="font-mono text-xs sm:text-sm text-accent tracking-widest uppercase">
          {"//"} about
        </p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
          Engineer first, <span className="text-accent">developer</span> always.
        </h1>
        <div className="mt-6 space-y-4 text-muted leading-relaxed">
          <p>
            I&apos;m {site.name.split(" ")[0]}, a frontend engineer with over three
            years of experience building web applications that solve real business
            problems. My work sits at the intersection of interface design and
            systems engineering — turning complex requirements into interfaces
            that are reliable, maintainable and genuinely usable.
          </p>
          <p>
            Most of what I&apos;ve shipped is business software: employee
            self-service platforms, ERP-integrated quotation systems, biometric
            attendance management, aviation certification tools and
            gold-trading platforms. These aren&apos;t brochure sites — they&apos;re
            systems people depend on daily, which shapes how I think about state,
            permissions, error handling and data integrity.
          </p>
          <p>
            While my primary depth is the frontend — React, Next.js, TypeScript
            and Tailwind — I work comfortably across the stack. I&apos;ve built with
            Java and Spring Boot, C# with Blazor, PHP backend services, and
            Node.js, which means I design frontend/backend boundaries with an
            understanding of what the other side actually looks like.
          </p>
          <p>
            I hold a bachelor&apos;s degree in Computer Science and have won two
            hackathons. I care about craft — clean architecture, honest code
            review, accessible interfaces — and I&apos;m continuously expanding into
            deeper backend and systems work.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
          {credentials.map((c) => (
            <div
              key={c.label}
              className="rounded-lg border border-line bg-surface px-4 py-3 text-center"
            >
              <p className="text-sm font-semibold text-ink">{c.label}</p>
              <p className="mt-0.5 text-[11px] text-faint">{c.note}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Approach */}
      <section className="mt-20">
        <SectionHeading
          eyebrow="how I work"
          title="My engineering approach"
        />
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {approach.map((a, i) => (
            <div
              key={a.title}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <p className="font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display font-bold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <SectionHeading
          eyebrow="technical skills"
          title="Tools I engineer with"
          description="Organised by how they apply to real work — not as a logo wall."
        />
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <h3 className="font-display font-bold text-ink">{cat.title}</h3>
              <p className="mt-1 text-xs text-faint">{cat.description}</p>
              <ul className="mt-4 space-y-2.5">
                {cat.skills.map((s) => (
                  <li key={s.name} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="font-medium text-ink">{s.name}</span>
                    {s.note && <span className="text-xs text-faint text-right">{s.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-20">
        <SectionHeading
          eyebrow="experience"
          title="Where I've worked"
          description="A progression from internship to shipping business-critical systems."
        />
        <div className="mt-8 max-w-3xl">
          <ExperienceTimeline items={experiences} />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <div className="rounded-xl border border-line bg-surface p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Want to see what I&apos;ve built?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Case studies cover the architecture, challenges and engineering
              decisions behind each project.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-strong transition-colors shrink-0"
          >
            Browse projects <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
