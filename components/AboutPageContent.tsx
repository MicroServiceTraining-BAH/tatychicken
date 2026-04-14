'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function AboutPageContent() {
  const { t } = useLanguage();

  const values = [
    { emoji: '🔥', title: t.aboutPage.value1Title, description: t.aboutPage.value1Desc },
    { emoji: '🌶️', title: t.aboutPage.value2Title, description: t.aboutPage.value2Desc },
    { emoji: '👨‍👩‍👧‍👦', title: t.aboutPage.value3Title, description: t.aboutPage.value3Desc },
    { emoji: '⚡', title: t.aboutPage.value4Title, description: t.aboutPage.value4Desc },
  ];

  return (
    <>
      {/* Values Section */}
      <section className="py-20 md:py-28 bg-brand-cream" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="values-heading" className="section-title mb-4">
              {t.aboutPage.valuesHeading}
            </h2>
            <p className="section-subtitle mx-auto text-center">
              {t.aboutPage.valuesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ emoji, title, description }) => (
              <div key={title} className="card p-6 text-center">
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
            {t.aboutPage.ctaHeading}
          </h2>
          <p className="text-red-200 text-lg mb-8">
            {t.aboutPage.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-white text-brand-red font-bold text-lg px-8 py-4 rounded-full hover:bg-red-50 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {t.aboutPage.ctaViewMenu}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-brand-red transition-all duration-200"
            >
              {t.aboutPage.ctaFindUs}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
