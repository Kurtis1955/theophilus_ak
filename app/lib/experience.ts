export interface Experience {
  period: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    period: "2024 — Present",
    role: "Software & UI/UX Developer",
    company: "SuperTech Limited",
    summary:
      "Building business applications end-to-end — employee self-service platforms, administrative dashboards and quotation workflows integrated with ERP services via a PHP proxy backend.",
    highlights: [
      "Developed an Employee Self-Service platform covering leave requests, loan management, approvals and role-based admin interfaces",
      "Built a PHP proxy service connecting the frontend to ERP quotation services — handling requests, ERP data retrieval and error responses",
      "Developed a biometric time & attendance platform — user and device management, enrolment workflows, attendance tracking and role-based admin interfaces",
      "Designed and implemented UI architectures balancing usability with business requirements across web applications",
      "Collaborated across the stack — frontend, PHP backend services, and Java/C# Blazor backend development",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sass", "PHP", "Java", "Spring Boot", "C#", "Blazor"],
  },
  {
    period: "2023",
    role: "Frontend Developer",
    company: "360Botech Development",
    summary:
      "Delivered client-facing web applications and internal tools, owning frontend architecture and deployment.",
    highlights: [
      "Built scalable applications with React, Next.js and TypeScript, including SSR/SSG for SEO and performance",
      "Implemented authentication flows and third-party integrations",
      "Led frontend delivery as tech lead — code reviews, architecture decisions and mentoring",
      "Worked closely with designers and backend developers to ship production-ready interfaces",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    period: "2023",
    role: "Software Developer Intern",
    company: "Becoming Care Services",
    summary:
      "Contributed to healthcare web applications focused on improving patient and staff workflows.",
    highlights: [
      "Developed responsive interfaces with React and Next.js for healthcare workflows",
      "Built features with attention to compliance requirements in a regulated environment",
      "Optimized application performance and troubleshot production issues",
    ],
    tech: ["React", "Next.js", "JavaScript"],
  },
  {
    period: "2022",
    role: "Software Developer Intern",
    company: "Becoming Creation",
    summary:
      "Entry point into professional software development — shipping web applications and learning engineering practices.",
    highlights: [
      "Developed web applications end-to-end, from requirements to deployment",
      "Translated product requirements into technical implementations with the product team",
      "Optimized performance and UX; integrated third-party APIs and participated in code reviews",
    ],
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; note?: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Component-driven interfaces built with modern React tooling.",
    skills: [
      { name: "React", note: "Hooks, composition, performance" },
      { name: "Next.js", note: "App Router, SSR/SSG, API routes" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Styling & UI Engineering",
    description: "Maintainable, responsive styling systems.",
    skills: [
      { name: "Tailwind CSS" },
      { name: "Sass" },
      { name: "CSS" },
      { name: "Responsive Design" },
    ],
  },
  {
    title: "Backend & Integration",
    description: "Full-stack capability for integrating frontend with services.",
    skills: [
      { name: "Java / Spring Boot" },
      { name: "C# / Blazor" },
      { name: "PHP" },
      { name: "REST APIs" },
      { name: "Node.js" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Day-to-day engineering practices.",
    skills: [
      { name: "Git / GitHub" },
      { name: "Figma" },
      { name: "REST API integration" },
      { name: "Authentication & RBAC" },
    ],
  },
];
