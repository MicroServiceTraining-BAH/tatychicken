import Link from 'next/link';
import { siteConfig } from '@/lib/metadata';

const trustBadges = [
  { icon: '✓', text: 'Made Fresh Daily' },
  { icon: '✓', text: 'Fast Service' },
  { icon: '✓', text: 'Family Portions' },
  { icon: '✓', text: 'Authentic Flavor' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-red-950 to-stone-900" />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #C8102E 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, #F5A623 0%, transparent 50%)`,
        }}
      />

      {/* Food image overlay */}
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1562967914-608f82629710?w=1920&q=80)',
        }}
        role="img"
        aria-label="Crispy fried chicken"
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-stone-950/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold rounded-full px-4 py-1.5 text-sm font-semibold mb-6 animate-fade-in backdrop-blur-sm">
          <span>🔥</span>
          <span>Local Favorite Since Day One</span>
        </div>

        {/* Headline */}
        <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight hero-text-shadow mb-6 animate-fade-up">
          Crispy,{' '}
          <span className="text-brand-gold">Flavor-Packed</span>
          <br />
          Chicken You&apos;ll Love
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-100">
          Fresh, hot, and ready when you are. Latin-inspired recipes made with real ingredients —
          every single time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 animate-fade-up animate-delay-200">
          <a
            href={siteConfig.orderLink}
            className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/30 hover:scale-105 active:scale-95 min-h-[56px] flex items-center justify-center gap-2"
          >
            🛒 Order Now
          </a>
          <Link
            href="/menu"
            className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white hover:text-brand-dark font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 min-h-[56px] flex items-center justify-center gap-2"
          >
            View Menu →
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 animate-fade-up animate-delay-300">
          {trustBadges.map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-gray-300 text-sm font-medium"
            >
              <span className="text-brand-gold font-bold text-base">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
