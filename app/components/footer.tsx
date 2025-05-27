// components/Footer.tsx
import { FaWhatsapp } from "react-icons/fa";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTwitter,
} from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Akowuah
            </h3>
            <p className="text-gray-400">
              SOftware developer specializing in modern web and mobile
              applications
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Kurtis1955"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="linkedin.com/in/theophilus-akowuah-1b04b026a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/233506450690"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a
                href="https://upwork.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:kurtisbill2001@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              {/* <li>
                <a 
                  href="#experience" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Experience
                </a>
              </li> */}
              <li>
                <a
                  href="/project-build"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FiMail className="h-5 w-5 text-blue-400 mt-0.5 mr-3" />
                <a
                  href="mailto:hello@example.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  kurtisbill2001@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="h-5 w-5 text-blue-400 mt-0.5 mr-3" />
                <span className="text-gray-400">Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Theophilus Akowuah. All rights
            reserved.
          </p>
          <p className="mt-1 text-sm">
            Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
