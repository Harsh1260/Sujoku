'use client';

import { useState } from 'react';
import Preloader from '@/components/ui/preloader';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero3D } from '@/components/Hero3D';
import { AboutSection } from '@/components/ContentSections/AboutSection';
import { PortfolioSection } from '@/components/ContentSections/PortfolioSection';
import { ServicesSection } from '@/components/ContentSections/ServicesSection';
import { TestimonialSection } from '@/components/ContentSections/TestimonialSection';
import { TeamSection } from '@/components/ContentSections/TeamSection';
import { PricingWithChart } from '@/components/PricingWithChart';
import { FAQSection } from '@/components/ContentSections/FAQSection';
import { CTASection } from '@/components/ContentSections/CTASection';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [startAnimations, setStartAnimations] = useState(false);

  return (
    <>
      {showPreloader && (
        <Preloader
          onExitStart={() => setStartAnimations(true)}
          onComplete={() => setShowPreloader(false)}
        />
      )}
      <Navbar />
      <main className="w-full relative">
        <Hero3D startAnimation={startAnimations} />

        {/* Content Container that scrolls over the sticky Hero */}
        <div className="relative z-10 bg-background">
          <AboutSection />
          <PortfolioSection />
          <ServicesSection />
          <TestimonialSection />
          <TeamSection />
          <PricingWithChart />
          <FAQSection />
          <CTASection />
          <Footer />
        </div>
      </main>
      <Analytics />
    </>
  );
}
