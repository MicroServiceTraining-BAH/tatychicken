import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn the story behind Taty's Chicken — a family-owned Latin fried chicken restaurant built on bold flavors, quality ingredients, and community.",
};

const values = [
  {
    emoji: '🔥',
    title: 'Never Frozen',
    description:
      'Every piece of chicken is fresh, never frozen. We marinate, season, and fry to order.',
  },
  {
    emoji: '🌶️',
    title: 'Latin Recipes',
    description:
      'Our flavors are rooted in Latin tradition — bold spices, real ingredients, authentic taste.',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Family Owned',
    description:
      'We are a neighborhood spot run by real people who care about your experience.',
  },
  {
    emoji: '⚡',
    title: 'Fast Service',
    description:
      'Hot food, fast service — because your time matters just as much as your meal.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="pt-16 md:pt-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-red/30 text-brand-red-light rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>🏠</span>
            <span>Our Story</span>
          </div>
          <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            About Taty&apos;s Chicken
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A family recipe, a neighborhood legend. Here&apos;s how it all started.
          </p>
        </div>
      </div>

      <AboutSection />

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-brand-cream" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="values-heading" className="section-title mb-4">
              What We Stand For
            </h2>
            <p className="section-subtitle mx-auto text-center">
              These aren&apos;t just words — they&apos;re what goes into every meal we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ emoji, title, description }) => (
              <div
                key={title}
                className="card p-6 text-center"
              >
                <div className="text-5xl mb-4" role="img" aria-label={title}>
                  {emoji}
                </div>
                <h3 className="font-poppins font-bold text-xl text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-brand-red">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mb-4">
            Hungry Yet? Let&apos;s Fix That.
          </h2>
          <p className="text-red-200 text-lg mb-8">
            Fresh chicken is waiting for you. Order now or swing by today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-white text-brand-red font-bold text-lg px-8 py-4 rounded-full hover:bg-red-50 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-brand-red transition-all duration-200"
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
