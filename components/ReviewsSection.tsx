'use client';

import { useLanguage } from '@/lib/language-context';

type Review = {
  name: string;
  text: string;
  rating: number;
  badge?: string;
};

const REVIEWS: Review[] = [
  {
    name: 'Audrey Melendez',
    rating: 5,
    text: 'The food was so delicious and fresh. Flavor was authentic and reminded me of my childhood in Peru. Service was great and the food was fast coming out. 100% would recommend.',
  },
  {
    name: 'A Nikaj',
    rating: 5,
    text: 'This amazing place has become my favorite place to dine since the first time I visited. Great food, great atmosphere and even greater staff and service. They are the sweetest people.',
  },
  {
    name: 'Lenni Alo',
    rating: 5,
    badge: 'Local Guide',
    text: "This is my partner's favorite place for ceviche. The prices seem a little pricey until you see the portions and how delicious the food is! I crave the Yuca fries from here with their green and yellow sauces.",
  },
  {
    name: 'Krissia Aguilera',
    rating: 5,
    text: "Tatys is the best Peruvian spot in Manassas. My family and I come here often since they opened and their customer service is always great.",
  },
  {
    name: 'Diego Herrera',
    rating: 5,
    text: 'The food as always was amazing! We love coming here for the flavor and the amazing staff! Jordan was great and offered us great service! We\'ll be here again soon!!',
  },
  {
    name: 'Nathan W',
    rating: 5,
    text: 'This is easily some of the best food in town, that more people should definitely be talking about.',
  },
  {
    name: 'Carolina M.',
    rating: 5,
    text: "Found this place overall very pleasant. Don't let the outside fool you. Once you're inside the atmosphere is great, the service is excellent, music is nice, and the food is amazing.",
  },
  {
    name: 'Julie Cruz',
    rating: 5,
    text: 'The food recommendation was amazing 10 out of 10. Our first time here, and we had a great experience.',
  },
  {
    name: 'Daigoro Tsukiashi',
    rating: 5,
    text: 'The food was amazing. The energy and vibes were great. The service was outstanding. Jordan our waiter took great care of us and provided an awesome experience.',
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? '#F5A800' : '#E5E7EB'}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function ReviewsSection() {
  const { t } = useLanguage();
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-16 bg-brand-dark overflow-hidden" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
          {t.reviews.eyebrow}
        </p>
        <h2 id="reviews-heading" className="section-title text-white mb-2">
          {t.reviews.heading}
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <Stars rating={5} />
          <span className="text-white font-bold text-lg">5.0</span>
          <span className="text-gray-400 text-sm">· {REVIEWS.length} {t.reviews.reviewCount}</span>
          <GoogleIcon />
        </div>
      </div>

      {/* CSS marquee */}
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee-slow hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
          {doubled.map((review, i) => (
            <article
              key={i}
              className="w-80 flex-shrink-0 mx-3 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-poppins font-bold text-white text-sm leading-tight">
                    {review.name}
                  </p>
                  {review.badge && (
                    <p className="text-brand-gold text-xs mt-0.5">{review.badge}</p>
                  )}
                </div>
                <GoogleIcon />
              </div>
              <Stars rating={review.rating} />
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
