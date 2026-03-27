'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { siteConfig } from '@/config/siteData';
import SectionHeading from './SectionHeading';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * Handle form submission.
   *
   * Currently frontend-only. To connect to a backend:
   *
   * Option 1 — Formspree:
   *   Change form action to `https://formspree.io/f/YOUR_ID`
   *   and method="POST"
   *
   * Option 2 — Resend / Server Actions:
   *   Create a server action in `app/actions/contact.ts`
   *   and call it here instead of the setTimeout.
   *
   * Option 3 — API Route:
   *   POST to `/api/contact` and handle in `app/api/contact/route.ts`
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated submission delay — replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phoneClean}`,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: 'from-aqua-500 to-aqua-600',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: siteConfig.address.full,
      href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`,
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon – Sat, 9:00 AM – 6:00 PM',
      href: undefined,
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-aqua-50 rounded-full translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-50 rounded-full -translate-x-1/2 blur-3xl opacity-40" />

      <div className="container-custom relative">
        <SectionHeading
          title="Get in Touch"
          subtitle="Contact Us"
          description="Have questions or want to place an order? We'd love to hear from you. Reach out through any of the channels below."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* ── Left: Contact Info & Map ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.label === 'Address' ? '_blank' : undefined}
                    rel={info.label === 'Address' ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 rounded-2xl">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                    >
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  siteConfig.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-2xl shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <div className="aspect-video bg-gray-100 relative">
                {/*
                  To use Google Maps embed, replace this div with:
                  <iframe
                    src={siteConfig.address.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AquLine location on map"
                  />
                */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-aqua-50 to-blue-50">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-aqua-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 font-medium">
                      {siteConfig.address.city}, {siteConfig.address.state}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Replace with Google Maps embed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-500">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 focus:border-aqua-400 transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 focus:border-aqua-400 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 focus:border-aqua-400 transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 focus:border-aqua-400 transition-all duration-200 text-sm"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Place an Order</option>
                        <option value="bulk">Bulk Order / Distributor</option>
                        <option value="complaint">Complaint / Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirement..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 focus:border-aqua-400 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}