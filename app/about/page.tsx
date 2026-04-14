import type { Metadata } from 'next';
import AboutPageHero from '@/components/AboutPageHero';
import AboutSection from '@/components/AboutSection';
import AboutPageContent from '@/components/AboutPageContent';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn the story behind Taty's Chicken — a family-owned Latin fried chicken restaurant built on bold flavors, quality ingredients, and community.",
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
