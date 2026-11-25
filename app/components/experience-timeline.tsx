import type { Experience } from "@/app/lib/experience";
import Chip from "./chip";

export default function ExperienceTimeline({
  items,
  limit,
}: {
  items: Experience[];
  limit?: number;
}) {
  const shown = limit ? items.slice(0, limit) : items;

  return (
    <ol className="relative border-l border-line ml-3 sm:ml-6 space-y-10">
      {shown.map((exp) => (
        <li key={`${exp.company}-${exp.period}`} className="relative pl-8 sm:pl-10">
          <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg" />
          <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 transition-colors hover:border-accent-line">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {exp.period}
              </p>
              <p className="text-sm font-medium text-faint">{exp.company}</p>
            </div>
            <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-ink">
              {exp.role}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{exp.summary}</p>
            <ul className="mt-4 space-y-2">
              {exp.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-muted leading-relaxed">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
