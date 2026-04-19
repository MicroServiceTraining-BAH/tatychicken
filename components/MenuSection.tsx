'use client';

import { useState, useRef } from 'react';

import { menuItems, categories, type MenuCategory } from '@/lib/menu-data';
import { siteConfig } from '@/lib/metadata';
import { useLanguage } from '@/lib/language-context';

type ItemTranslation = { name: string; description: string };

const CATEGORY_ICONS: Record<string, string> = {
  all: '🍽',
  appetizers: '🥗',
  chicken: '🍗',
  handhelds: '🥪',
  specialty: '⭐',
  seafood: '🦐',
  soups: '🍲',
  chifa: '🥢',
  shareables: '🎉',
  desserts: '🍰',
  drinks: '🥤',
};

const CATEGORY_COLORS: Record<string, string> = {
  appetizers: 'border-brand-orange',
  chicken: 'border-brand-gold',
  handhelds: 'border-brand-red',
  specialty: 'border-purple-400',
  seafood: 'border-blue-400',
  soups: 'border-teal-400',
  chifa: 'border-red-400',
  shareables: 'border-brand-gold',
  desserts: 'border-pink-400',
  drinks: 'border-cyan-400',
};

type MenuItem = (typeof menuItems)[number];

function MenuItemRow({
  item,
  name,
  description,
  popular,
  spicy,
  popularLabel,
  spicyLabel,
}: {
  item: MenuItem;
  name: string;
  description: string;
  popular?: boolean;
  spicy?: boolean;
  popularLabel: string;
  spicyLabel: string;
}) {
  return (
    <article className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0 group">
      <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${CATEGORY_COLORS[item.category] ?? 'border-gray-200'} border-l-2 border-transparent`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-poppins font-bold text-brand-dark text-sm leading-snug">
                {name}
              </h3>
              {popular && (
                <span className="text-[10px] font-bold bg-brand-gold/20 text-amber-800 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                  {popularLabel}
                </span>
              )}
              {spicy && (
                <span className="text-[10px] font-bold bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                  {spicyLabel}
                </span>
              )}
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mt-0.5 line-clamp-2">{description}</p>
            {item.note && (
              <p className="text-[10px] text-amber-700 mt-1 font-medium">{item.note}</p>
            )}
          </div>
          <span className="font-poppins font-black text-brand-red text-sm whitespace-nowrap flex-shrink-0 pt-0.5">
            {item.price}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function MenuSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const categoryTranslations: Record<string, string> = t.menu.categories;
  const itemTranslations: Record<string, ItemTranslation> = t.menu.items as Record<string, ItemTranslation>;

  const handleCategory = (id: MenuCategory | 'all') => {
    setActiveCategory(id);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filtered =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  // Group items by category for the "all" view
  const grouped = categories
    .filter((c) => c.id !== 'all')
    .map((c) => ({
      ...c,
      items: menuItems.filter((item) => item.category === c.id),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="menu-heading">
      {/* Sticky tab bar anchor */}
      <div ref={sectionRef} className="relative">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            {t.menu.eyebrow}
          </p>
          <h2 id="menu-heading" className="section-title mb-4">
            {t.menu.heading}
          </h2>
          <p className="section-subtitle mx-auto text-center">{t.menu.subtitle}</p>
        </div>

        {/* Sticky Category Tabs */}
        <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="flex gap-2 overflow-x-auto py-3 scrollbar-none"
              role="tablist"
              aria-label={t.menu.categoriesAriaLabel}
            >
              {categories.map(({ id }) => {
                const count =
                  id === 'all'
                    ? menuItems.length
                    : menuItems.filter((i) => i.category === id).length;
                return (
                  <button
                    key={id}
                    role="tab"
                    aria-selected={activeCategory === id}
                    onClick={() => handleCategory(id)}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                      activeCategory === id
                        ? 'bg-brand-red text-white shadow-md shadow-brand-red/25'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <span aria-hidden="true">{CATEGORY_ICONS[id]}</span>
                    {categoryTranslations[id] ?? id}
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        activeCategory === id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          {activeCategory === 'all' ? (
            /* Grouped view — all categories with section headers */
            <div className="space-y-12">
              {grouped.map(({ id, items }) => (
                <div key={id}>
                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">{CATEGORY_ICONS[id]}</span>
                    <h3 className="font-bebas text-3xl text-brand-dark tracking-wide">
                      {categoryTranslations[id] ?? id}
                    </h3>
                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      {items.length}
                    </span>
                    <div className="flex-1 h-px bg-gray-100 ml-1" />
                    <button
                      onClick={() => handleCategory(id as MenuCategory)}
                      className="text-xs font-semibold text-brand-red hover:underline whitespace-nowrap"
                    >
                      See all →
                    </button>
                  </div>

                  {/* Items in 2-col grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 bg-white rounded-2xl border border-gray-100 px-5 divide-y divide-gray-100 md:divide-y-0">
                    {items.map((item) => {
                      const tr = itemTranslations[item.id];
                      return (
                        <MenuItemRow
                          key={item.id}
                          item={item}
                          name={tr?.name ?? item.name}
                          description={tr?.description ?? item.description}
                          popular={item.popular}
                          spicy={item.spicy}
                          popularLabel={t.menu.popular}
                          spicyLabel={t.menu.spicy}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Filtered single-category view */
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl" aria-hidden="true">{CATEGORY_ICONS[activeCategory]}</span>
                <h3 className="font-bebas text-3xl text-brand-dark tracking-wide">
                  {categoryTranslations[activeCategory] ?? activeCategory}
                </h3>
                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                  {filtered.length}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 bg-white rounded-2xl border border-gray-100 px-5 divide-y divide-gray-100 md:divide-y-0">
                {filtered.map((item) => {
                  const tr = itemTranslations[item.id];
                  return (
                    <MenuItemRow
                      key={item.id}
                      item={item}
                      name={tr?.name ?? item.name}
                      description={tr?.description ?? item.description}
                      popular={item.popular}
                      spicy={item.spicy}
                      popularLabel={t.menu.popular}
                      spicyLabel={t.menu.spicy}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* Call CTA */}
          <div className="mt-14 bg-brand-dark rounded-3xl p-8 md:p-10 text-center">
            <h3 className="font-poppins font-bold text-2xl text-white mb-2">
              {t.menu.phoneCtaHeading}
            </h3>
            <p className="text-gray-400 mb-6">{t.menu.phoneCtaBody}</p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 min-h-[56px]"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
