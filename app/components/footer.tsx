import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { navLinks, site } from "@/app/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display font-bold text-lg text-ink">
              theophilus<span className="text-accent">.</span>ak
            </p>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              Frontend Engineer building scalable web applications and intuitive
              interfaces — React, Next.js, TypeScript.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-md text-muted hover:text-accent hover:bg-accent-soft transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-md text-muted hover:text-accent hover:bg-accent-soft transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-widest text-faint mb-4">
              {"// navigate"}
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-faint mb-4">
              {"// contact"}
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-muted hover:text-accent transition-colors"
                >
                  <FiMail className="w-4 h-4 text-accent shrink-0" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-muted hover:text-accent transition-colors"
                >
                  <FiPhone className="w-4 h-4 text-accent shrink-0" />
                  {site.phones.join(" · ")}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted">
                <FiMapPin className="w-4 h-4 text-accent shrink-0" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-faint">
            React · Next.js · TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
