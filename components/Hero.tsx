'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/lib/language-context';
import OrderButton from './OrderButton';

const SLIDES = [
  {
    // Crispy fried chicken pieces golden close-up
    url: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=1920&q=85',
    position: 'center',
  },
  {
    // Peruvian rotisserie chicken pollo a la brasa
    url: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1920&q=85',
    position: 'center',
  },
  {
    // Latin chicken plate with rice and sides
    url: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=85',
    position: 'center',
  },
  {
    // Crispy fried chicken drumsticks
    url: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=1920&q=85',
    position: 'center',
  },
];

const INTERVAL = 5000;

export default function Hero() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  const badges = [t.hero.badge1, t.hero.badge2, t.hero.badge3, t.hero.badge4];

  const goTo = useCallback((index: number) => {
    if (fading) return;
    setPrev(current);
    setFading(true);
    setCurrent(index);
    setTimeout(() => {
      setPrev(null);
      setFading(false);
    }, 1000);
  }, [current, fading]);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const goBack = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Outgoing slide (fades out) */}
      {prev !== null && (
        <div
          className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 opacity-0"
          style={{
            backgroundImage: `url(${SLIDES[prev].url})`,
            backgroundPosition: SLIDES[prev].position,
          }}
        />
      )}

      {/* Active slide (fades in) */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.url}
          className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundPosition: slide.position,
          }}
          role={i === current ? 'img' : undefined}
          aria-label={i === current ? t.hero.bgAlt : undefined}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Center radial shadow behind text */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 55%, rgba(0,0,0,0.65) 0%, transparent 100%)' }} />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Prev / Next arrows */}
      <button
        onClick={goBack}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2 bg-brand-gold' : 'w-2 h-2 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 md:py-48">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-5 animate-fade-in text-center">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-bebas text-7xl sm:text-8xl md:text-9xl text-white leading-none hero-text-shadow mb-6 animate-fade-up tracking-wide">
            {t.hero.heading1}{' '}
            <span className="text-brand-gold">{t.hero.headingHighlight}</span>{' '}
            {t.hero.heading2}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed animate-fade-up animate-delay-100 text-center">
            {t.hero.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up animate-delay-200 justify-center">
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

          <div className="flex flex-wrap gap-x-6 gap-y-3 animate-fade-up animate-delay-300 justify-center">
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

    </section>
  );
}
