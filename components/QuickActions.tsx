import { siteConfig } from '@/lib/metadata';

const actions = [
  {
    icon: '📞',
    label: 'Call Now',
    sublabel: siteConfig.phone,
    href: siteConfig.phoneHref,
    description: 'Place your order by phone',
  },
  {
    icon: '📍',
    label: 'Get Directions',
    sublabel: 'Find us on the map',
    href: siteConfig.mapsLink,
    description: 'Navigate to our location',
  },
  {
    icon: '🛒',
    label: 'Order Online',
    sublabel: 'Fast & easy pickup',
    href: siteConfig.orderLink,
    description: 'Order online for pickup',
  },
];

export default function QuickActions() {
  return (
    <section className="bg-brand-dark py-4" aria-label="Quick actions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {actions.map(({ icon, label, sublabel, href, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={description}
              className="group flex items-center gap-4 bg-brand-dark px-6 py-5 hover:bg-white/5 transition-all duration-300"
            >
              <span
                className="text-3xl transition-transform duration-300 group-hover:scale-125"
                role="img"
                aria-hidden="true"
              >
                {icon}
              </span>
              <div>
                <div className="font-poppins font-bold text-white text-base group-hover:text-brand-gold transition-colors">
                  {label}
                </div>
                <div className="text-gray-400 text-sm">{sublabel}</div>
              </div>
              <span className="ml-auto text-gray-600 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300 text-lg">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
