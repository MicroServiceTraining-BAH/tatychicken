import Link from 'next/link';
import { siteConfig } from '@/lib/metadata';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" role="img" aria-hidden="true">🍗</span>
              <span className="font-poppins font-black text-xl">
                Taty&apos;s{' '}
                <span className="text-brand-gold">Chicken</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Latin-inspired crispy fried chicken made fresh daily. Your neighborhood&apos;s
              favorite spot for bold flavor and fast service.
            </p>
            <a
              href={siteConfig.orderLink}
              className="inline-flex items-center gap-2 mt-6 bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              🛒 Order Now
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-poppins font-bold text-white mb-5">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-poppins font-bold text-white mb-5">Hours & Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-brand-gold transition-colors font-medium"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <address className="not-italic">{siteConfig.address}</address>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <span className="mt-0.5">🕐</span>
                <div>
                  <div>{siteConfig.hours.weekdays}</div>
                  <div>{siteConfig.hours.weekend}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Taty&apos;s Chicken · All Rights Reserved</p>
          <p>
            Made by{' '}
            <a
              href="https://lvluplocal.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-gold-dark transition-colors font-medium"
            >
              Level Up Local
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
