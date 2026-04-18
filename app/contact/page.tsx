import type { Metadata } from 'next';
import ContactPageHero from '@/components/ContactPageHero';
import ContactSection from '@/components/ContactSection';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Contact & Location',
  description: `Visit Taty's Chicken at ${siteConfig.address}. Call us at ${siteConfig.phone}. Mon–Tue 11am–8pm, Wed–Thu 11am–9pm, Fri 11am–10pm, Sat 9am–10pm, Sun 9am–8pm.`,
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
