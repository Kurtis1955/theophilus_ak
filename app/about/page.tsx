import { FaReact, FaFigma, FaJava, FaNodeJs } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { SiNextdotjs, SiTailwindcss, SiSpringboot, SiJavascript, SiTypescript, SiReact, SiAdobephotoshop } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaGit,FaHtml5,FaCss3Alt } from "react-icons/fa6";


export default function About() {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'React', icon: <SiReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'React Native', icon: <TbBrandReactNative className="text-sky-600" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Html5', icon: <FaHtml5 className="text-red-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-green-500" /> },
    { name: 'Figma', icon: <FaFigma className="text-purple-500" /> },
    { name: 'Git', icon: <FaGit className="text-blue-700" /> },
    { name: 'UI/UX Design', icon: <FaFigma className="text-pink-500" /> }
  ];

  return (
    <div id='about' className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* About Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              THEOPHILUS AKOWUAH
            </span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">Frontend Developer</h2>
        </div>

        {/* About Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <p className="text-md lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Dynamic Frontend Developer with a proven track record in building user-centric, visually stunning web applications. 
            Proficient in JavaScript, React.js, Next.js, and SASS, with expertise in Tailwind CSS for modern, responsive designs. 
            Skilled in UI/UX design using Figma, Penpot and professional graphics design with Photoshop. 
            Experienced in cross-platform mobile development with React Native, and expanding backend knowledge with Java and Spring Boot framework.
          </p>
          <div className="mt-6">
            <p className="text-md lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              A two-time hackathon winner holding a bachelor's degree in computer science, I thrive under pressure and excel in collaborative environments, 
              driving innovation in fast-paced teams. Passionate about self-improvement, leadership, and mentoring, with a deep appreciation for 
              self-development books and a genuine love for inspiring young minds.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            <span className="border-b-4 border-blue-500 pb-2">Technical Skills</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition"
              >
                <div className="text-4xl mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Ready to collaborate?</h2>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Contact Me
            <FiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}