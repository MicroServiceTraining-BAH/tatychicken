import Link from 'next/link';

type FeaturedItem = {
  emoji: string;
  name: string;
  description: string;
  price: string;
  tag: string;
  tagColor: string;
};

const items: FeaturedItem[] = [
  {
    emoji: '🍗',
    name: 'Classic Combo',
    description:
      'Our signature crispy golden chicken with seasoned fries and a refreshing drink. The crowd favorite for a reason.',
    price: 'From $8.99',
    tag: '#1 Best Seller',
    tagColor: 'bg-brand-red text-white',
  },
  {
    emoji: '🍱',
    name: 'Family Feast',
    description:
      '8 crispy pieces, 2 large sides, and 4 drinks. The ultimate spread to feed your whole crew without breaking the bank.',
    price: 'From $34.99',
    tag: 'Best Value',
    tagColor: 'bg-brand-gold text-brand-dark',
  },
  {
    emoji: '🌶️',
    name: 'Latin Spicy Box',
    description:
      'Marinated hot chicken with Latin rice & beans and sweet fried plantains. Bold, authentic, unforgettable.',
    price: 'From $11.99',
    tag: '🔥 Fan Favorite',
    tagColor: 'bg-orange-500 text-white',
  },
  {
    emoji: '🥪',
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
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>⭐</span>
            <span>Fan Favorites</span>
          </div>
          <h2
            id="featured-heading"
            className="section-title mb-4"
          >
            Our Fan Favorites
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Tried-and-true hits that keep our customers coming back for more.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ emoji, name, description, price, tag, tagColor }) => (
            <article
              key={name}
              className="card group flex flex-col overflow-hidden"
            >
              {/* Visual area */}
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 p-8 flex items-center justify-center min-h-[160px]">
                <span
                  className="text-7xl transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                  role="img"
                  aria-label={name}
                >
                  {emoji}
                </span>
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
            View Full Menu
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
