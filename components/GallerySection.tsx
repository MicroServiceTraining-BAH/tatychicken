import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=85',
    alt: 'Crispy golden fried chicken pieces',
    className: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1569923072541-b4adc1c5c4e9?w=600&q=85',
    alt: 'Juicy fried chicken close-up',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c2?w=600&q=85',
    alt: 'Chicken combo meal with sides',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=85',
    alt: 'Fried chicken platter',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1587778082149-bd5b1bf5d3fa?w=600&q=85',
    alt: 'Latin-style sides with rice and plantains',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=85',
    alt: 'Crispy chicken wings',
    className: '',
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Fresh Out the Fryer
          </p>
          <h2 id="gallery-heading" className="section-title mb-4">
            See What We&apos;re Cooking
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Every plate is made with love. Take a look at what&apos;s waiting for you.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-[540px]">
          {galleryImages.map(({ src, alt, className }, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${className}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
                loading="lazy"
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
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
                loading="lazy"
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
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
