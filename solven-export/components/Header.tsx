'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '@/lib/config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBookDemo = () => {
    scrollToSection('kontakt');
  };

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-brand-orange">Solven</span>{' '}
              <span className="text-white">Solutions</span>
            </span>
            <span className="hidden md:inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">
              Live demo klar
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hvorfor')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Hvorfor
            </button>
            <button
              onClick={() => scrollToSection('leveranse')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Leveranse
            </button>
            <button
              onClick={() => scrollToSection('pakker')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Pakker
            </button>
            <button
              onClick={() => scrollToSection('sikkerhet')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Sikkerhet
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Kontakt
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleBookDemo}
              className="hidden md:inline-block px-6 py-2.5 rounded-lg bg-brand-orange hover:bg-orange-600 text-white font-medium transition-all duration-200 hover:scale-105 focus-ring"
            >
              {siteConfig.cta.primary}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
