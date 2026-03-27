'use client';

import { motion } from 'framer-motion';
import { Target, Eye, MapPin, Users } from 'lucide-react';
import { aboutData, siteConfig } from '@/config/siteData';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aqua-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-40" />

      <div className="container-custom relative">
        <SectionHeading
          title={aboutData.title}
          subtitle={aboutData.subtitle}
          description="Delivering purity in every drop since day one."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Description paragraphs */}
            {aboutData.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 leading-relaxed text-base md:text-lg">
                {paragraph}
              </p>
            ))}

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-aqua-50 to-transparent border border-aqua-100">
                <Target className="w-8 h-8 text-aqua-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {aboutData.mission}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-transparent border border-brand-100">
                <Eye className="w-8 h-8 text-brand-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {aboutData.vision}
                </p>
              </div>
            </div>

            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
              <MapPin className="w-4 h-4 text-aqua-600" />
              <span>
                {siteConfig.address.city}, {siteConfig.address.state}
              </span>
            </div>
          </motion.div>

          {/* Right: Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Image placeholder */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-aqua-100 to-aqua-200 aspect-[4/3] flex items-center justify-center">
              {/* Replace with actual image: */}
              {/* <Image src="/images/about.jpg" alt="AquLine facility" fill className="object-cover" /> */}
              <div className="text-center p-8">
                <Users className="w-16 h-16 text-aqua-500 mx-auto mb-4" />
                <p className="text-aqua-700 font-medium">
                  Place your about image at
                  <br />
                  <code className="text-sm bg-aqua-300/30 px-2 py-1 rounded">
                    /public/images/about.jpg
                  </code>
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}