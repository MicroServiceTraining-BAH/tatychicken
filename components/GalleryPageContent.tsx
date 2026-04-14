'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

const imageSrcs = [
  'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=85',
  'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&q=85',
  'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=800&q=85',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85',
  'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=85',
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85',
  'https://images.unsplash.com/photo-1516685018646-549198525c1b?w=800&q=85',
  'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=85',
];

const imageAlts = [
  'Crispy golden fried chicken pieces in a basket',
  'Crispy fried chicken wings with dipping sauce',
  'Golden fried chicken pieces arranged on a plate',
  'Overhead view of a generous family-style food spread',
  'Close-up of crispy seasoned fried chicken',
  'Juicy chicken sandwich on a toasted brioche bun',
  'Restaurant-style chicken combo meal',
  'Crispy seasoned french fries with dipping sauce',
  'Refreshing cold drink to go with your meal',
];

export default function GalleryPageContent() {
  const { t } = useLanguage();

  const captions = [
    t.galleryPage.caption1,
    t.galleryPage.caption2,
    t.galleryPage.caption3,
    t.galleryPage.caption4,
    t.galleryPage.caption5,
    t.galleryPage.caption6,
    t.galleryPage.caption7,
    t.galleryPage.caption8,
    t.galleryPage.caption9,
  ];

  return (
    <>
      {/* Page Hero */}
      <div className="pt-16 md:pt-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-4">
            {t.galleryPage.eyebrow}
          </p>
          <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {t.galleryPage.heroHeading}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t.galleryPage.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-brand-cream" aria-label="Food gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageSrcs.map((src, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border border-gray-100 cursor-pointer bg-amber-50"
              >
                <Image
                  src={src}
                  alt={imageAlts[idx]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={idx < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white font-poppins font-bold text-lg">{captions[idx]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg mb-6">{t.galleryPage.ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-brand-red text-white font-bold px-8 py-4 rounded-full hover:bg-brand-red-dark transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                {t.galleryPage.ctaViewMenu}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-brand-dark hover:text-white transition-all duration-200"
              >
                {t.galleryPage.ctaFindUs}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
