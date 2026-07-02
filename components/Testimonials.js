'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Nexus replaced three separate tools for us. We shipped our first predictive dashboard in an afternoon — something that used to take a quarter.',
    name: 'Priya Nair',
    role: 'VP Data, Northwind',
    initials: 'PN',
  },
  {
    quote:
      'The real-time layer is genuinely real-time. Alerts fire in under a second and the anomaly detection has caught issues before our on-call did.',
    name: 'Marcus Feld',
    role: 'Staff Engineer, Vertex',
    initials: 'MF',
  },
  {
    quote:
      'Onboarding was the smoothest I have seen for an analytics platform. Our whole team was productive on day one, no SQL required.',
    name: 'Sofia Alvarez',
    role: 'Head of Growth, Lumen Labs',
    initials: 'SA',
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-lg font-semibold mb-3">Loved by teams</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Don&apos;t just take our word for it
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              className="glass-effect rounded-2xl p-7 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="text-accent-light text-4xl leading-none">&ldquo;</div>
              <blockquote className="text-gray-200 leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
