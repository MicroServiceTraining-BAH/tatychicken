'use client';

import { useState } from 'react';

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

export default function MenuSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');

  const filtered =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const categoryTranslations = t.menu.categories as Record<string, string>;
  const itemTranslations = t.menu.items as Record<string, ItemTranslation>;

  return (
    <section className="py-20 md:py-28 bg-brand-cream" aria-labelledby="menu-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            {t.menu.eyebrow}
          </p>
          <h2 id="menu-heading" className="section-title mb-4">
            {t.menu.heading}
          </h2>
          <p className="section-subtitle mx-auto text-center">{t.menu.subtitle}</p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center"
          role="tablist"
          aria-label={t.menu.categoriesAriaLabel}
        >
          {categories.map(({ id }) => {
            const count =
              id === 'all' ? menuItems.length : menuItems.filter((i) => i.category === id).length;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={activeCategory === id}
                aria-controls={`menu-panel-${id}`}
                onClick={() => setActiveCategory(id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === id
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span aria-hidden="true">{CATEGORY_ICONS[id]}</span>
                {categoryTranslations[id] ?? id}
                <span
                  className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                    activeCategory === id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div
          id={`menu-panel-${activeCategory}`}
          role="tabpanel"
          aria-label={`${categoryTranslations[activeCategory] ?? activeCategory} menu items`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((item) => {
            const tr = itemTranslations[item.id];
            const name = tr?.name ?? item.name;
            const description = tr?.description ?? item.description;
            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-2 hover:shadow-md hover:border-gray-200 transition-all duration-200"
              >
                {/* Name + Price row */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-poppins font-bold text-brand-dark text-base leading-tight flex-1">
                    {name}
                  </h3>
                  <span className="font-poppins font-black text-brand-red text-base whitespace-nowrap flex-shrink-0">
                    {item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>

                {/* Note */}
                {item.note && (
                  <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-2.5 py-1 font-medium">
                    {item.note}
                  </p>
                )}

                {/* Badges */}
                {(item.popular || item.spicy) && (
                  <div className="flex gap-2 flex-wrap mt-0.5">
                    {item.popular && (
                      <span className="text-xs bg-brand-gold/20 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                        {t.menu.popular}
                      </span>
                    )}
                    {item.spicy && (
                      <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2 py-0.5 rounded-full">
                        {t.menu.spicy}
                      </span>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Item count summary */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Showing {filtered.length} item{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'all' && (
            <> in {categoryTranslations[activeCategory] ?? activeCategory}</>
          )}
        </p>

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
    </section>
  );
}
