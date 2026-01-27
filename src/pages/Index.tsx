import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import StatsSection from '@/components/sections/StatsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import SmoothFollower from '@/components/effects/SmoothFollower';
import InHouseAdvantageSection from '@/components/sections/InHouseAdvantageSection';
import ClientsMarquee from '@/components/sections/ClientsMarquee';
import OurWorkSection from '@/components/sections/OurWorkSection';
import SEO from '@/components/SEO';
import { seoMetadata } from '@/lib/content';

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle initial hash scroll and hash changes
    if (hash) {
      const targetId = hash.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        // Delay slightly to ensure content is layout
        setTimeout(() => {
          lenis.scrollTo('#' + targetId, { offset: 0 });
        }, 100);
      }
    }

    return () => {
      lenis.destroy();
    };
  }, [hash]);

  return (
    <div className="min-h-screen bg-background relative">
      <SEO
        title={seoMetadata.home.title}
        description={seoMetadata.home.description}
        keywords={seoMetadata.home.keywords}
      />
      {/* Smooth Cursor Follower - Desktop Only */}
      <SmoothFollower />

      <Header />
      <main className="relative">
        <HeroSection />
        <ClientsMarquee />
        <InHouseAdvantageSection />
        <ServicesSection />
        <OurWorkSection />
        <WhyChooseSection />
        <IndustriesSection />
        <StatsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
