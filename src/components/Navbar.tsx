'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Droplets, Phone } from 'lucide-react';
import { navLinks, siteConfig } from '@/config/siteData';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ── Track scroll for sticky navbar styling ──
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Close mobile menu on link click ──
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-2 group">
          <div
            className={cn(
              'flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300',
              scrolled
                ? 'bg-gradient-to-br from-aqua-500 to-brand-600'
                : 'bg-white/20 backdrop-blur-sm'
            )}
          >
            <Droplets
              className={cn(
                'w-5 h-5 transition-colors duration-300',
                scrolled ? 'text-white' : 'text-white'
              )}
            />
          </div>
          <div>
            <span
              className={cn(
                'text-xl font-bold tracking-tight transition-colors duration-300',
                scrolled ? 'text-gray-900' : 'text-white'
              )}
            >
              Aqu<span className="text-aqua-400">Line</span>
            </span>
          </div>
        </a>

        {/* ── Desktop Navigation ── */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                  scrolled
                    ? 'text-gray-600 hover:text-aqua-600 hover:bg-aqua-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneClean}`}
            className={cn(
              'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
              scrolled
                ? 'bg-gradient-to-r from-aqua-600 to-brand-600 text-white shadow-md hover:shadow-lg'
                : 'bg-white text-aqua-700 hover:bg-white/90'
            )}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* ── Mobile Menu Button ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300',
            scrolled
              ? 'text-gray-700 hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="container-custom px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:text-aqua-600 hover:bg-aqua-50 font-medium transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="btn-primary w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}