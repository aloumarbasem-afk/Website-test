'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    q: 'How long does it take to get set up?',
    a: 'Most teams are live within minutes. Connect a data source with one of our native connectors, pick a template dashboard, and you are running. No SQL or engineering time required to start.',
  },
  {
    q: 'Where does my data live?',
    a: 'Your data stays in your warehouse. Nexus queries it in place with a secure, read-only connection — we never copy or store raw records. Everything is encrypted in transit and at rest.',
  },
  {
    q: 'Can I try it before committing?',
    a: 'Yes. Every plan starts with a 14-day free trial with full access to features — no credit card required. You can cancel or switch plans at any time.',
  },
  {
    q: 'Do you support enterprise SSO and compliance?',
    a: 'The Enterprise plan includes SAML/SSO, SCIM provisioning, audit logs, and a signed SLA. We are SOC 2 Type II compliant and can support custom data residency requirements.',
  },
];

function Item({ faq, isOpen, onToggle }) {
  return (
    <div className="glass-effect rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-accent-light text-2xl leading-none shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-gray-300 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-lg font-semibold mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Questions, answered
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Item
              key={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
