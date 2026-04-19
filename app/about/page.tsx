import type { Metadata } from 'next';
import AboutPageHero from '@/components/AboutPageHero';
import AboutSection from '@/components/AboutSection';
import AboutPageContent from '@/components/AboutPageContent';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn the story behind Taty's Chicken. A family-owned Peruvian restaurant in Manassas, VA, born from a passion for sharing authentic Peruvian flavors with the DMV community.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageHero />
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <AboutPageContent />
      </Reveal>
    </>
  );
}
