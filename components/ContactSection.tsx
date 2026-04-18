'use client';

import { useState, type FormEvent } from 'react';
import { siteConfig } from '@/lib/metadata';
import { useLanguage } from '@/lib/language-context';

type FormState = {
  name: string;
  contact: string;
  message: string;
};

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>({ name: '', contact: '', message: '' });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('loading');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitState('success');
    setForm({ name: '', contact: '', message: '' });
  };

  const isValid = form.name.trim() && form.contact.trim() && form.message.trim();

  return (
    <section className="py-20 md:py-28 bg-brand-muted" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            {t.contact.eyebrow}
          </p>
          <h2 id="contact-heading" className="section-title mb-4">
            {t.contact.heading}
          </h2>
          <p className="section-subtitle mx-auto text-center">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-brand-red mb-3"><PhoneIcon /></div>
                <div className="font-poppins font-bold text-brand-dark text-base mb-1">{t.contact.callUsHeading}</div>
                <a
                  href={siteConfig.phoneHref}
                  className="text-brand-red font-semibold hover:text-brand-red-dark transition-colors text-lg"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-brand-red mb-3"><MapIcon /></div>
                <div className="font-poppins font-bold text-brand-dark text-base mb-1">{t.contact.locationHeading}</div>
                <address className="not-italic text-gray-600 text-sm leading-relaxed">
                  {siteConfig.address}
                </address>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sm:col-span-2">
                <div className="text-brand-red mb-3"><ClockIcon /></div>
                <div className="font-poppins font-bold text-brand-dark text-base mb-3">{t.contact.hoursHeading}</div>
                <div className="space-y-1.5 text-gray-600">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{t.contact.monTue}</span>
                    <span>{t.contact.monTueHours}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{t.contact.wedThu}</span>
                    <span>{t.contact.wedThuHours}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{t.contact.fri}</span>
                    <span>{t.contact.friHours}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{t.contact.sat}</span>
                    <span>{t.contact.satHours}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{t.contact.sunday}</span>
                    <span>{t.contact.sundayHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-60 flex-1">
              <iframe
                title={t.contact.mapTitle}
                src={siteConfig.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-poppins font-bold text-2xl text-brand-dark mb-2">
              {t.contact.formHeading}
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              {t.contact.formSubtitle}
            </p>

            {submitState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-poppins font-bold text-xl text-brand-dark mb-2">
                  {t.contact.successHeading}
                </h4>
                <p className="text-gray-500">
                  {t.contact.successBody}
                </p>
                <button
                  onClick={() => setSubmitState('idle')}
                  className="mt-6 text-brand-red font-semibold hover:text-brand-red-dark transition-colors"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-brand-dark mb-2"
                  >
                    {t.contact.nameLabel} <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors text-brand-dark placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-contact"
                    className="block text-sm font-semibold text-brand-dark mb-2"
                  >
                    {t.contact.contactLabel} <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="contact-contact"
                    type="text"
                    required
                    placeholder={t.contact.contactPlaceholder}
                    value={form.contact}
                    onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors text-brand-dark placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-brand-dark mb-2"
                  >
                    {t.contact.messageLabel} <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors text-brand-dark placeholder-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isValid || submitState === 'loading'}
                  className="w-full bg-brand-red hover:bg-brand-red-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-[0.98] min-h-[56px]"
                  aria-busy={submitState === 'loading'}
                >
                  {submitState === 'loading' ? t.contact.submitLoading : t.contact.submitIdle}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
