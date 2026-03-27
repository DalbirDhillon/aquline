import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Manufacturing from '@/components/Manufacturing';
import Certifications from '@/components/Certifications';
import Brochure from '@/components/Brochure';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Manufacturing />
      <Certifications />
      <Brochure />
      <Gallery />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}