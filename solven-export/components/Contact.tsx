'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { siteConfig } from '@/lib/config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = async (email: string, label: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(label);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="kontakt" className="section-padding bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            La oss <span className="text-brand-orange">snakke</span> sammen
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Klar til å forbedre kundeservicen? Ta kontakt for en uforpliktende samtale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Kontaktinformasjon</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">E-post</div>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-lg hover:text-brand-orange transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Telefon</div>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-lg hover:text-brand-orange transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Adresse</div>
                  <div className="text-lg">{siteConfig.contact.address}</div>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-3">
              <p className="text-sm text-gray-400 text-center mb-4">
                Eller kopier e-postadresse direkte
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => copyEmail(siteConfig.contact.email, 'demo')}
                  className="flex-1 px-6 py-3 rounded-lg glass hover:glass-strong text-white font-medium text-center transition-all duration-200 hover:scale-105 focus-ring flex items-center justify-center gap-2"
                >
                  {copiedEmail === 'demo' ? (
                    <>
                      <Check className="w-4 h-4" />
                      Kopiert!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {siteConfig.contact.email}
                    </>
                  )}
                </button>
                <button
                  onClick={() => copyEmail(siteConfig.contact.supportEmail, 'support')}
                  className="flex-1 px-6 py-3 rounded-lg glass hover:glass-strong text-white font-medium text-center transition-all duration-200 hover:scale-105 focus-ring flex items-center justify-center gap-2"
                >
                  {copiedEmail === 'support' ? (
                    <>
                      <Check className="w-4 h-4" />
                      Kopiert!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {siteConfig.contact.supportEmail}
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send oss en melding</h3>
            
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400">
                Takk, vi svarer raskt!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Navn *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-post *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Selskap"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>

              <div>
                <textarea
                  placeholder="Melding *"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-brand-orange hover:bg-orange-600 text-white font-semibold transition-all duration-200 hover:scale-105 focus-ring disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {loading ? 'Sender...' : 'Send melding'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
