'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-dark">
      {/* Particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/50 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Nexus
          </motion.div>

          <div className="flex gap-8 items-center max-md:hidden">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-shadow">
              Sign In
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-white">☰</button>
          </div>
        </div>
      </motion.nav>

      {/* Main content */}
      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section id="features">
          <FeaturesSection />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <PricingSection />
        </section>

        {/* CTA Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl w-full text-center space-y-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold">
                <span className="gradient-text">Ready to transform</span>
                <span className="block">your data strategy?</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Join thousands of companies using Nexus to unlock their data potential.
                Start your free trial today.
              </p>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-accent/50 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="px-10 py-4 glass-effect text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="border-t border-white/10 py-12 px-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>&copy; 2024 Nexus Analytics. All rights reserved.</p>
            <div className="flex gap-6 justify-center mt-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
