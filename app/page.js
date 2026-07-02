'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Spotlight from '@/components/Spotlight';
import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/HeroSection';
import LogoMarquee from '@/components/LogoMarquee';
import StatsBand from '@/components/StatsBand';
import FeaturesSection from '@/components/FeaturesSection';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.06)" />
        <path
          d="M9 22V10l14 12V10"
          fill="none"
          stroke="url(#logoGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-bold gradient-text">Nexus</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-dark">
      <ScrollProgress />
      <ParticleBackground />
      <Spotlight />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/50 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.a href="#top" whileHover={{ scale: 1.04 }}>
            <Logo />
          </motion.a>

          <div className="flex gap-8 items-center max-md:hidden">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Customers
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-shadow">
              Sign in
            </button>
          </div>

          <div className="md:hidden">
            <a
              href="#pricing"
              className="px-4 py-2 text-sm bg-gradient-to-r from-accent to-accent-light text-white rounded-lg"
            >
              Try free
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Main content */}
      <main id="top" className="relative z-10">
        <HeroSection />

        <LogoMarquee />

        <StatsBand />

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        {/* CTA Section */}
        <motion.section
          className="px-4 py-28 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="glass-effect rounded-3xl px-8 py-16 relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="gradient-text">Ready to transform</span>
                  <span className="block">your data strategy?</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-xl mx-auto">
                  Join thousands of teams using Nexus to unlock the intelligence
                  hiding in their data. Start your free trial today.
                </p>
                <div className="flex gap-4 justify-center flex-wrap pt-2">
                  <motion.button
                    className="px-10 py-4 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-accent/50 transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Start free trial
                  </motion.button>
                  <motion.button
                    className="px-10 py-4 glass-effect text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Talk to sales
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo />
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Nexus Analytics
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
