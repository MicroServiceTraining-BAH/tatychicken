import type { Metadata } from 'next';
import MenuSection from '@/components/MenuSection';
import MenuPageHero from '@/components/MenuPageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    "Explore Taty's Chicken full menu — crispy chicken combos, sides, drinks, and specials. Fresh, affordable, and made to order.",
  keywords: ['fried chicken menu', 'chicken combos', 'family meals', 'Latin chicken menu'],
};

export default function MenuPage() {
  return (
    <>
      <MenuPageHero />
      <Reveal>
        <MenuSection />
      </Reveal>
    </>
  );
}
