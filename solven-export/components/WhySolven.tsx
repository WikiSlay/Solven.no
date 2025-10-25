'use client';

import { motion, useInView } from 'framer-motion';
import { Zap, Brain, Shield } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Raskere respons',
    description: 'Under fem sekunder svar, selv i travle perioder. Kundene dine slipper å vente.',
  },
  {
    icon: Brain,
    title: 'Smartere svar',
    description: 'Trent på din kunnskapsbase, FAQ og menyer. Gir presise svar med din tone.',
  },
  {
    icon: Shield,
    title: 'Trygghet og GDPR',
    description: 'DPA, logging, MFA og kontroller. Vi tar datasikkerhet på alvor.',
  },
];

export default function WhySolven() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hvorfor" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hvorfor <span className="text-brand-orange">Solven</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vi kombinerer AI-teknologi med bransjekunnskap for å levere kundeservice som faktisk fungerer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:glass-strong transition-all duration-300 hover-lift group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-orange/10 mb-6 group-hover:bg-brand-orange/20 transition-colors">
                  <Icon className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
