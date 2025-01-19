'use client';

import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { ThemeToggle } from '../themes/theme-toggle';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="top-0 w-full border-b border-gray-800 bg-black/70 backdrop-blur-md z-[9999]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and primary nav */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* You can replace this with your own logo */}
              <span className="text-xl font-semibold text-white">AJ</span>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-6">
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
                </Link>
                <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                Projects
                </Link>
                <Link href="/resume" className="text-sm text-gray-400 hover:text-white transition-colors">
                Resume
                </Link>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
                </Link>
                <Link href="/this-website" className="text-sm text-gray-400 hover:text-white transition-colors">
                This Website
                </Link>
            </div>
          </div>

          {/* Right side navigation items */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/ajj132"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-md">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/about"
              className="block py-2 text-base text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block py-2 text-base text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-base text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;