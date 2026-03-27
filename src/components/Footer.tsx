'use client';

import { Droplets, ArrowUpRight, Heart } from 'lucide-react';
import { siteConfig, footerLinks, navLinks } from '@/config/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-aqua-500 via-brand-500 to-aqua-400" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-aqua-600/5 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aqua-500 to-brand-600 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Aqu<span className="text-aqua-400">Line</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Premium packaged drinking water from Rewari, Haryana. Purified
              with advanced technology for the safety and health of your family.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-aqua-600 flex items-center justify-center transition-all duration-300 group"
                  aria-label={`Follow us on ${platform}`}
                >
                  <span className="text-xs font-bold text-gray-400 group-hover:text-white uppercase">
                    {platform.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-aqua-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-aqua-400 transition-colors duration-200 flex items-center gap-1 group"
                    target={link.href.startsWith('/docs') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('/docs')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Quick Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="hover:text-aqua-400 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-aqua-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="leading-relaxed">{siteConfig.address.full}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            in {siteConfig.address.city}, {siteConfig.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}