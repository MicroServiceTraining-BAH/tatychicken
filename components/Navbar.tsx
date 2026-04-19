'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/metadata';
import { useLanguage } from '@/lib/language-context';
import OrderButton from './OrderButton';

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang, toggle } = useLanguage();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/menu', label: t.nav.menu },
    { href: '/about', label: t.nav.about },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || menuOpen ? 'bg-brand-dark/95 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center h-16 md:h-20">

              {/* Logo — absolute left, overflows navbar */}
              <Link
                href="/"
                className="absolute left-0 flex items-center group"
                aria-label={t.nav.logoAriaLabel}
              >
                <div className={`rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xl border-2 border-white/80 transition-all duration-500 ease-in-out ${scrolled ? 'w-11 h-11 translate-y-0' : 'w-24 h-24 translate-y-4'}`}>
                  <Image
                    src="/logo.jpg"
                    alt={t.nav.logoAlt}
                    width={96}
                    height={96}
                    className={`object-contain transition-all duration-500 ${scrolled ? 'w-9 h-9' : 'w-[88px] h-[88px]'}`}
                    priority
                  />
                </div>
              </Link>

              {/* Centered nav links */}
              <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`px-4 py-2 rounded-full font-bebas tracking-widest transition-all duration-200 ${
                      !scrolled ? 'text-lg' : 'text-base'
                    } ${
                      pathname === href
                        ? 'text-brand-gold'
                        : !scrolled
                        ? 'text-white hover:text-brand-gold hover:bg-white/10 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Right side: lang toggle | socials | Order CTA */}
              <div className={`absolute right-0 hidden md:flex items-center gap-3 ${!scrolled ? '[text-shadow:0_1px_8px_rgba(0,0,0,0.8)]' : ''}`}>
                {/* Language toggle — visually distinct from socials */}
                <button
                  onClick={toggle}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/30 text-gray-300 hover:text-white hover:border-white/60 font-bold text-xs tracking-widest transition-all duration-200"
                  aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
                  {t.nav.toggleLang}
                </button>

                <div className="w-px h-5 bg-white/20" />

                {/* Social icons */}
                <a
                  href={siteConfig.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.nav.instagramAriaLabel}
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/60 transition-all duration-200"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={siteConfig.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.nav.facebookAriaLabel}
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/60 transition-all duration-200"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={siteConfig.tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/60 transition-all duration-200"
                >
                  <TikTokIcon />
                </a>

                <div className="w-px h-5 bg-white/20" />

                <OrderButton className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/40 hover:scale-105 active:scale-95">
                  {t.nav.orderDelivery}
                </OrderButton>
              </div>

              {/* Mobile right: hamburger */}
              <div className="absolute right-0 md:hidden flex items-center gap-2">
                <button
                  className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-expanded={menuOpen}
                  aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
                >
                  <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                    <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                  </div>
                </button>
              </div>

            </div>
          </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark flex flex-col transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 pt-24">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }, idx) => (
              <Link
                key={href}
                href={href}
                className={`font-bebas tracking-widest text-4xl py-3 border-b border-white/10 transition-all duration-200 ${
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
              href={siteConfig.doordashLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-red text-white font-bold text-xl text-center py-4 rounded-2xl hover:bg-brand-red-dark transition-colors block"
            >
              {t.nav.orderOnDoorDash}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="border-2 border-brand-gold text-brand-gold font-bold text-xl text-center py-4 rounded-2xl hover:bg-brand-gold hover:text-brand-dark transition-colors"
            >
              {t.nav.callUs}
            </a>
          </div>
          <div className="flex items-center justify-center gap-5 mt-8">
            <a
              href={siteConfig.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.nav.instagramAriaLabel}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.nav.facebookAriaLabel}
              className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <FacebookIcon />
            </a>
            <a
              href={siteConfig.tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <TikTokIcon />
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
