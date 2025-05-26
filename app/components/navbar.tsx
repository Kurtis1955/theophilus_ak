// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          THEOPHILUS
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            href="/about" 
            // onClick={(e) => handleScroll(e, 'about')}
            className="hidden sm:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/project-build" 
            // onClick={(e) => handleScroll(e, 'projects')}
            className="hidden sm:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            // onClick={(e) => handleScroll(e, 'contact')}
            className="hidden sm:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>
          
          <div className="flex gap-4 ml-4">
            <a href="https://github.com/yourusername" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <FiGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <FiLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}