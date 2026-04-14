'use client';

import { useLanguage } from '@/lib/language-context';

const SEPARATOR = '·';

export default function MarqueeStrip() {
  const { t } = useLanguage();

  // Reuse translated badge strings already in the translation file
  const items = [
    t.hero.badge1,
    t.about.badge1,
    t.about.badge3,
    t.about.badge4,
    t.hero.badge4,
    t.hero.badge2,
    t.about.badge2,
    t.hero.badge3,
  ];

  // Duplicate for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div
      className="bg-brand-dark border-y border-white/10 py-3.5 overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-5 px-5 text-sm font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap"
          >
            <span className="text-brand-gold text-xs">{SEPARATOR}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
