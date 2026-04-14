'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import OrderButton from './OrderButton';

export default function Hero() {
  const { t } = useLanguage();

  const badges = [t.hero.badge1, t.hero.badge2, t.hero.badge3, t.hero.badge4];

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1562967914-608f82629710?w=1920&q=85)',
        }}
        role="img"
        aria-label={t.hero.bgAlt}
      />

      {/* Layered dark gradients for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-stone-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-6 animate-fade-in">
            <div className="w-20 h-20 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-xl">
              <Image
                src="/logo.jpg"
                alt={t.hero.logoAlt}
                width={72}
                height={72}
                className="object-contain w-[68px] h-[68px]"
                priority
              />
            </div>
          </div>

          {/* Eyebrow */}
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-5 animate-fade-in">
            {t.hero.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="font-poppins font-black text-5xl sm:text-6xl md:text-7xl text-white leading-tight hero-text-shadow mb-6 animate-fade-up">
            {t.hero.heading1}{' '}
            <span className="text-brand-gold">{t.hero.headingHighlight}</span>{' '}
            {t.hero.heading2}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed animate-fade-up animate-delay-100">
            {t.hero.subheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up animate-delay-200">
            <OrderButton className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/30 hover:scale-105 active:scale-95 min-h-[56px] gap-2">
              {t.hero.ctaDelivery}
            </OrderButton>
            <Link
              href="/menu"
              className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white hover:text-brand-dark font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 min-h-[56px] flex items-center justify-center"
            >
              {t.hero.ctaMenu}
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 animate-fade-up animate-delay-300">
            {badges.map((text) => (
              <div
                key={text}
                className="flex items-center gap-2 text-gray-300 text-sm font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>
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
