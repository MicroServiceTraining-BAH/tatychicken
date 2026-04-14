import type { Metadata } from 'next';
import ContactPageHero from '@/components/ContactPageHero';
import ContactSection from '@/components/ContactSection';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Contact & Location',
  description: `Visit Taty's Chicken at ${siteConfig.address}. Call us at ${siteConfig.phone}. Mon–Sat 11am–9pm, Sun 12pm–8pm.`,
};

export default function ContactPage() {
  return (
    <>
      <ContactPageHero />
      <Reveal>
        <ContactSection />
      </Reveal>
    </>
  );
}
