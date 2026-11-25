import Link from "next/link";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import SectionHeading from "./components/section-heading";
import ProjectCard from "./components/project-card";
import ExperienceTimeline from "./components/experience-timeline";
import { experiences } from "./lib/experience";
import { featuredProjects } from "./lib/projects";
import { site } from "./lib/site";

const highlights = [
  {
    title: "Frontend Architecture",
    body: "Component-driven React and Next.js applications with modular structure, reusable UI patterns and maintainable styling systems.",
  },
  {
    title: "API Integration",
    body: "REST API consumption with asynchronous data handling, typed contracts, error management and resilient frontend–backend communication.",
  },
  {
    title: "Enterprise Applications",
    body: "Business systems in production — HR self-service, ERP-integrated quotations, biometric attendance and management dashboards.",
  },
  {
    title: "Responsive Interfaces",
    body: "Interfaces engineered mobile-first and refined across breakpoints — not shrunk desktop layouts.",
  },
  {
    title: "Authentication & RBAC",
    body: "Auth flows, protected routes and role-based experiences that surface the right actions to the right users.",
  },
  {
    title: "Data-driven Dashboards",
    body: "Complex data tables, filtering, approval workflows and operational views for administrative users.",
  },
];

const stackStrip = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Sass",
  "REST APIs", "Java · Spring Boot", "C# · Blazor",
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint" aria-hidden />
        <div
          className="absolute -top-40 -right-40 w-[34rem] h-[34rem] rounded-full bg-accent/10 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="font-mono text-xs sm:text-sm text-accent tracking-widest uppercase">
                {"//"} software engineer · accra, ghana
              </p>
              <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.05]">
                {site.name}
              </h1>
              <p className="mt-4 font-mono text-lg sm:text-xl text-accent">
                {site.role}
              </p>
              <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
                {site.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-strong transition-colors"
                >
                  View projects <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-line bg-surface text-ink font-medium hover:border-accent-line hover:text-accent transition-colors"
                >
                  Contact me
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2.5 rounded-lg border border-line bg-surface text-muted hover:text-accent hover:border-accent-line transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2.5 rounded-lg border border-line bg-surface text-muted hover:text-accent hover:border-accent-line transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  aria-label="Send email"
                  className="p-2.5 rounded-lg border border-line bg-surface text-muted hover:text-accent hover:border-accent-line transition-colors"
                >
                  <FiMail className="w-5 h-5" />
                </a>
                <span className="ml-1 font-mono text-xs text-faint hidden sm:inline">
                  open to frontend & full-stack roles
                </span>
              </div>
            </div>

            {/* Engineering identity card */}
            <div className="hidden lg:block">
              <div className="rounded-xl border border-line bg-surface shadow-xl shadow-black/5 overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-surface-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-line" />
                  <span className="w-2.5 h-2.5 rounded-full bg-line" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  <span className="ml-3 font-mono text-[11px] text-faint">
                    engineer.ts
                  </span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-7">
                  <p><span className="text-faint">{"// who I am"}</span></p>
                  <p><span className="text-accent">const</span> <span className="text-ink">engineer</span> = {"{"}</p>
                  <p className="pl-4"><span className="text-accent">name</span>: <span className="text-amber-600 dark:text-amber-400">"Theophilus Akowuah"</span>,</p>
                  <p className="pl-4"><span className="text-accent">role</span>: <span className="text-amber-600 dark:text-amber-400">"Frontend Engineer"</span>,</p>
                  <p className="pl-4"><span className="text-accent">focus</span>: [<span className="text-amber-600 dark:text-amber-400">"React"</span>, <span className="text-amber-600 dark:text-amber-400">"Next.js"</span>, <span className="text-amber-600 dark:text-amber-400">"TypeScript"</span>],</p>
                  <p className="pl-4"><span className="text-accent">experience</span>: <span className="text-accent">"3+ years"</span>,</p>
                  <p className="pl-4"><span className="text-accent">ships</span>: <span className="text-accent">"enterprise systems"</span></p>
                  <p>{"}"};</p>
                  <p className="mt-2"><span className="text-faint">{"// what I care about"}</span></p>
                  <p><span className="text-accent">engineer.</span><span className="text-ink">solve</span>(complexRequirements) <span className="text-accent">→</span> reliableSoftware();</p>
                </div>
                <div className="grid grid-cols-3 border-t border-line divide-x divide-line">
                  {[
                    ["3+", "years exp."],
                    ["9", "projects"],
                    ["5", "domains"],
                  ].map(([v, l]) => (
                    <div key={l} className="px-4 py-3.5 text-center">
                      <p className="font-display text-xl font-bold text-accent">{v}</p>
                      <p className="text-[11px] text-faint mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stack strip ──────────────────────────────────── */}
      <section className="border-y border-line bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {stackStrip.map((t) => (
              <span key={t} className="font-mono text-xs text-faint tracking-wide">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engineering highlights ───────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="engineering focus"
          title="What I build, not just what I use"
          description="Six areas where my frontend work creates real engineering value in business applications."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent-line"
            >
              <p className="font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-accent transition-colors">
                {h.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured projects ────────────────────────────── */}
      <section className="border-t border-line bg-surface-2/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="selected work"
              title="Featured projects"
              description="Business systems and platforms I've engineered — each with a full case study."
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong transition-colors shrink-0"
            >
              View all projects <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience preview ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="career"
            title="Professional experience"
            description="Three-plus years building and shipping software across agencies, product teams and enterprise clients."
          />
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong transition-colors shrink-0"
          >
            Full experience <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-10 max-w-3xl">
          <ExperienceTimeline items={experiences} limit={2} />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="relative overflow-hidden rounded-2xl border border-accent-line bg-accent-soft px-6 py-14 sm:px-12 text-center">
            <div className="bg-blueprint absolute inset-0 opacity-60" aria-hidden />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {"//"} next step
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                Have a problem worth engineering?
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-muted leading-relaxed">
                I&apos;m open to frontend and full-stack opportunities, freelance
                projects and collaborations. Let&apos;s talk about what you&apos;re
                building.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-strong transition-colors"
                >
                  Start a conversation <FiArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-line bg-surface text-ink font-medium hover:border-accent-line hover:text-accent transition-colors"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
