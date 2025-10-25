'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { useRef } from 'react';
import KPICounter from './KPICounter';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,0,0.1),transparent_50%)]" />
      </motion.div>

      <div className="container-custom px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient">{siteConfig.hero.title}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="px-8 py-4 rounded-lg bg-brand-orange hover:bg-orange-600 text-white font-semibold text-lg transition-all duration-200 hover:scale-105 focus-ring inline-flex items-center gap-2 group"
            >
              {siteConfig.cta.primary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection('pakker')}
              className="px-8 py-4 rounded-lg glass hover:glass-strong text-white font-semibold text-lg transition-all duration-200 hover:scale-105 focus-ring"
            >
              {siteConfig.cta.secondary}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <KPICounter
              icon={<Clock className="w-8 h-8 text-brand-orange" />}
              value={5}
              suffix="s"
              prefix="<"
              label="Svar på første henv."
            />
            <KPICounter
              icon={<TrendingUp className="w-8 h-8 text-brand-orange" />}
              value={40}
              suffix="%"
              prefix="+"
              label="Høyere løsningsgrad"
            />
            <KPICounter
              icon={<Zap className="w-8 h-8 text-brand-orange" />}
              value={24}
              suffix="/7"
              prefix=""
              label="Alltid tilgjengelig"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
