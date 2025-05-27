// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCode, FiGithub, FiLinkedin, FiMail, FiUser } from 'react-icons/fi';
import { IoMenu } from "react-icons/io5";
import { RiHomeHeartFill } from 'react-icons/ri';


export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      }

  return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          THEOPHILUS
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            href="/about" 
            className="hidden sm:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/project-build" 
            className="hidden sm:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="hidden sm:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>
          
          <div className="flex gap-4 ml-4">
            <a href="https://github.com/Kurtis1955" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <FiGithub className="text-xl" />
            </a>
            <a href="https://wa.me/233506450690" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>

        <IoMenu size={25} className="sm:hidden" onClick={toggleMenu} />

        {isMenuOpen && (
  <ul className="lg:hidden w-full absolute top-13 left-0 flex flex-col h-screen z-[99] bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out p-4 space-y-1">
    <Link 
      href="/" 
      onClick={() => setIsMenuOpen(false)}
      className="flex items-center gap-4 px-2 py-3 text-gray-900 dark:text-gray-300 hover:bg-blue-500 hover:text-white hover:rounded-lg transition-colors duration-200 border-b dark:border-gray-700"
    >
      <RiHomeHeartFill size={25} />
      <span>Home</span>
    </Link>

    <Link 
      href="/about" 
      onClick={() => setIsMenuOpen(false)}
      className="flex items-center gap-4 px-2 py-3 text-gray-900 dark:text-gray-300 hover:bg-blue-500 hover:text-white hover:rounded-lg transition-colors duration-200 border-b dark:border-gray-700"
    >
      <FiUser size={25} />
      <span>About</span>
    </Link>

    <Link 
      href="/project-build" 
      onClick={() => setIsMenuOpen(false)}
      className="flex items-center gap-4 px-2 py-3 text-gray-900 dark:text-gray-300 hover:bg-blue-500 hover:text-white hover:rounded-lg transition-colors duration-200 border-b dark:border-gray-700"
    >
      <FiCode size={25} />
      <span>Projects</span>
    </Link>

    <Link 
      href="/contact" 
      onClick={() => setIsMenuOpen(false)}
      className="flex items-center gap-4 px-2 py-3 text-gray-900 dark:text-gray-300 hover:bg-blue-500 hover:text-white hover:rounded-lg transition-colors duration-200 border-b dark:border-gray-700"
    >
      <FiMail size={25} />
      <span>Contact</span>
    </Link>
  </ul>
)}
        </div>
      </div>
    </nav>
  );
}