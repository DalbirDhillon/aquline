'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TestTube, Package, Award } from 'lucide-react';
import { certificationsData } from '@/config/siteData';
import SectionHeading from './SectionHeading';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  TestTube,
  Package,
  Award,
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-aqua-50 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

      <div className="container-custom relative">
        <SectionHeading
          title="Certifications & Standards"
          subtitle="Trust & Quality"
          description="AquLine water meets and exceeds national standards for packaged drinking water safety."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || ShieldCheck;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group text-center"
              >
                <div className="p-8 rounded-3xl bg-gradient-to-b from-aqua-50/80 to-white border border-aqua-100/50 hover:border-aqua-300 hover:shadow-lg hover:shadow-aqua-100/50 transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-aqua-500 to-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-aqua-500/20">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}