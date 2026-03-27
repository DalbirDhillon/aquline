'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Droplets, Shield, Award } from 'lucide-react';
import { siteConfig } from '@/config/siteData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0">
        {/* Gradient background (replaces image if not available) */}
        <div className="absolute inset-0 bg-gradient-to-br from-aqua-950 via-brand-900 to-aqua-900" />

        {/* Decorative water circles */}
        <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full bg-aqua-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-brand-500/10 blur-3xl" />

        {/* Animated floating bubbles */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-aqua-400/30"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-aqua-300/20"
        />
        <motion.div
          animate={{ y: [-15, 25, -15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-white/20"
        />
        <motion.div
          animate={{ y: [10, -30, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/6 w-5 h-5 rounded-full bg-aqua-200/15"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-aqua-950/80 via-transparent to-aqua-950/40" />
      </div>

      {/* ── Content ── */}
      <div className="relative container-custom px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Shield className="w-4 h-4 text-aqua-300" />
              <span className="text-sm text-aqua-100 font-medium">
                FSSAI Certified & Quality Tested
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Pure Water,
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-aqua-300 via-aqua-200 to-blue-300">
                Pure Life.
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-aqua-100/80 max-w-lg mb-4 leading-relaxed">
              {siteConfig.tagline}
            </p>

            <p className="text-base md:text-lg text-aqua-100/60 max-w-lg mb-10 leading-relaxed">
              Premium packaged drinking water crafted with advanced purification
              technology. Every drop is tested, every bottle is sealed with trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#products" className="btn-primary">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary !bg-white/10 !text-white !border-white/20 hover:!bg-white/20">
                <Play className="w-4 h-4" />
                Get in Touch
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Droplets, label: 'Multi-Stage Purified' },
                { icon: Shield, label: 'FSSAI Certified' },
                { icon: Award, label: 'Quality Assured' },
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <badge.icon className="w-4 h-4 text-aqua-400" />
                  <span className="text-sm text-aqua-200/70">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Decorative Water Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Large water droplet shape */}
            <div className="relative">
              <motion.div
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                    '30% 60% 70% 40% / 50% 60% 30% 60%',
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-aqua-400/30 via-aqua-300/20 to-brand-400/30 backdrop-blur-3xl border border-white/10"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <Droplets className="w-24 h-24 text-white/40" />
                </div>
              </motion.div>

              {/* Floating stats cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 glass-card !bg-white/10 !border-white/20 px-5 py-3"
              >
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-xs text-aqua-200">Bottles/Day</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-6 glass-card !bg-white/10 !border-white/20 px-5 py-3"
              >
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-aqua-200">Pure & Safe</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}