import Image from 'next/image';
import { siteConfig } from '@/lib/metadata';

export default function DeliveryBanner() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="delivery-heading"
    >
      {/* Background image — dimmed heavily so text stays legible */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1562967914-608f82629710?w=1920&q=80"
          alt="Crispy golden fried chicken pieces ready for delivery"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
      </div>

      {/* Solid dark red base — guarantees contrast on all devices */}
      <div className="absolute inset-0 bg-[#B50F1E]" />

      {/* Subtle vignette: left fully opaque, right lets image peek through */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9B0D1A] via-[#B50F1E]/95 to-[#B50F1E]/80" />

      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0px, #fff 2px, transparent 2px, transparent 20px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Copy */}
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-red-200 font-semibold text-sm uppercase tracking-widest mb-4">
              Now Available on DoorDash
            </p>

            <h2
              id="delivery-heading"
              className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5"
            >
              Hot Chicken,
              <br />
              <span className="text-yellow-300">Right to Your Door.</span>
            </h2>

            <p className="text-red-100 text-lg md:text-xl leading-relaxed mb-10">
              Skip the line. Order Taty&apos;s fresh, crispy chicken delivered straight to you —
              available now on DoorDash.
            </p>

            <a
              href={siteConfig.doordashLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on DoorDash"
              className="group inline-flex items-center gap-3 bg-white text-[#B50F1E] font-black text-xl px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30 active:scale-95"
            >
              Order on DoorDash
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right: Stats card */}
          <div className="flex-shrink-0 w-full max-w-xs">
            <div
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
            >
              <div className="relative h-32 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=85"
                  alt="Crispy fried chicken wings with dipping sauce"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-white">
                <div>
                  <div className="font-poppins font-black text-2xl">~30</div>
                  <div className="text-red-200 text-xs font-medium mt-0.5">Min</div>
                </div>
                <div className="border-x border-white/20">
                  <div className="font-poppins font-black text-2xl">Hot</div>
                  <div className="text-red-200 text-xs font-medium mt-0.5">Fresh</div>
                </div>
                <div>
                  <div className="font-poppins font-black text-2xl">Fast</div>
                  <div className="text-red-200 text-xs font-medium mt-0.5">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
