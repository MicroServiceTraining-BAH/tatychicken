import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import QuickActions from '@/components/QuickActions';
import FeaturedItems from '@/components/FeaturedItems';
import DeliveryBanner from '@/components/DeliveryBanner';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: "Taty's Chicken | Crispy Latin-Style Fried Chicken in Manassas, VA",
  description:
    "Taty's Chicken — crispy, Latin-inspired fried chicken made fresh daily in Manassas, VA. Fast service, family portions, authentic flavor. Order now on DoorDash or visit us today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <FeaturedItems />
      <DeliveryBanner />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
