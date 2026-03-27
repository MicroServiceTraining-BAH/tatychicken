'use client';

import { useState } from 'react';
import { menuItems, categories, type MenuCategory } from '@/lib/menu-data';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');

  const filtered =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-brand-cream" aria-labelledby="menu-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>🍽️</span>
            <span>What We Serve</span>
          </div>
          <h2 id="menu-heading" className="section-title mb-4">
            Our Menu
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Everything made fresh, every day. Pick your favorites.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-none"
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map(({ id, label, emoji }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeCategory === id}
              aria-controls={`menu-panel-${id}`}
              onClick={() => setActiveCategory(id)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeCategory === id
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span aria-hidden="true">{emoji}</span>
              {label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div
          id={`menu-panel-${activeCategory}`}
          role="tabpanel"
          aria-label={`${activeCategory} menu items`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((item) => (
            <article
              key={item.id}
              className="card group p-5 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl">
                {item.category === 'chicken' && '🍗'}
                {item.category === 'combos' && '🍱'}
                {item.category === 'sides' && '🍟'}
                {item.category === 'drinks' && '🥤'}
                {item.category === 'specials' && '⭐'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-poppins font-bold text-brand-dark text-base leading-tight">
                    {item.name}
                  </h3>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className="font-poppins font-black text-brand-red text-base whitespace-nowrap">
                      {item.price}
                    </span>
                    {item.popular && (
                      <span className="text-xs bg-brand-gold/20 text-brand-gold-dark font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                        Popular
                      </span>
                    )}
                    {item.spicy && (
                      <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                        🌶️ Spicy
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Call CTA */}
        <div className="mt-14 bg-brand-dark rounded-3xl p-8 md:p-10 text-center">
          <div className="text-4xl mb-4" role="img" aria-label="Phone">📞</div>
          <h3 className="font-poppins font-bold text-2xl text-white mb-2">
            Want to Order by Phone?
          </h3>
          <p className="text-gray-400 mb-6">
            Our team is ready to take your order. Call us and we&apos;ll have it hot and ready.
          </p>
          <a
            href="tel:+13055550123"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 min-h-[56px]"
          >
            📞 (305) 555-0123
          </a>
        </div>
      </div>
    </section>
  );
}
