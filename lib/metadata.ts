import type { Metadata } from 'next';

export const siteConfig = {
  name: "Taty's Chicken",
  tagline: 'Crispy Latin-Style Fried Chicken',
  description:
    "Taty's Chicken serves crispy, Latin-inspired fried chicken with bold flavors. Fresh, fast, and affordable. Order now or visit us today.",
  url: 'https://tatyschicken.com',
  phone: '(305) 555-0123',
  phoneHref: 'tel:+13055550123',
  address: '123 Main Street, Miami, FL 33101',
  hours: {
    weekdays: 'Mon – Sat: 11am – 9pm',
    weekend: 'Sun: 12pm – 8pm',
  },
  orderLink: 'https://tatyschicken.com/order',
  mapsLink: 'https://maps.google.com/?q=Taty%27s+Chicken+Miami+FL',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.897!2d-80.1918!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ1JzQyLjEiTiA4MMKwMTEnMzAuNiJX!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus',
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'fried chicken near me',
    'best fried chicken Miami',
    'Latin fried chicken',
    'chicken combos',
    'family meals',
    'crispy chicken',
    'chicken restaurant',
    "Taty's Chicken",
    'affordable chicken',
    'takeout chicken',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
