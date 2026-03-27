import { siteConfig } from '@/lib/metadata';

export default function DeliveryBanner() {
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20"
      aria-labelledby="delivery-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3008] via-[#E02000] to-[#C01800]" />

      {/* Animated shimmer lines */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/20 blur-3xl"
          style={{ animation: 'pulse 4s ease-in-out infinite' }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl"
          style={{ animation: 'pulse 4s ease-in-out infinite 2s' }}
        />
      </div>

      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0px, #fff 2px, transparent 2px, transparent 20px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full px-4 py-1.5 text-sm font-bold mb-5 uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Now Delivering · DoorDash
            </div>

            <h2
              id="delivery-heading"
              className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
            >
              Crispy Chicken,
              <br />
              <span className="text-yellow-300">At Your Door.</span>
            </h2>

            <p className="text-red-100 text-lg md:text-xl max-w-md leading-relaxed mb-8">
              Skip the line. Order Taty&apos;s hot, fresh chicken straight to your door — right
              now on DoorDash.
            </p>

            {/* Delivery perks */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {[
                { icon: '⚡', text: 'Fast Delivery' },
                { icon: '🔥', text: 'Hot & Fresh' },
                { icon: '📱', text: 'Easy Ordering' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full"
                >
                  <span>{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={siteConfig.doordashLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on DoorDash"
              className="group inline-flex items-center gap-3 bg-white text-[#FF3008] font-black text-xl px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30 active:scale-95"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
            >
              {/* DoorDash wordmark-style text */}
              <span className="flex items-center gap-2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                Order on DoorDash
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 text-2xl">
                →
              </span>
            </a>
          </div>

          {/* Right: Visual card */}
          <div className="relative flex-shrink-0">
            {/* Main card */}
            <div
              className="relative bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-8 text-center"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
            >
              <div className="text-7xl mb-4 drop-shadow-lg" role="img" aria-label="Fried chicken delivery">
                🛵
              </div>
              <div className="text-white font-poppins">
                <div className="text-5xl font-black mb-1">30</div>
                <div className="text-red-200 font-semibold text-sm uppercase tracking-widest">
                  Min Avg Delivery
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 border-t border-white/20" />

              <div className="flex items-center justify-center gap-3">
                <div className="text-center">
                  <div className="text-3xl font-black text-white">🍗</div>
                  <div className="text-red-200 text-xs font-semibold mt-1">Fresh</div>
                </div>
                <div className="text-white/40 text-2xl">·</div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">🔥</div>
                  <div className="text-red-200 text-xs font-semibold mt-1">Hot</div>
                </div>
                <div className="text-white/40 text-2xl">·</div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">⚡</div>
                  <div className="text-red-200 text-xs font-semibold mt-1">Fast</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 bg-yellow-400 text-brand-dark font-black text-xs px-3 py-2 rounded-xl rotate-12 shadow-lg uppercase tracking-wide"
            >
              Available Now!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
