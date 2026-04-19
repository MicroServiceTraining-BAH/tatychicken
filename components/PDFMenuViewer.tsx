'use client';

export default function PDFMenuViewer() {
  return (
    <section className="py-20 md:py-28 bg-brand-dark" aria-labelledby="pdf-menu-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
          Visual Menu
        </p>
        <h2
          id="pdf-menu-heading"
          className="font-bebas text-5xl md:text-6xl text-white leading-none tracking-wide mb-4"
        >
          Prefer the Printable Menu?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Download our full menu PDF to browse every dish at your own pace — great for catering
          inquiries or sharing with friends.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/menu-taty.pdf"
            download
            className="inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-brand-gold/30 hover:scale-105 active:scale-95 min-h-[56px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Menu PDF
          </a>

          <a
            href="/menu-taty.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 min-h-[56px] border border-white/20"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open in Browser
          </a>
        </div>
      </div>
    </section>
  );
}
