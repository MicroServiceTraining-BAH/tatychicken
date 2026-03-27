'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/metadata';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-brand-dark/95 backdrop-blur-md shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" aria-label="Taty's Chicken Home">
              <span className="text-2xl" role="img" aria-hidden="true">🍗</span>
              <span className="font-poppins font-black text-xl text-white tracking-tight">
                Taty&apos;s{' '}
                <span className="text-brand-gold">Chicken</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                    pathname === href
                      ? 'text-brand-gold font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={siteConfig.phoneHref}
                className="text-sm text-gray-300 hover:text-brand-gold transition-colors font-medium flex items-center gap-1.5"
              >
                <span aria-hidden="true">📞</span>
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.orderLink}
                className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Order Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    menuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark flex flex-col transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 pt-20">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }, idx) => (
              <Link
                key={href}
                href={href}
                className={`text-3xl font-poppins font-bold py-3 border-b border-white/10 transition-all duration-200 ${
                  pathname === href ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-4">
            <a
              href={siteConfig.orderLink}
              className="bg-brand-red text-white font-bold text-xl text-center py-4 rounded-2xl hover:bg-brand-red-dark transition-colors"
            >
              🛒 Order Now
            </a>
            <a
              href={siteConfig.phoneHref}
              className="border-2 border-brand-gold text-brand-gold font-bold text-xl text-center py-4 rounded-2xl hover:bg-brand-gold hover:text-brand-dark transition-colors"
            >
              📞 Call Us
            </a>
          </div>
        </div>
        <div className="pb-12 px-8 text-center text-gray-500 text-sm">
          {siteConfig.phone} · {siteConfig.hours.weekdays}
        </div>
      </div>
    </>
  );
}
