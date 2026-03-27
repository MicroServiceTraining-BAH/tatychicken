import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    "Take a look at the mouth-watering food at Taty's Chicken. Crispy fried chicken, Latin sides, and more — fresh out the fryer.",
};

const images = [
  {
    // Fried chicken pieces in a basket — hero confirmed
    src: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=85',
    alt: 'Crispy golden fried chicken pieces in a basket',
    caption: 'Crispy Chicken',
  },
  {
    // Wings with dipping sauce — confirmed from screenshot
    src: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&q=85',
    alt: 'Crispy fried chicken wings with dipping sauce',
    caption: 'Crispy Wings',
  },
  {
    // Fried chicken plate — different shot
    src: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=800&q=85',
    alt: 'Golden fried chicken pieces arranged on a plate',
    caption: 'Golden Crust',
  },
  {
    // Overhead food spread — family style
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85',
    alt: 'Overhead view of a generous family-style food spread',
    caption: 'Family Platter',
  },
  {
    // Fried chicken close-up
    src: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=85',
    alt: 'Close-up of crispy seasoned fried chicken',
    caption: 'Seasoned & Crispy',
  },
  {
    // Chicken sandwich / burger
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85',
    alt: 'Juicy chicken sandwich on a toasted brioche bun',
    caption: 'Chicken Sandwich',
  },
  {
    // Food spread / combo meal
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85',
    alt: 'Restaurant-style chicken combo meal',
    caption: 'Combo Meal',
  },
  {
    // Fries / side dish
    src: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?w=800&q=85',
    alt: 'Crispy seasoned french fries with dipping sauce',
    caption: 'Seasoned Fries',
  },
  {
    // Cold drink / lemonade
    src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=85',
    alt: 'Refreshing cold drink to go with your meal',
    caption: 'Fresh Drinks',
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="pt-16 md:pt-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-4">
            The Food Speaks for Itself
          </p>
          <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Food Gallery
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fresh out the fryer, straight to your eyes. Warning: may cause intense hunger.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-brand-cream" aria-label="Food gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map(({ src, alt, caption }, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border border-gray-100 cursor-pointer bg-amber-50"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={idx < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white font-poppins font-bold text-lg">{caption}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg mb-6">Ready to taste it for yourself?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-brand-red text-white font-bold px-8 py-4 rounded-full hover:bg-brand-red-dark transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                View Our Menu
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-brand-dark hover:text-white transition-all duration-200"
              >
                Find Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
