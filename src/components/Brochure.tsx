'use client';

import { motion } from 'framer-motion';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteData';

export default function Brochure() {
  return (
    <section className="section-padding bg-gradient-to-r from-aqua-600 via-brand-600 to-aqua-700 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-white/10"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full bg-white/10"
        />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
                <FileText className="w-4 h-4 text-aqua-100" />
                <span className="text-sm text-white/90 font-medium">
                  Business Brochure
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Download Our
                <br />
                <span className="text-aqua-200">Company Brochure</span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                Get detailed information about our products, manufacturing
                process, certifications, and pricing. Perfect for distributors,
                retailers, and bulk buyers.
              </p>

              {/* Download Button */}
              <a
                href={siteConfig.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-aqua-700 font-bold rounded-full shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Brochure (PDF)
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Right: Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                {/* Brochure visual placeholder */}
                <div className="w-56 h-72 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center p-6 shadow-2xl">
                  <div className="w-full h-3 bg-white/20 rounded-full mb-3" />
                  <div className="w-3/4 h-3 bg-white/15 rounded-full mb-6" />
                  <FileText className="w-16 h-16 text-white/30 mb-4" />
                  <div className="w-full h-2 bg-white/10 rounded-full mb-2" />
                  <div className="w-full h-2 bg-white/10 rounded-full mb-2" />
                  <div className="w-3/4 h-2 bg-white/10 rounded-full mb-4" />
                  <div className="w-full h-2 bg-white/10 rounded-full mb-2" />
                  <div className="w-5/6 h-2 bg-white/10 rounded-full" />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-6 px-4 py-2 rounded-xl bg-white shadow-lg"
                >
                  <span className="text-xs font-bold text-aqua-600">PDF</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}