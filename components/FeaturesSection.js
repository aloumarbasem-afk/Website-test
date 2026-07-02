'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const features = [
  {
    title: 'Real-Time Analytics',
    description: 'Monitor your metrics as they happen with our live dashboard and instant alerts.',
    icon: '📊',
    gradient: 'from-blue-500/30 to-purple-500/30',
  },
  {
    title: 'AI Predictions',
    description: 'Leverage machine learning to forecast trends and optimize your strategy.',
    icon: '🤖',
    gradient: 'from-purple-500/30 to-pink-500/30',
  },
  {
    title: 'Smart Insights',
    description: 'Get actionable recommendations powered by advanced AI algorithms.',
    icon: '💡',
    gradient: 'from-pink-500/30 to-orange-500/30',
  },
  {
    title: 'Data Integration',
    description: 'Connect any data source effortlessly with our universal connectors.',
    icon: '🔗',
    gradient: 'from-orange-500/30 to-yellow-500/30',
  },
  {
    title: 'Custom Reports',
    description: 'Generate tailored reports that match your exact business needs.',
    icon: '📈',
    gradient: 'from-yellow-500/30 to-green-500/30',
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade encryption and compliance with industry standards.',
    icon: '🔒',
    gradient: 'from-green-500/30 to-blue-500/30',
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
          <p className="text-accent text-lg font-semibold mb-4">Powerful Features</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Everything You Need to Succeed
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className={`card-3d glass-effect rounded-xl p-6 h-full transition-all duration-300 ${
                  hoveredIndex === index ? 'border-accent/50' : 'border-white/10'
                }`}
                animate={{
                  y: hoveredIndex === index ? -10 : 0,
                  scale: hoveredIndex === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0.95,
                  }}
                />

                <div className="relative z-10 space-y-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-accent pt-2"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{
                      x: hoveredIndex === index ? 5 : -10,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Learn more</span>
                    <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
