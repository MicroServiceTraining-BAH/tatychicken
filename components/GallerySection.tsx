'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=85',
    alt: 'Crispy golden fried chicken pieces in a basket',
    className: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=85',
    alt: 'Crispy fried chicken wings with dipping sauce',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=600&q=85',
    alt: 'Golden fried chicken pieces on a plate',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85',
    alt: 'Family-style food spread with chicken and sides',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85',
    alt: 'Crispy chicken sandwich on a brioche bun',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=85',
    alt: 'Close-up of crispy fried chicken pieces',
    className: '',
  },
];

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-brand-cream" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            {t.gallery.eyebrow}
          </p>
          <h2 id="gallery-heading" className="section-title mb-4">
            {t.gallery.heading}
          </h2>
          <p className="section-subtitle mx-auto text-center">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-[540px]">
          {galleryImages.map(({ src, alt, className }, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer bg-amber-50 ${className}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {galleryImages.map(({ src, alt }, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden rounded-xl group bg-amber-50"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
                loading={idx < 2 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-brand-dark hover:text-white transition-all duration-300 hover:scale-105"
          >
            {t.gallery.viewFullGallery}
          </Link>
        </div>
      </div>
    </section>
  );
}
