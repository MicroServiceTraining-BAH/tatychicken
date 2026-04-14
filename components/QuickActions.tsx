'use client';

import { siteConfig } from '@/lib/metadata';
import { useLanguage } from '@/lib/language-context';

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
    </svg>
  );
}

const icons = [PhoneIcon, MapIcon, BagIcon];

export default function QuickActions() {
  const { t } = useLanguage();

  const actions = [
    {
      label: t.quickActions.callLabel,
      sublabel: siteConfig.phone,
      href: siteConfig.phoneHref,
      description: t.quickActions.callDescription,
      external: false,
    },
    {
      label: t.quickActions.directionsLabel,
      sublabel: t.quickActions.directionsSublabel,
      href: siteConfig.mapsLink,
      description: t.quickActions.directionsDescription,
      external: true,
    },
    {
      label: t.quickActions.doordashLabel,
      sublabel: t.quickActions.doordashSublabel,
      href: siteConfig.doordashLink,
      description: t.quickActions.doordashDescription,
      external: true,
    },
  ];

  return (
    <section className="bg-brand-dark py-4" aria-label="Quick actions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {actions.map(({ label, sublabel, href, description, external }, idx) => {
            const Icon = icons[idx];
            return (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={description}
                className="group flex items-center gap-4 bg-brand-dark px-6 py-5 hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-brand-gold transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                  <Icon />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
