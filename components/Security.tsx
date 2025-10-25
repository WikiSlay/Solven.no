'use client';

import { motion, useInView } from 'framer-motion';
import { Lock, Eye, FileCheck, Server } from 'lucide-react';
import { useRef } from 'react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Kontroller',
    items: ['MFA', 'Rollestyring', 'Nøkkelrotasjon', 'Revisjonsspor'],
  },
  {
    icon: FileCheck,
    title: 'DPA og GDPR',
    items: ['Data Processing Agreement', 'GDPR-compliance', 'SCC ved behov'],
  },
  {
    icon: Eye,
    title: 'Synlighet',
    items: ['Dashboards', 'Svartid-tracking', 'Løsningsgrad', 'CSAT-måling'],
  },
];

const securityOverview = [
  'Kryptering i transitt og hviletilstand',
  'Revisjonsspor for alle endringer',
  'Samtykke for opptak og chatlogg',
  'Automatiske backups og beredskapsplan',
  'GDPR-compliance med DPA',
  'ISO 27001-aligned prosesser',
];

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sikkerhet" className="section-padding bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-brand-orange">Sikkerhet</span> og etterlevelse
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vi tar data på alvor: kryptering, tilgangsstyring, revisjonsspor og DPA.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 gap-8">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-orange/10">
                        <Icon className="w-6 h-6 text-brand-orange" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {feature.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full glass text-sm text-gray-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-8 h-8 text-brand-orange" />
              <h3 className="text-2xl font-bold">Sikkerhetsoversikt</h3>
            </div>
            <ul className="space-y-4">
              {securityOverview.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">✓</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
