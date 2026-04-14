'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';

export default function AboutSection() {
  const { t } = useLanguage();

  const badges = [t.about.badge1, t.about.badge2, t.about.badge3, t.about.badge4];
  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label },
    { value: t.about.stat2Value, label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
    { value: t.about.stat4Value, label: t.about.stat4Label },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-muted" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">
              {t.about.eyebrow}
            </p>

            <h2 id="about-heading" className="section-title mb-8">
              {t.about.heading1}
              <br />
              <span className="text-brand-red">{t.about.heading2}</span>
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-8 mb-10">
              {badges.map((badge) => (
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
            {/* Main image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-amber-50">
              <Image
                src="https://images.unsplash.com/photo-1639024471283-03518883512d?w=900&q=85"
                alt={t.about.mainImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-poppins font-bold text-xl text-white leading-snug">
                  {t.about.quote}
                </p>
              </div>
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-amber-50">
              <Image
                src="https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=400&q=85"
                alt={t.about.secondaryImageAlt}
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
