import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import QuickActions from '@/components/QuickActions';
import FeaturedItems from '@/components/FeaturedItems';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: "Taty's Chicken | Crispy Latin-Style Fried Chicken",
  description:
    "Taty's Chicken — crispy, Latin-inspired fried chicken made fresh daily. Fast service, family portions, authentic flavor. Order now or visit us today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <FeaturedItems />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
