'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <motion.p
                className="text-accent text-lg font-semibold"
                variants={itemVariants}
              >
                AI-Powered Analytics Platform
              </motion.p>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <motion.span
                  className="gradient-text"
                  variants={itemVariants}
                >
                  Transform Your Data
                </motion.span>
                <motion.span className="block" variants={itemVariants}>
                  Into Intelligence
                </motion.span>
              </h1>

              <motion.p
                className="text-gray-300 text-lg"
                variants={itemVariants}
              >
                Harness the power of artificial intelligence to unlock actionable insights from your data. Real-time analytics, predictive modeling, and intelligent dashboards.
              </motion.p>
            </div>

            <motion.div
              className="flex gap-4 pt-4"
              variants={itemVariants}
            >
              <button className="px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-shadow">
                Get Started
              </button>
              <button className="px-8 py-3 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Floating Dashboard */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-2xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="relative w-full max-w-sm glass-effect rounded-xl p-6 overflow-hidden"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <div className="space-y-4">
                {/* Mock dashboard header */}
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-semibold">Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Mock chart */}
                <div className="bg-black/30 rounded-lg p-4 space-y-2">
                  <div className="flex items-end gap-1 h-20">
                    {[40, 60, 45, 70, 55, 80, 65].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-accent to-accent-light rounded-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          delay: i * 0.1,
                          duration: 1,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Real-time data visualization</p>
                </div>

                {/* Mock stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/30 rounded p-3">
                    <p className="text-xs text-gray-400">Accuracy</p>
                    <p className="text-lg font-bold text-accent-light">98.5%</p>
                  </div>
                  <div className="bg-black/30 rounded p-3">
                    <p className="text-xs text-gray-400">Speed</p>
                    <p className="text-lg font-bold text-accent-light">&lt;100ms</p>
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
