import Image from 'next/image';

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: 'Daily', label: 'Freshly Made' },
  { value: 'Family', label: 'Recipes' },
  { value: 'Fast', label: 'Service' },
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-muted" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">
              Our Story
            </p>

            <h2 id="about-heading" className="section-title mb-8">
              A Family Recipe,
              <br />
              <span className="text-brand-red">A Local Legend</span>
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Taty&apos;s Chicken was born from a love of bold flavors, crispy perfection, and
                the warmth of home-cooked meals. Our Latin-inspired recipes have been passed down
                and refined to bring you chicken that&apos;s unlike anything else in the
                neighborhood.
              </p>
              <p>
                We believe in quality you can taste. Every piece is marinated, seasoned, and
                fried fresh to order — never frozen, never rushed. From our family to yours.
              </p>
              <p>
                Whether you&apos;re grabbing a quick lunch or feeding the whole family,
                Taty&apos;s is your neighborhood spot. Come hungry, leave happy.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-8 mb-10">
              {['Never Frozen', 'Made to Order', 'Latin Recipes', 'Family Owned'].map((badge) => (
                <span
                  key={badge}
                  className="bg-white border border-gray-200 text-brand-dark text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-poppins font-black text-3xl text-brand-red mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative h-[500px]">
            {/* Main image — crispy fried chicken pieces in a pan */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-amber-50">
              <Image
                src="https://images.unsplash.com/photo-1639024471283-03518883512d?w=900&q=85"
                alt="Crispy fried chicken pieces fresh out of the fryer at Taty's Chicken"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-poppins font-bold text-xl text-white leading-snug">
                  &ldquo;Quality You Can Taste — Every Single Bite.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating secondary image — chicken sandwich close-up */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-amber-50">
              <Image
                src="https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=400&q=85"
                alt="Golden fried chicken pieces on a plate"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
