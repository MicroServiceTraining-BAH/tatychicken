'use client';

import { useState } from 'react';

export default function PDFMenuViewer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-brand-dark" aria-labelledby="pdf-menu-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Visual Menu
          </p>
          <h2 id="pdf-menu-heading" className="font-bebas text-5xl md:text-6xl text-white leading-none tracking-wide mb-4">
            Browse Our Full Menu
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Prefer pictures? Scroll through our printable menu below to see everything we offer.
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
          {/* Loading skeleton */}
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gray-900 z-10">
              <svg
                className="animate-spin text-brand-gold"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              <p className="text-gray-400 text-sm">Loading menu...</p>
            </div>
          )}

          <iframe
            src="/menu-taty.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="Taty's Chicken full menu PDF"
            className="w-full"
            style={{ height: '80vh', minHeight: '600px' }}
            onLoad={() => setLoaded(true)}
          />
        </div>

        {/* Download fallback */}
        <div className="text-center mt-6">
          <a
            href="/menu-taty.pdf"
            download
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF Menu
          </a>
        </div>
      </div>
    </section>
  );
}
