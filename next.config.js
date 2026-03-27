/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for local images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Strict mode for better development experience
  reactStrictMode: true,
};

module.exports = nextConfig;