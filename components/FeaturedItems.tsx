import Link from 'next/link';
import Image from 'next/image';

type FeaturedItem = {
  image: string;
  alt: string;
  name: string;
  description: string;
  price: string;
  tag: string;
  tagColor: string;
};

const items: FeaturedItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=85',
    alt: 'Classic fried chicken combo with fries and drink',
    name: 'Classic Combo',
    description:
      'Our signature crispy golden chicken with seasoned fries and a refreshing drink. The crowd favorite for a reason.',
    price: 'From $8.99',
    tag: '#1 Best Seller',
    tagColor: 'bg-brand-red text-white',
  },
  {
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=85',
    alt: 'Family feast platter with multiple pieces of fried chicken',
    name: 'Family Feast',
    description:
      '8 crispy pieces, 2 large sides, and 4 drinks. The ultimate spread to feed your whole crew without breaking the bank.',
    price: 'From $34.99',
    tag: 'Best Value',
    tagColor: 'bg-brand-gold text-brand-dark',
  },
  {
    image: 'https://images.unsplash.com/photo-1569923072541-b4adc1c5c4e9?w=600&q=85',
    alt: 'Latin spicy chicken box with rice and plantains',
    name: 'Latin Spicy Box',
    description:
      'Marinated hot chicken with Latin rice & beans and sweet fried plantains. Bold, authentic, unforgettable.',
    price: 'From $11.99',
    tag: 'Fan Favorite',
    tagColor: 'bg-orange-500 text-white',
  },
  {
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=85',
    alt: 'Crispy chicken sandwich on a toasted brioche bun',
    name: 'Chicken Sandwich',
    description:
      'Crispy golden fillet on a toasted brioche bun with our house sauce. Satisfaction in every bite.',
    price: 'From $7.99',
    tag: 'Must Try',
    tagColor: 'bg-emerald-600 text-white',
  },
];

export default function FeaturedItems() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Fan Favorites
          </p>
          <h2 id="featured-heading" className="section-title mb-4">
            Order What Everyone Loves
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Tried-and-true hits that keep our customers coming back for more.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ image, alt, name, description, price, tag, tagColor }) => (
            <article key={name} className="card group flex flex-col overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
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
                    View →
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
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
