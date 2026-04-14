'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/metadata';
import { useLanguage } from '@/lib/language-context';

type OrderModalProps = {
  onClose: () => void;
};

export default function OrderModal({ onClose }: OrderModalProps) {
  const { t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-heading"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-brand-dark px-6 pt-6 pb-5">
          <div className="flex items-start justify-between">
            <div>
              <h2
                id="order-modal-heading"
                className="font-poppins font-black text-xl text-white"
              >
                {t.orderModal.heading}
              </h2>
              <p className="text-gray-400 text-sm mt-0.5">{t.orderModal.subheading}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 -mr-1 -mt-1"
              aria-label={t.orderModal.close}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="p-4 space-y-3">
          {/* Toast — Online Order (pickup only) — featured first */}
          <a
            href={siteConfig.toastLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center gap-4 w-full bg-brand-dark hover:bg-brand-red text-white rounded-2xl p-5 transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/20 hover:scale-[1.01] active:scale-[0.99]"
          >
            <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
              <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-poppins font-bold text-base">{t.orderModal.toastLabel}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-gold text-brand-dark px-1.5 py-0.5 rounded-md">Pickup</span>
              </div>
              <div className="text-gray-400 group-hover:text-white/70 text-sm transition-colors">{t.orderModal.toastSub}</div>
            </div>
            <svg className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* DoorDash — Delivery */}
          <a
            href={siteConfig.doordashLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center gap-4 w-full bg-[#FF3008] hover:bg-[#E02000] text-white rounded-2xl p-5 transition-all duration-200 hover:shadow-xl hover:shadow-red-600/25 hover:scale-[1.01] active:scale-[0.99]"
          >
            <div className="w-11 h-11 rounded-xl bg-white/15 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-poppins font-bold text-base">{t.orderModal.doordashLabel}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-1.5 py-0.5 rounded-md">Delivery</span>
              </div>
              <div className="text-red-200 text-sm">{t.orderModal.doordashSub}</div>
            </div>
            <svg className="w-4 h-4 text-red-300 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* Phone */}
          <a
            href={siteConfig.phoneHref}
            onClick={onClose}
            className="group flex items-center gap-4 w-full bg-brand-cream hover:bg-brand-gold/10 border border-gray-200 hover:border-brand-gold rounded-2xl p-5 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-gold/10 group-hover:bg-brand-gold/20 flex items-center justify-center flex-shrink-0 transition-colors">
              <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <div className="font-poppins font-bold text-base text-brand-dark">{t.orderModal.callLabel}</div>
              <div className="text-gray-500 text-sm">{siteConfig.phone}</div>
            </div>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-gold group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Safe-area spacer for mobile */}
        <div className="h-4 sm:hidden" />
      </div>
    </div>
  );
}
