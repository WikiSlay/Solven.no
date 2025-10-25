'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function ExitIntentCTA() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage > 50 && !showCTA) {
          setShowCTA(true);
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [showCTA]);

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setShowCTA(false);
    }
  };

  return (
    <AnimatePresence>
      {showCTA && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 glass-strong border-t border-white/20 shadow-2xl"
        >
          <div className="container-custom px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">Klar til å komme i gang?</h3>
                <p className="text-sm text-gray-400">
                  Book en demo i dag og se hvordan Solven kan transformere din kundeservice.
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 rounded-lg bg-brand-orange hover:bg-orange-600 text-white font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center gap-2 whitespace-nowrap"
                >
                  Book demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => setShowCTA(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
