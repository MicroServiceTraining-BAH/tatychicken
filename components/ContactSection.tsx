'use client';

import { useState, type FormEvent } from 'react';
import { siteConfig } from '@/lib/metadata';

type FormState = {
  name: string;
  contact: string;
  message: string;
};

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', contact: '', message: '' });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('loading');
    // Simulate form submission
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
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>📍</span>
            <span>Find Us</span>
          </div>
          <h2 id="contact-heading" className="section-title mb-4">
            Come Visit Us
          </h2>
          <p className="section-subtitle mx-auto text-center">
            We&apos;re ready to serve you. Stop in or give us a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-8">
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">📞</div>
                <div className="font-poppins font-bold text-brand-dark text-lg mb-1">Call Us</div>
                <a
                  href={siteConfig.phoneHref}
                  className="text-brand-red font-semibold hover:text-brand-red-dark transition-colors text-lg"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">📍</div>
                <div className="font-poppins font-bold text-brand-dark text-lg mb-1">Location</div>
                <address className="not-italic text-gray-600 text-sm leading-relaxed">
                  {siteConfig.address}
                </address>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sm:col-span-2">
                <div className="text-3xl mb-3">🕐</div>
                <div className="font-poppins font-bold text-brand-dark text-lg mb-2">Hours</div>
                <div className="space-y-1 text-gray-600">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Mon – Sat</span>
                    <span>11:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Sunday</span>
                    <span>12:00 PM – 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-56">
              <iframe
                title="Taty's Chicken location map"
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
              Send a Message
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              For catering inquiries, feedback, or questions. We&apos;ll get back to you quickly.
            </p>

            {submitState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="font-poppins font-bold text-xl text-brand-dark mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-500">
                  Thanks for reaching out. We&apos;ll be in touch soon.
                </p>
                <button
                  onClick={() => setSubmitState('idle')}
                  className="mt-6 text-brand-red font-semibold hover:text-brand-red-dark transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-brand-dark mb-2"
                  >
                    Your Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Maria Rodriguez"
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
                    Phone or Email <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="contact-contact"
                    type="text"
                    required
                    placeholder="(305) 555-0100 or you@email.com"
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
                    Message <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell us about your catering needs or ask us anything..."
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
                  {submitState === 'loading' ? 'Sending your message...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
