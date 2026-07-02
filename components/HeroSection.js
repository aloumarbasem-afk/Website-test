'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// Live-updating bar chart that keeps the mockup feeling alive
function LiveChart() {
  const [bars, setBars] = useState([40, 62, 48, 70, 55, 82, 66]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setBars((prev) => {
        const next = prev.slice(1);
        const last = prev[prev.length - 1];
        const delta = (Math.sin(Date.now() / 900) * 25) + (last > 60 ? -8 : 8);
        next.push(Math.max(25, Math.min(95, last + delta)));
        return next;
      });
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-end gap-1.5 h-24">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-gradient-to-t from-accent to-accent-light rounded-t-sm"
          animate={{ height: `${h}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-28 pb-20 relative z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <motion.div variants={itemVariants} className="space-y-7">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-1.5 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-300">
                New: AI anomaly detection is live
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              <motion.span className="gradient-text block" variants={itemVariants}>
                Transform your data
              </motion.span>
              <motion.span className="block" variants={itemVariants}>
                into intelligence
              </motion.span>
            </h1>

            <motion.p
              className="text-gray-300 text-lg max-w-md leading-relaxed"
              variants={itemVariants}
            >
              Nexus turns raw events into real-time, predictive dashboards — with
              sub-second alerts and insights your whole team can read. No SQL
              required.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 pt-2" variants={itemVariants}>
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-shadow"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Start free trial
              </motion.button>
              <motion.button
                className="px-8 py-3 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Watch demo
              </motion.button>
            </motion.div>

            <motion.p className="text-sm text-gray-500" variants={itemVariants}>
              14-day free trial · No credit card required
            </motion.p>
          </motion.div>

          {/* Right side - Floating Dashboard */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-2xl blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <motion.div
              className="relative w-full max-w-sm glass-effect rounded-2xl p-6 overflow-hidden shadow-2xl"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold">Revenue Analytics</h3>
                    <p className="text-xs text-gray-500">Live · updated just now</p>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-400/80 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-yellow-400/80 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-green-400/80 rounded-full" />
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-4">
                  <LiveChart />
                  <p className="text-xs text-gray-500 mt-3">
                    Real-time throughput (events/sec)
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-xs text-gray-500">Model accuracy</p>
                    <p className="text-lg font-bold text-accent-light">98.5%</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-xs text-gray-500">Query latency</p>
                    <p className="text-lg font-bold text-accent-light">&lt;60ms</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
