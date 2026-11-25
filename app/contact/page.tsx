import type { Metadata } from "next";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "../components/section-heading";
import ContactForm from "../components/contact-form";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — Frontend Engineer based in ${site.location}. Open to roles, projects and collaborations.`,
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="contact"
        title="Let's work together"
        description="Open to frontend and full-stack roles, freelance projects and collaborations. Send a message and I'll get back to you."
      />

      <div className="mt-12 grid lg:grid-cols-[1fr_1.4fr] gap-10">
        {/* Info */}
        <div className="space-y-8">
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="mt-0.5 p-2.5 rounded-lg bg-accent-soft text-accent h-fit">
                <FiMail className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-faint">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-ink font-medium hover:text-accent transition-colors"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-0.5 p-2.5 rounded-lg bg-accent-soft text-accent h-fit">
                <FiPhone className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-faint">Phone</p>
                <div className="mt-1 space-y-0.5">
                  {site.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block text-ink font-medium hover:text-accent transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-0.5 p-2.5 rounded-lg bg-accent-soft text-accent h-fit">
                <FiMapPin className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-faint">Location</p>
                <p className="mt-1 text-ink font-medium">{site.location}</p>
              </div>
            </li>
          </ul>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-faint mb-4">
              {"// find me"}
            </p>
            <div className="flex gap-2">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-line bg-surface text-muted hover:text-accent hover:border-accent-line transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-line bg-surface text-muted hover:text-accent hover:border-accent-line transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-lg border border-line bg-surface text-muted hover:text-accent hover:border-accent-line transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-ink">Send a message</h2>
          <p className="mt-1 text-sm text-muted">
            Fields marked are required — I usually reply within a day or two.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
