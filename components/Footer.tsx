'use client';

import { siteConfig } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container-custom px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-brand-orange">Solven</span>{' '}
              <span className="text-white">Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-kundeservice som faktisk leverer resultater.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-400">
              <p>{siteConfig.fullName}</p>
              <p>{siteConfig.contact.address}</p>
              <p>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-brand-orange transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-orange transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Juridisk</h3>
            <div className="space-y-2 text-gray-400">
              <a href="/personvern" className="block hover:text-brand-orange transition-colors">
                Personvern
              </a>
              <a href="/vilkar" className="block hover:text-brand-orange transition-colors">
                Vilkår
              </a>
              <a href="/dpa" className="block hover:text-brand-orange transition-colors">
                DPA
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} {siteConfig.fullName}. Alle priser på siden er eksempler – endelig pris fremgår av signert ordre.
          </p>
        </div>
      </div>
    </footer>
  );
}
