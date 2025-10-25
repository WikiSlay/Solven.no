'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Settings, FlaskConical, Rocket } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    icon: Target,
    title: '1. Workshop og mål',
    description: 'Vi kartlegger dine KPI-er, tone of voice og kunnskapsgrunnlag.',
    points: [
      'Kartlegging av KPI-er og mål',
      'Definere tone of voice',
      'Samle FAQ, menyer og vilkår',
    ],
  },
  {
    icon: Settings,
    title: '2. Oppsett og integrasjon',
    description: 'Kobling til CRM, kalender og helpdesk med guardrails og sikkerhet.',
    points: [
      'Integrasjon med CRM og kalender',
      'Sikkerhet og guardrails',
      'Testing av teknisk oppsett',
    ],
  },
  {
    icon: FlaskConical,
    title: '3. Pilot og justering',
    description: 'To til fire uker med A/B-test, måling av effekt og iterasjoner.',
    points: [
      'A/B-testing i 2-4 uker',
      'Måling av løsningsgrad og svartid',
      'Kontinuerlige justeringer',
    ],
  },
  {
    icon: Rocket,
    title: '4. Produksjon og drift',
    description: 'Overvåkning, månedsrapporter og kontinuerlig forbedring.',
    points: [
      'Overvåkning 24/7',
      'Månedlige KPI-rapporter',
      'Kontinuerlig optimalisering',
    ],
  },
];

export default function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="leveranse" ref={containerRef} className="section-padding bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fra idé til <span className="text-brand-orange">produksjon</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vår leveransereise sikrer at løsningen passer dine behov og leverer målbare resultater.
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StepPanel key={index} step={step} index={index} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepPanel({ step, index, Icon }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div className={index % 2 === 1 ? 'md:order-2' : ''}>
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-orange/10 mb-6">
          <Icon className="w-10 h-10 text-brand-orange" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h3>
        <p className="text-xl text-gray-400 mb-6">{step.description}</p>
        <ul className="space-y-3">
          {step.points.map((point: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <span className="text-brand-orange mt-1">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={index % 2 === 1 ? 'md:order-1' : ''}>
        <div className="glass-strong p-8 rounded-2xl">
          <div className="text-6xl font-bold text-brand-orange/20 mb-4">0{index + 1}</div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-orange"
              style={{ scaleX: scrollYProgress }}
              initial={{ scaleX: 0 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
