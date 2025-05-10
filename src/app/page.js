'use client';

import AboutAgencySection from '@/components/organisms/About';
import FAQSection from '@/components/organisms/Faqs';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import InfoSection from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import ProductShowcase from '@/components/organisms/Products';
import AgencyServicesSection from '@/components/organisms/Services';
import TestimonialsCarousel from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutAgencySection />
      <AgencyServicesSection />
      <InfoSection />
      <ProductShowcase />
      <FAQSection />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
