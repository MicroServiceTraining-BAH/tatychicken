import type { Metadata } from 'next';
import MenuSection from '@/components/MenuSection';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    "Explore Taty's Chicken full menu — crispy chicken combos, sides, drinks, and specials. Fresh, affordable, and made to order.",
  keywords: ['fried chicken menu', 'chicken combos', 'family meals', 'Latin chicken menu'],
};

export default function MenuPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="pt-16 md:pt-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>🍽️</span>
            <span>Fresh Daily</span>
          </div>
          <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Our Menu
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Made fresh every day. From crispy chicken to Latin-style sides — there&apos;s
            something for everyone.
          </p>
        </div>
      </div>

      <MenuSection />
    </>
  );
}
