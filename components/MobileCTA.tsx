import { siteConfig } from '@/lib/metadata';

export default function MobileCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-dark border-t border-white/10 safe-area-pb"
      aria-label="Quick order actions"
    >
      <div className="flex">
        <a
          href={siteConfig.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-sm border-r border-white/10 hover:bg-white/10 active:bg-white/20 transition-colors min-h-[56px]"
          aria-label="Call us to order"
        >
          <span role="img" aria-hidden="true">📞</span>
          Call Now
        </a>
        <a
          href={siteConfig.orderLink}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-red hover:bg-brand-red-dark active:bg-brand-red-dark text-white font-bold text-sm transition-colors min-h-[56px]"
          aria-label="Order online"
        >
          <span role="img" aria-hidden="true">🛒</span>
          Order Now
        </a>
      </div>
    </div>
  );
}
