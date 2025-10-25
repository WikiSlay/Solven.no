'use client';

import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { siteConfig } from '@/lib/config';

const packages = [
  {
    name: 'Start',
    price: '5 000',
    period: '/mnd',
    description: 'Perfekt for å komme i gang',
    note: 'De første 6 månedene',
    features: [
      'Onboarding og oppsett',
      'Én AI-agent',
      'Månedlig rapport',
      'E-post support',
      'Grunnleggende integrasjoner',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '15 000',
    period: '/mnd',
    description: 'For seriøse virksomheter',
    features: [
      'Alt i Start, pluss:',
      '2-3 AI-agenter',
      'CRM og kalender-integrasjon',
      'KPI-dashboard',
      'Prioritert support',
      'Ukentlig rapport',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Pris på forespørsel',
    period: '',
    description: 'Skreddersydd for dine behov',
    features: [
      'Alt i Pro, pluss:',
      'Ubegrenset antall agenter',
      'Dedikert Customer Success Manager',
      'DPA og compliance',
      'Prioritetssupport 24/7',
      'Custom SLA',
    ],
    highlighted: false,
  },
];

export default function Packages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pakker" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Velg <span className="text-brand-orange">pakken</span> som passer
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent prising tilpasset din virksomhets størrelse og behov.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 ${
                pkg.highlighted
                  ? 'glass-strong border-2 border-brand-orange shadow-2xl shadow-brand-orange/20 hover-lift'
                  : 'glass hover:glass-strong'
              } transition-all duration-300`}
            >
              {pkg.highlighted && (
                <div className="inline-block px-4 py-1 rounded-full bg-brand-orange text-white text-sm font-semibold mb-4">
                  Mest populær
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-gray-400 mb-6">{pkg.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-bold">{pkg.price}</span>
                <span className="text-gray-400">{pkg.period}</span>
                {pkg.note && (
                  <p className="text-sm text-gray-500 mt-2">{pkg.note}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  pkg.highlighted
                    ? 'bg-brand-orange hover:bg-orange-600 text-white'
                    : 'glass hover:glass-strong text-white'
                } inline-flex items-center justify-center gap-2 group`}
              >
                {siteConfig.cta.contact}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-6 rounded-xl max-w-4xl mx-auto"
        >
          <p className="text-sm text-gray-400 text-center leading-relaxed">
            <strong className="text-brand-orange">Viktig:</strong> Alle priser er eksempler for illustrasjon. 
            Endelig pris avhenger av omfang, integrasjoner, trafikkvolum og SLA. 
            Bindende pris fremgår av signert ordre.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
