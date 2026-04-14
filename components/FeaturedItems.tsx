'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';

type BaseItem = {
  image: string;
  alt: string;
  tagColor: string;
};

const baseItems: BaseItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=85',
    alt: 'Classic fried chicken combo with crispy pieces, seasoned fries and a drink',
    tagColor: 'bg-brand-red text-white',
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85',
    alt: 'Family feast platter with multiple fried chicken pieces and sides',
    tagColor: 'bg-brand-gold text-brand-dark',
  },
  {
    image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=600&q=85',
    alt: 'Latin spicy chicken box with rice, beans and sweet fried plantains',
    tagColor: 'bg-orange-500 text-white',
  },
  {
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85',
    alt: 'Crispy chicken sandwich on a toasted brioche bun with house sauce',
    tagColor: 'bg-emerald-600 text-white',
  },
];

export default function FeaturedItems() {
  const { t } = useLanguage();

  const itemTranslations = [
    t.featured.item1,
    t.featured.item2,
    t.featured.item3,
    t.featured.item4,
  ];

  const items = baseItems.map((base, i) => ({ ...base, ...itemTranslations[i] }));

  return (
    <section className="py-20 md:py-28 bg-brand-cream" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            {t.featured.eyebrow}
          </p>
          <h2 id="featured-heading" className="section-title mb-4">
            {t.featured.heading}
          </h2>
          <p className="section-subtitle mx-auto text-center">
            {t.featured.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ image, alt, name, description, price, tag, tagColor }) => (
            <article key={name} className="card group flex flex-col overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-amber-50">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span
                  className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${tagColor}`}
                >
                  {tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-poppins font-bold text-lg text-brand-dark mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-poppins font-black text-brand-red text-lg">{price}</span>
                  <Link
                    href="/menu"
                    className="text-sm font-semibold text-brand-red hover:text-brand-red-dark transition-colors"
                    aria-label={`View ${name} details`}
                  >
                    {t.featured.viewDetails}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold px-8 py-4 rounded-full hover:bg-brand-red transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            {t.featured.viewFullMenu}
          </Link>
        </div>
      </div>
    </section>
  );
}
