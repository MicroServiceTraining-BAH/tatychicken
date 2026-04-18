'use client';

import { useLanguage } from '@/lib/language-context';

export default function MenuPageHero() {
  const { t } = useLanguage();

  return (
    <div className="pt-16 md:pt-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
          <span>{t.menuPage.heroBadge}</span>
        </div>
        <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          {t.menuPage.heroHeading}
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          {t.menuPage.heroSubtitle}
        </p>
      </div>
    </div>
  );
}
