'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description?: string;
  light?: boolean; // For dark background sections
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {/* Eyebrow */}
      <span
        className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
          light ? 'text-aqua-300' : 'text-aqua-600'
        }`}
      >
        {subtitle}
      </span>

      {/* Title */}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>

      {/* Decorative Line */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className={`h-px w-12 ${light ? 'bg-aqua-400' : 'bg-aqua-300'}`} />
        <div
          className={`h-2 w-2 rounded-full ${light ? 'bg-aqua-400' : 'bg-aqua-500'}`}
        />
        <div className={`h-px w-12 ${light ? 'bg-aqua-400' : 'bg-aqua-300'}`} />
      </div>

      {/* Description */}
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}