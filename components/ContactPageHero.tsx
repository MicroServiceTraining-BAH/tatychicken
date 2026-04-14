'use client';

import { siteConfig } from '@/lib/metadata';
import { useLanguage } from '@/lib/language-context';

export default function ContactPageHero() {
  const { t } = useLanguage();

  return (
    <div className="pt-16 md:pt-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-red/30 text-brand-red-light rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
          <span>📍</span>
          <span>{t.contactPage.heroBadge}</span>
        </div>
        <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          {t.contactPage.heroHeading}
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          {t.contactPage.heroSubtitle}
        </p>
        {/* Quick phone CTA */}
        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center gap-2 mt-8 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold text-xl px-10 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
        >
          📞 {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
