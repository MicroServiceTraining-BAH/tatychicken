'use client';

import { useLanguage } from '@/lib/language-context';

const ITEMS = [
  { text: 'Pollo a la Brasa', accent: true },
  { text: 'Ceviche', accent: false },
  { text: 'Lomo Saltado', accent: false },
  { text: 'Authentic Peruvian', accent: true },
  { text: 'Chifa', accent: false },
  { text: 'Fresh Daily', accent: false },
  { text: 'Family Owned', accent: true },
  { text: 'Serving the DMV', accent: false },
  { text: 'Arroz con Mariscos', accent: false },
  { text: 'Made to Order', accent: true },
  { text: 'Anticuchos', accent: false },
  { text: 'Manassas, VA', accent: false },
];

export default function MarqueeStrip() {
  const { t } = useLanguage();
  void t;
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="bg-brand-gold py-3 overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 px-4 text-sm font-bold text-brand-dark uppercase tracking-widest whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-dark/40 flex-shrink-0" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
