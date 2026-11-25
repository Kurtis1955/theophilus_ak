import type { Metadata } from "next";
import SectionHeading from "../components/section-heading";
import ExperienceTimeline from "../components/experience-timeline";
import { experiences } from "../lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Theophilus Akowuah — frontend and full-stack roles building HR platforms, ERP integrations, EdTech systems and enterprise applications.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="career"
        title="Professional experience"
        description="Over three years of progressive responsibility — from internship to engineering business-critical systems used in production."
      />
      <div className="mt-12">
        <ExperienceTimeline items={experiences} />
      </div>
    </div>
  );
}
