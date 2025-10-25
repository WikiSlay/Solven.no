'use client';

import { motion, useInView } from 'framer-motion';
import { Shield, Award, Lock, CheckCircle } from 'lucide-react';
import { useRef } from 'react';

const badges = [
  { icon: Shield, label: 'GDPR Compliant' },
  { icon: Award, label: 'ISO 27001 Aligned' },
  { icon: Lock, label: 'End-to-end kryptering' },
  { icon: CheckCircle, label: 'SOC 2 Type II' },
];

export default function TrustBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900/20 to-black">
      <div className="container-custom px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-6">
            Klarert av ledende norske bedrifter
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center hover:glass-strong transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-brand-orange mb-3" />
                <span className="text-sm text-gray-300">{badge.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
