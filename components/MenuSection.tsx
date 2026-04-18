'use client';

import { useState } from 'react';
import { menuItems, categories, type MenuCategory } from '@/lib/menu-data';
import { siteConfig } from '@/lib/metadata';
import { useLanguage } from '@/lib/language-context';

type ItemTranslation = { name: string; description: string };

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
          <p className="section-subtitle mx-auto text-center">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-none"
          role="tablist"
          aria-label={t.menu.categoriesAriaLabel}
        >
          {categories.map(({ id }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeCategory === id}
              aria-controls={`menu-panel-${id}`}
              onClick={() => setActiveCategory(id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeCategory === id
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {categoryTranslations[id] ?? id}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div
          id={`menu-panel-${activeCategory}`}
          role="tabpanel"
          aria-label={`${categoryTranslations[activeCategory] ?? activeCategory} menu items`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((item, idx) => {
            const tr = itemTranslations[item.id];
            const name = tr?.name ?? item.name;
            const description = tr?.description ?? item.description;
            return (
              <article
                key={item.id}
                className="card group p-5 flex items-start gap-4 animate-fade-up"
                style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'both' }}
              >
                {/* Color-coded category dot */}
                <div className="flex-shrink-0 w-10 h-10 bg-brand-muted rounded-xl flex items-center justify-center mt-0.5">
                  <span className="w-3 h-3 rounded-full bg-brand-red opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-poppins font-bold text-brand-dark text-base leading-tight">
                      {name}
                    </h3>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="font-poppins font-black text-brand-red text-base whitespace-nowrap">
                        {item.price}
                      </span>
                      {item.popular && (
                        <span className="text-xs bg-brand-gold/20 text-brand-gold-dark font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {t.menu.popular}
                        </span>
                      )}
                      {item.spicy && (
                        <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {t.menu.spicy}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call CTA */}
        <div className="mt-14 bg-brand-dark rounded-3xl p-8 md:p-10 text-center">
          <h3 className="font-poppins font-bold text-2xl text-white mb-2">
            {t.menu.phoneCtaHeading}
          </h3>
          <p className="text-gray-400 mb-6">
            {t.menu.phoneCtaBody}
          </p>
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
