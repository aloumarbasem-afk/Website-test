'use client';

import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ to, suffix = '', prefix = '', decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return controls.stop;
  }, [inView, to, mv, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { to: 12, suffix: 'M+', label: 'Events processed daily', decimals: 0 },
  { to: 99.99, suffix: '%', label: 'Uptime SLA', decimals: 2 },
  { to: 4200, suffix: '+', label: 'Teams onboarded', decimals: 0, prefix: '' },
  { to: 60, suffix: 'ms', label: 'Median query latency', prefix: '<', decimals: 0 },
];

export default function StatsBand() {
  return (
    <section className="relative z-10 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="glass-effect rounded-2xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter
                  to={s.to}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  decimals={s.decimals}
                />
              </div>
              <p className="text-gray-400 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
