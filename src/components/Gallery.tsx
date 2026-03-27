'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera } from 'lucide-react';
import { galleryImages } from '@/config/siteData';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 w-72 h-72 bg-aqua-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />

      <div className="container-custom relative">
        <SectionHeading
          title="Gallery"
          subtitle="Inside AquLine"
          description="Take a look at our state-of-the-art manufacturing facility, products, and operations."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              {/* Image placeholder - Replace with actual images */}
              <div
                className={`bg-gradient-to-br from-aqua-100 via-aqua-50 to-brand-50 flex items-center justify-center ${
                  index === 0
                    ? 'aspect-square md:aspect-auto md:h-full min-h-[200px]'
                    : 'aspect-square'
                }`}
              >
                {/*
                  Replace this div with:
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                */}
                <div className="text-center p-4">
                  <Camera className="w-8 h-8 text-aqua-400 mx-auto mb-2" />
                  <p className="text-xs text-aqua-600 font-medium">{image.alt}</p>
                  <p className="text-[10px] text-aqua-400 mt-1">
                    Place image at: {image.src}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-aqua-900/80 via-aqua-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 md:p-6">
                <div className="flex items-center justify-between w-full">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-aqua-200 to-aqua-100 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/*
                Replace with:
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              */}
              <div className="text-center p-8">
                <Camera className="w-16 h-16 text-aqua-400 mx-auto mb-4" />
                <p className="text-aqua-700 font-semibold text-lg">
                  {galleryImages[selectedImage].alt}
                </p>
                <p className="text-aqua-500 text-sm mt-2">
                  {galleryImages[selectedImage].src}
                </p>
              </div>
            </motion.div>

            {/* Navigation hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              Click outside to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}