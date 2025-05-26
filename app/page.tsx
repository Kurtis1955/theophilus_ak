import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center justify-center text-center">
        {/* Name + Title with Gradient Text */}
        <div className="mb-8 group">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-500 group-hover:bg-gradient-to-l">
            THEOPHILUS AKOWUAH
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            SOFTWARE DEVELOPER
          </p>
        </div>

        {/* Tagline with Animated Underline */}
        <div className="mb-12 relative group">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            MOBILE & WEB DEVELOPMENT
          </h2>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500" />
        </div>

        {/* Description */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          I develop <span className="font-semibold text-blue-400 hover:text-purple-400 transition-colors">innovative solutions</span> for WEB and MOBILE platforms, 
          crafting seamless user experiences. Need an expert? Let's turn your ideas into reality.
        </p>

        {/* CTA Buttons + Socials */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Link
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105"
          >
            Let's Vibe <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex gap-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition hover:-translate-y-1">
              <FiGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition hover:-translate-y-1">
              <FiLinkedin className="text-xl" />
            </a>
            <a href="mailto:youremail@example.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition hover:-translate-y-1">
              <FiMail className="text-xl" />
            </a>
          </div>
        </div>

        {/* Scroll Down Hint */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}