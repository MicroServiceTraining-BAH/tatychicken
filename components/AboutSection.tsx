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
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span>🏠</span>
              <span>Our Story</span>
            </div>

            <h2
              id="about-heading"
              className="section-title mb-8"
            >
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

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center sm:text-left">
                  <div className="font-poppins font-black text-3xl text-brand-red mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-brand-dark rounded-3xl p-8 md:p-10 overflow-hidden">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 40%, #C8102E 0%, transparent 60%),
                                    radial-gradient(circle at 80% 70%, #F5A623 0%, transparent 60%)`,
                }}
              />

              <div className="relative z-10">
                <div className="text-6xl mb-6" role="img" aria-label="Fried chicken">
                  🍗
                </div>
                <blockquote className="font-poppins font-bold text-2xl md:text-3xl text-white leading-tight mb-6">
                  &ldquo;Quality You Can Taste — Every Single Bite.&rdquo;
                </blockquote>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Never Frozen',
                    'Made to Order',
                    'Latin Recipes',
                    'Family Owned',
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-gold rounded-2xl flex items-center justify-center text-4xl shadow-xl rotate-6">
              🌶️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
