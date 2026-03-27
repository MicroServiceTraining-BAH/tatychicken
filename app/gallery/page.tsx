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
    src: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80',
    alt: 'Crispy golden fried chicken pieces stacked high',
    caption: 'Crispy Chicken',
  },
  {
    src: 'https://images.unsplash.com/photo-1569923072541-b4adc1c5c4e9?w=800&q=80',
    alt: 'Juicy fried chicken close-up showing the golden crust',
    caption: 'Golden Crust',
  },
  {
    src: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c2?w=800&q=80',
    alt: 'Full chicken combo meal with sides and a drink',
    caption: 'Combo Meal',
  },
  {
    src: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80',
    alt: 'Family-style fried chicken platter with multiple pieces',
    caption: 'Family Platter',
  },
  {
    src: 'https://images.unsplash.com/photo-1587778082149-bd5b1bf5d3fa?w=800&q=80',
    alt: 'Latin-style sides including rice and fried plantains',
    caption: 'Latin Sides',
  },
  {
    src: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&q=80',
    alt: 'Crispy fried chicken wings close-up',
    caption: 'Crispy Wings',
  },
  {
    src: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?w=800&q=80',
    alt: 'Chicken sandwich on a brioche bun with house sauce',
    caption: 'Chicken Sandwich',
  },
  {
    src: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=800&q=80',
    alt: 'Basket of crispy french fries with seasoning',
    caption: 'Seasoned Fries',
  },
  {
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    alt: 'Refreshing lemonade with chicken meal',
    caption: 'Fresh Lemonade',
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="pt-16 md:pt-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>📸</span>
            <span>The Food Speaks for Itself</span>
          </div>
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
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border border-gray-100 cursor-pointer"
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
            <p className="text-gray-500 text-lg mb-6">
              Ready to taste it for yourself?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-brand-red text-white font-bold px-8 py-4 rounded-full hover:bg-brand-red-dark transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                🍗 View Our Menu
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-brand-dark hover:text-white transition-all duration-200"
              >
                📍 Find Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
