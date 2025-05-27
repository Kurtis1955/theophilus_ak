// app/experience/page.tsx
import { FiBriefcase, FiCalendar, FiCode, FiCpu, FiUsers } from 'react-icons/fi';

const experiences = [
  {
    year: "2022",
    role: "Software Developer Intern",
    company: "Becoming Creation",
    icon: <FiCode className="text-blue-500" />,
    highlights: [
      "Developed cutting-edge web applications from inception to completion",
      "Collaborated with product teams to translate requirements into technical specs",
      "Optimized application performance and enhanced UX",
      "Integrated third-party APIs and conducted code reviews"
    ],
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "360Botech Development",
    icon: <FiCpu className="text-purple-500" />,
    highlights: [
      "Built scalable apps with React, Next.js, and TypeScript",
      "Implemented SSR/SSG for better SEO and performance",
      "Integrated authentication and payment systems",
      "Led frontend team as Tech Lead (code reviews, architecture)"
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    year: "2023",
    role: "Software Developer Intern",
    company: "Becoming Care Services",
    icon: <FiUsers className="text-green-500" />,
    highlights: [
      "Developed healthcare web apps to improve patient workflows",
      "Ensured compliance with healthcare regulations",
      "Built responsive interfaces with React/Next.js",
      "Optimized performance and conducted debugging"
    ],
    tech: ["React", "Next.js", "JavaScript", "Healthcare APIs"]
  },
  {
    year: "2024",
    role: "Frontend Developer (National Service)",
    company: "SuperTech Limited",
    icon: <FiBriefcase className="text-orange-500" />,
    highlights: [
      "Built modern web apps with React/Next.js",
      "Designed UI architectures balancing aesthetics/functionality",
      "Collaborated with backend teams on API integrations",
      "Expanding into backend development with Java"
    ],
    tech: ["React", "Next.js", "Sass", "Java"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Professional Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My career progression and key contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          {/* <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2"></div> */}

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
            >
              {/* Year */}
              <div className={`hidden sm:flex items-center justify-center w-24 h-24 gap-1 rounded-full border-4 border-white dark:border-gray-800 bg-gradient-to-r ${index % 3 === 0 ? 'from-blue-400 to-blue-600' : index % 3 === 1 ? 'from-purple-400 to-purple-600' : 'from-green-400 to-green-600'} shadow-lg z-10`}>
                <FiCalendar className="text-white text-2xl" />
                <span className="text-white font-bold">{exp.year}</span>
              </div>

              {/* Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} mt-4 md:mt-0`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                        <p className="text-blue-500 dark:text-blue-400 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}