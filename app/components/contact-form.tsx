"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { site } from "@/app/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full px-4 py-3 rounded-lg border border-line bg-surface text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all";
const labelCls = "block text-sm font-medium text-muted mb-1.5";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-accent-line bg-accent-soft p-8 text-center">
        <p className="font-display text-lg font-bold text-ink">Message sent</p>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out — I&apos;ll get back to you soon. You can also email me
          directly at {site.email}.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-accent hover:text-accent-strong transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="rounded-lg border border-red-300/40 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          Something went wrong sending your message. Please try again or email me
          directly at {site.email}.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className={labelCls}>Name</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name"
            value={form.name} onChange={handleChange} placeholder="Your name"
            className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelCls}>Email</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email"
            value={form.email} onChange={handleChange} placeholder="you@example.com"
            className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className={labelCls}>Subject</label>
        <input id="cf-subject" name="subject" type="text" required
          value={form.subject} onChange={handleChange} placeholder="Project inquiry, opportunity, collaboration…"
          className={inputCls} />
      </div>

      <div>
        <label htmlFor="cf-message" className={labelCls}>Message</label>
        <textarea id="cf-message" name="message" rows={6} required
          value={form.message} onChange={handleChange}
          placeholder="Tell me about the project or opportunity…"
          className={`${inputCls} resize-y`} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-strong transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <FaPaperPlane className="text-sm" /> Send message
          </>
        )}
      </button>
    </form>
  );
}
