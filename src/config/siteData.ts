/**
 * ═══════════════════════════════════════════════════════
 * AQULINE SITE CONFIGURATION
 * ═══════════════════════════════════════════════════════
 *
 * Edit ALL your business details here in one place.
 * Every component reads from this file, so you only
 * need to change things once.
 */

export const siteConfig = {
  // ── Brand ──
  name: 'AquLine',
  tagline: 'Fresh. Pure. Safe.',
  description:
    'AquLine delivers premium packaged drinking water that meets the highest safety and purity standards. Based in Rewari, Haryana, we are committed to providing clean, safe drinking water to every household and business.',
  url: 'https://aquline.in', // Change to your actual domain
  ogImage: '/images/og-image.jpg',

  // ── Contact Details ──
  phone: '+91 98XXX XXXXX', // Replace with actual phone
  phoneClean: '9198XXXXXXXX', // For tel: links (no spaces/dashes)
  email: 'info@aquline.in',
  whatsapp: '919800000000', // WhatsApp number without + sign
  whatsappMessage: 'Hi AquLine! I would like to inquire about your packaged drinking water products.',

  // ── Address ──
  address: {
    line1: 'AquLine Water Pvt. Ltd.',
    line2: 'Industrial Area, Phase-II',
    city: 'Rewari',
    state: 'Haryana',
    pin: '123401',
    country: 'India',
    full: 'AquLine Water Pvt. Ltd., Industrial Area, Phase-II, Rewari, Haryana 123401',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.123!2d76.6194!3d28.1970!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRewari%2C+Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },

  // ── Social Media Links ──
  social: {
    facebook: 'https://facebook.com/aquline',
    instagram: 'https://instagram.com/aquline',
    twitter: 'https://twitter.com/aquline',
    linkedin: 'https://linkedin.com/company/aquline',
    youtube: 'https://youtube.com/@aquline',
  },

  // ── Brochure ──
  brochureUrl: '/docs/brochure.pdf',
};

// ── Navigation Links ──
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Plant', href: '#manufacturing' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

// ── About Section ──
export const aboutData = {
  title: 'About AquLine',
  subtitle: 'Purity You Can Trust',
  description: `AquLine is a premium packaged drinking water brand based in Rewari, Haryana. Established with a mission to deliver the purest and safest drinking water, we combine cutting-edge purification technology with rigorous quality control to ensure every drop meets international standards.

Our state-of-the-art manufacturing facility uses a multi-stage purification process including Reverse Osmosis (RO), Ultraviolet (UV) treatment, and Ozonation to remove impurities while retaining essential minerals for your well-being.`,
  mission:
    'To make pure, safe, and affordable drinking water accessible to every home, office, and community across India.',
  vision:
    'To become India\'s most trusted packaged drinking water brand, known for uncompromising quality and sustainable practices.',
  stats: [
    { value: '10,000+', label: 'Bottles/Day' },
    { value: '500+', label: 'Happy Clients' },
    { value: '100%', label: 'Quality Tested' },
    { value: '24/7', label: 'Support' },
  ],
};

// ── Products ──
export const productsData = [
  {
    id: 1,
    name: '250 ml',
    subtitle: 'Mini Pack',
    description: 'Perfect for events, meetings, and on-the-go hydration.',
    useCases: ['Events', 'Travel', 'Meetings'],
    icon: '💧',
  },
  {
    id: 2,
    name: '500 ml',
    subtitle: 'Standard Pack',
    description: 'Ideal daily companion for school, office, and gym.',
    useCases: ['Office', 'School', 'Gym'],
    icon: '💧',
  },
  {
    id: 3,
    name: '1 Litre',
    subtitle: 'Family Pack',
    description: 'Great for families, restaurants, and everyday use.',
    useCases: ['Family', 'Restaurants', 'Daily Use'],
    icon: '💧',
  },
  {
    id: 4,
    name: '2 Litre',
    subtitle: 'Value Pack',
    description: 'Best value for home and small gatherings.',
    useCases: ['Home', 'Gatherings', 'Kitchen'],
    icon: '💧',
  },
  {
    id: 5,
    name: '20 Litre Jar',
    subtitle: 'Bulk Pack',
    description: 'Designed for offices, shops, homes, and bulk orders.',
    useCases: ['Office', 'Bulk Orders', 'Dispensers'],
    icon: '🫗',
  },
];

// ── Manufacturing Process ──
export const manufacturingSteps = [
  {
    step: 1,
    title: 'Raw Water Collection',
    description: 'Water is sourced from deep bore wells and undergoes initial quality testing.',
    icon: 'Droplets',
  },
  {
    step: 2,
    title: 'Multi-Layer Filtration',
    description: 'Sand filtration and activated carbon filtration remove sediment and organic impurities.',
    icon: 'Filter',
  },
  {
    step: 3,
    title: 'Reverse Osmosis (RO)',
    description: 'Advanced RO membranes remove dissolved salts, heavy metals, and microorganisms.',
    icon: 'Waves',
  },
  {
    step: 4,
    title: 'UV Treatment',
    description: 'Ultraviolet light destroys bacteria and viruses without adding chemicals.',
    icon: 'Sun',
  },
  {
    step: 5,
    title: 'Ozonation',
    description: 'Ozone gas ensures long-lasting disinfection and maintains freshness.',
    icon: 'Zap',
  },
  {
    step: 6,
    title: 'Automated Bottling',
    description: 'Water is filled into pre-washed, food-grade PET bottles in a hygienic environment.',
    icon: 'FlaskConical',
  },
  {
    step: 7,
    title: 'Sealing & Labeling',
    description: 'Tamper-proof caps are sealed and branded labels are applied for quality assurance.',
    icon: 'PackageCheck',
  },
  {
    step: 8,
    title: 'Quality Check & Dispatch',
    description: 'Final quality inspection before dispatch ensures every bottle meets our standards.',
    icon: 'Truck',
  },
];

// ── Certifications ──
export const certificationsData = [
  {
    title: 'FSSAI Certified',
    description: 'Licensed by the Food Safety and Standards Authority of India for safe consumption.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Quality Tested',
    description: 'Every batch undergoes rigorous lab testing for TDS, pH, and microbiological parameters.',
    icon: 'TestTube',
  },
  {
    title: 'Hygienic Packaging',
    description: 'Bottled in ISO-standard clean rooms using food-grade, BPA-free materials.',
    icon: 'Package',
  },
  {
    title: 'BIS Standards',
    description: 'Compliant with Bureau of Indian Standards for packaged drinking water (IS 14543).',
    icon: 'Award',
  },
];

// ── Gallery ──
export const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'AquLine manufacturing plant exterior' },
  { src: '/images/gallery-2.jpg', alt: 'RO purification system in operation' },
  { src: '/images/gallery-3.jpg', alt: 'Automated bottling line' },
  { src: '/images/gallery-4.jpg', alt: 'Quality testing laboratory' },
  { src: '/images/gallery-5.jpg', alt: 'Packaged water products display' },
  { src: '/images/gallery-6.jpg', alt: 'Delivery truck loaded with AquLine bottles' },
];

// ── Footer Quick Links ──
export const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Products', href: '#products' },
    { label: 'Manufacturing', href: '#manufacturing' },
    { label: 'Certifications', href: '#certifications' },
  ],
  resources: [
    { label: 'Gallery', href: '#gallery' },
    { label: 'Download Brochure', href: '/docs/brochure.pdf' },
    { label: 'Contact Us', href: '#contact' },
  ],
};