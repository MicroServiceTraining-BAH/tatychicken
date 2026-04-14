'use client';

import { siteConfig } from '@/lib/metadata';
import { useLanguage } from '@/lib/language-context';
import OrderButton from './OrderButton';

export default function MobileCTA() {
  const { t } = useLanguage();

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-dark border-t border-white/10"
      aria-label={t.mobileCta.ariaLabel}
    >
      <div className="flex">
        <a
          href={siteConfig.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-sm border-r border-white/10 hover:bg-white/10 active:bg-white/20 transition-colors min-h-[56px]"
          aria-label={t.mobileCta.callAriaLabel}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          {t.mobileCta.callLabel}
        </a>
        <OrderButton
          className="flex-1 gap-2 py-4 bg-[#FF3008] hover:bg-[#E02000] active:bg-[#E02000] text-white font-bold text-sm transition-colors min-h-[56px]"
          aria-label={t.mobileCta.orderAriaLabel}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
          </svg>
          {t.mobileCta.orderLabel}
        </OrderButton>
      </div>
    </div>
  );
}
