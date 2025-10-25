'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

interface KPICounterProps {
  icon: ReactNode;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function KPICounter({ icon, value, prefix = '', suffix = '', label }: KPICounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const element = ref.current as HTMLElement;
        const counter = element.querySelector('.counter-value');
        if (counter) {
          counter.textContent = Math.round(latest).toString();
        }
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 hover-lift"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
          {prefix}<span className="counter-value">0</span>{suffix}
        </div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </motion.div>
  );
}
