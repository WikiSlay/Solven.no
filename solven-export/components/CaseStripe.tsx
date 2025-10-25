'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { useRef } from 'react';

const cases = [
  {
    industry: 'Restaurant',
    metrics: [
      { label: 'Svartid', before: '120s', after: '4s', improvement: '-97%' },
      { label: 'Løsningsgrad', before: '45%', after: '78%', improvement: '+73%' },
      { label: 'CSAT', before: '3.2/5', after: '4.6/5', improvement: '+44%' },
    ],
  },
  {
    industry: 'Rørlegger',
    metrics: [
      { label: 'Svartid', before: '180s', after: '5s', improvement: '-97%' },
      { label: 'Løsningsgrad', before: '38%', after: '72%', improvement: '+89%' },
      { label: 'Kostnader per henvendelse', before: '42kr', after: '8kr', improvement: '-81%' },
    ],
  },
];

export default function CaseStripe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dokumenterte <span className="text-brand-orange">resultater</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Se hvordan våre kunder har transformert sin kundeservice med målbare forbedringer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-8 rounded-2xl"
            >
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Yrke:</div>
                <h3 className="text-2xl font-bold">{caseItem.industry}</h3>
              </div>

              <div className="space-y-6">
                {caseItem.metrics.map((metric, i) => (
                  <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                    <div className="text-sm text-gray-400 mb-3">{metric.label}</div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-red-400 text-sm">FØR:</span>
                        <span className="text-2xl font-semibold text-gray-300">{metric.before}</span>
                      </div>
                      <ArrowDown className="w-5 h-5 text-brand-orange" />
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 text-sm">ETTER:</span>
                        <span className="text-2xl font-semibold text-white">{metric.after}</span>
                      </div>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-medium">
                      <ArrowUp className="w-4 h-4" />
                      {metric.improvement}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Tallene er anonymiserte eksempler for illustrasjon. Faktiske resultater varierer.
          </p>
        </div>
      </div>
    </section>
  );
}
