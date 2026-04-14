import type { Metadata } from 'next';
import Script from 'next/script';
import { siteConfig } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Order Online',
  description:
    "Order fresh, crispy Latin-style fried chicken online for pickup at Taty's Chicken in Manassas, VA.",
};

export default function OrderPage() {
  return (
    <>
      {/*
       * GloriaFood Embedder Script
       *
       * Find your CUID and RUID in the GloriaFood dashboard:
       *   1. Log in at https://www.gloriafood.com
       *   2. Go to  Admin Panel → Setup → Ordering Widget
       *   3. Click "Get the code" — copy the values for
       *      data-glf-cuid  (restaurant / chain UID)
       *      data-glf-ruid  (individual restaurant UID)
       *   4. Replace the two placeholder strings in the <span> below.
       */}
      <Script src="https://www.fbgcdn.com/embedder/js/ewm2.js" strategy="afterInteractive" />

      <main className="min-h-screen bg-brand-dark flex flex-col items-center justify-center px-4 pt-24 pb-20 text-center">
        {/* Eyebrow */}
        <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-5">
          Order Online · Pickup
        </p>

        {/* Headline */}
        <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5">
          Fresh Chicken,{' '}
          <span className="text-brand-gold">Ready&nbsp;When&nbsp;You&nbsp;Are</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg max-w-sm mb-14 leading-relaxed">
          Order ahead for in-store pickup — hot, crispy, and made fresh every time.
        </p>

        {/* ── GloriaFood embed ────────────────────────────────────────────
         *  Replace REPLACE_WITH_CUID and REPLACE_WITH_RUID with the values
         *  from your GloriaFood dashboard (see script comment above).
         *  The embedder script transforms this <span> into a styled button.
         * ──────────────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center">
          <span
            className="glf-button"
            data-glf-cuid="REPLACE_WITH_CUID"
            data-glf-ruid="REPLACE_WITH_RUID"
          >
            Order Now
          </span>
        </div>

        {/* Divider */}
        <div className="mt-16 w-full max-w-xs border-t border-white/10" />

        {/* Fallback — call to order */}
        <p className="mt-8 text-gray-500 text-sm">
          Prefer to call?{' '}
          <a
            href={siteConfig.phoneHref}
            className="text-brand-gold hover:text-brand-gold-dark font-semibold transition-colors"
          >
            {siteConfig.phone}
          </a>
        </p>
      </main>
    </>
  );
}
