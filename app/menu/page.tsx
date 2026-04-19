import type { Metadata } from 'next';

import MenuPageHero from '@/components/MenuPageHero';
import MenuSection from '@/components/MenuSection';
import PDFMenuViewer from '@/components/PDFMenuViewer';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    "Explore Taty's Chicken full menu — Pollo a la Brasa, ceviche, lomo saltado, handhelds, seafood, and more. Authentic Peruvian food in Manassas, VA.",
  keywords: [
    'Peruvian chicken menu',
    'pollo a la brasa',
    'ceviche Manassas',
    'lomo saltado',
    'Latin chicken menu',
  ],
};

export default function MenuPage() {
  return (
    <>
      <MenuPageHero />
      <Reveal>
        <MenuSection />
      </Reveal>
      <PDFMenuViewer />
    </>
  );
}
