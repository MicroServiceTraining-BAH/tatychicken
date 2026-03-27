import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import { siteConfig } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Contact & Location',
  description: `Visit Taty's Chicken at ${siteConfig.address}. Call us at ${siteConfig.phone}. Mon–Sat 11am–9pm, Sun 12pm–8pm.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="pt-16 md:pt-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-red/30 text-brand-red-light rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>📍</span>
            <span>Come Visit</span>
          </div>
          <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Find Us
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We&apos;re easy to find and even easier to love. Stop in today.
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

      <ContactSection />
    </>
  );
}
