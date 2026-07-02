'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small teams',
    features: [
      'Up to 5 dashboards',
      '30-day data retention',
      'Basic integrations',
      'Email support',
      '1 team member',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '79',
    description: 'For growing businesses',
    features: [
      'Unlimited dashboards',
      '1-year data retention',
      'All integrations',
      'Priority support',
      'Up to 10 team members',
      'Custom reports',
      'AI predictions',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Everything in Professional',
      'Unlimited data retention',
      'API access',
      '24/7 phone support',
      'Unlimited team members',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-lg font-semibold mb-4">Simple Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Plans for Every Stage
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(1)}
            >
              <motion.div
                className={`glass-effect rounded-2xl p-8 h-full transition-all duration-300 relative z-10 ${
                  hoveredPlan === index
                    ? 'ring-2 ring-accent'
                    : 'ring-1 ring-white/10'
                }`}
                animate={{
                  y: hoveredPlan === index ? -15 : 0,
                  scale: hoveredPlan === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect for highlighted plan */}
                {plan.highlighted && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-2xl blur -z-10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}

                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-accent to-accent-light text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  <div className="py-4 border-y border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">
                        ${plan.price}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="text-gray-400">/month</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-accent">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-accent to-accent-light text-white hover:shadow-lg hover:shadow-accent/50'
                        : 'glass-effect text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.price === 'Custom'
                      ? 'Contact Sales'
                      : 'Get Started'}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
