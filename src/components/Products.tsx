'use client';

import { motion } from 'framer-motion';
import { Droplets, ArrowRight } from 'lucide-react';
import { productsData } from '@/config/siteData';
import SectionHeading from './SectionHeading';

export default function Products() {
  return (
    <section
      id="products"
      className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-aqua-100 rounded-full blur-3xl opacity-40" />

      <div className="container-custom relative">
        <SectionHeading
          title="Our Products"
          subtitle="Water for Every Need"
          description="From personal bottles to bulk jars, AquLine offers a complete range of purified drinking water solutions."
        />

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-aqua-200 transition-all duration-500 h-full flex flex-col">
                {/* Product Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aqua-100 to-aqua-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="w-7 h-7 text-aqua-600" />
                </div>

                {/* Size */}
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {product.name}
                </div>
                <div className="text-sm font-medium text-aqua-600 mb-4">
                  {product.subtitle}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                {/* Use cases */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-aqua-50 text-aqua-700 border border-aqua-100"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-aqua-600 hover:text-aqua-700 group/link"
                >
                  Order Now
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>

                {/* Hover gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-aqua-400 to-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}