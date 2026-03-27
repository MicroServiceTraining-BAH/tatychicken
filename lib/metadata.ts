import type { Metadata } from 'next';

export const siteConfig = {
  name: "Taty's Chicken",
  tagline: 'Crispy Latin-Style Fried Chicken',
  description:
    "Taty's Chicken in Manassas, VA — crispy, Latin-inspired fried chicken made fresh daily. Fast service, family portions, authentic flavor. Order now on DoorDash or visit us today.",
  url: 'https://tatyschicken.com',
  phone: '(703) 555-0123',
  phoneHref: 'tel:+17035550123',
  address: 'Manassas, VA',
  hours: {
    weekdays: 'Mon – Sat: 11am – 9pm',
    weekend: 'Sun: 12pm – 8pm',
  },
  doordashLink:
    "https://www.doordash.com/store/taty's-chicken-manassas-26346203/57620347/?cursor=eyJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxNzUsMTc2LDE3NywxNzksMTkzLDE5NSwyODRdfQ==&pickup=false",
  instagramLink: 'https://www.instagram.com/tatys.chicken?igsh=dzBod2VjMm9tc2ty',
  facebookLink:
    'https://www.facebook.com/tatyschicken?mibextid=wwXIfr&rdid=VScPzJol5J6LHibx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AMmRVy9jo%2F%3Fmibextid%3DwwXIfr',
  orderLink:
    "https://www.doordash.com/store/taty's-chicken-manassas-26346203/57620347/?cursor=eyJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxNzUsMTc2LDE3NywxNzksMTkzLDE5NSwyODRdfQ==&pickup=false",
  mapsLink: 'https://maps.google.com/?q=Taty%27s+Chicken+Manassas+VA',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.12!2d-77.4761!3d38.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64d3e9f1b1c1d%3A0x0!2sTaty%27s+Chicken+Manassas+VA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus',
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
    'best fried chicken Manassas VA',
    'Latin fried chicken',
    'chicken combos',
    'family meals',
    'crispy chicken',
    'chicken restaurant Manassas',
    "Taty's Chicken",
    'affordable chicken',
    'DoorDash chicken delivery',
    'takeout chicken Virginia',
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
