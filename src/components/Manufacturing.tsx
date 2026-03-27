'use client';

import { motion } from 'framer-motion';
import {
  Droplets,
  Filter,
  Waves,
  Sun,
  Zap,
  FlaskConical,
  PackageCheck,
  Truck,
} from 'lucide-react';
import { manufacturingSteps } from '@/config/siteData';
import SectionHeading from './SectionHeading';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Droplets,
  Filter,
  Waves,
  Sun,
  Zap,
  FlaskConical,
  PackageCheck,
  Truck,
};

export default function Manufacturing() {
  return (
    <section
      id="manufacturing"
      className="section-padding bg-gradient-to-br from-aqua-950 via-brand-950 to-aqua-900 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aqua-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-800/20 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <SectionHeading
          title="Our Manufacturing Process"
          subtitle="State-of-the-Art Facility"
          description="A rigorous 8-step purification process ensures every bottle of AquLine water meets the highest quality standards."
          light
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-aqua-400/0 via-aqua-400/40 to-aqua-400/0" />

          <div className="space-y-8 lg:space-y-0">
            {manufacturingSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || Droplets;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="relative lg:py-6"
                >
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left content */}
                    <div
                      className={`${
                        isLeft ? 'text-right pr-16' : 'order-2 pl-16'
                      }`}
                    >
                      <div
                        className={`inline-flex flex-col ${
                          isLeft ? 'items-end' : 'items-start'
                        }`}
                      >
                        <span className="text-xs font-bold text-aqua-400 tracking-widest uppercase mb-2">
                          Step {step.step}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Right spacer / icon on line */}
                    <div className={`${isLeft ? 'order-2' : ''}`} />

                    {/* Center node */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-aqua-500 to-brand-600 flex items-center justify-center shadow-lg shadow-aqua-500/30 border-4 border-aqua-950">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-aqua-500 to-brand-600 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pb-6 border-l-2 border-aqua-800/40 pl-6 ml-[-1px] relative">
                      <div className="absolute left-0 top-4 w-2 h-2 rounded-full bg-aqua-400 -translate-x-[5px]" />
                      <span className="text-xs font-bold text-aqua-400 tracking-widest uppercase">
                        Step {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}