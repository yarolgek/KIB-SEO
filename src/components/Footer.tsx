import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 pt-20 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/ai" className="hover:text-gray-900 dark:hover:text-white transition-colors">KI Lösungen</a></li>
                <li><a href="/local-seo" className="hover:text-gray-900 dark:hover:text-white transition-colors">Local SEO</a></li>
                <li><a href="/seo" className="hover:text-gray-900 dark:hover:text-white transition-colors">SEO</a></li>
                <li><a href="/seo-services" className="hover:text-gray-900 dark:hover:text-white transition-colors">SEO Services</a></li>
                <li><a href="/seo-analyse" className="hover:text-gray-900 dark:hover:text-white transition-colors">SEO Analyse</a></li>
                <li><a href="/website-erstellung" className="hover:text-gray-900 dark:hover:text-white transition-colors">Website Erstellung</a></li>
                <li><a href="/website-optimierung" className="hover:text-gray-900 dark:hover:text-white transition-colors">Website Optimierung</a></li>
                <li><a href="/landing-page-design" className="hover:text-gray-900 dark:hover:text-white transition-colors">Landing Page Design</a></li>
                <li><a href="/google-ads" className="hover:text-gray-900 dark:hover:text-white transition-colors">Google Ads Management</a></li>
                <li><a href="/facebook-ads" className="hover:text-gray-900 dark:hover:text-white transition-colors">Facebook Ads</a></li>
              </ul>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/meta-ads" className="hover:text-gray-900 dark:hover:text-white transition-colors">Meta Ads</a></li>
                <li><a href="/digitale-werbung" className="hover:text-gray-900 dark:hover:text-white transition-colors">Digitale Werbung</a></li>
                <li><a href="/search-engine-marketing" className="hover:text-gray-900 dark:hover:text-white transition-colors">Search Engine Marketing</a></li>
                <li><a href="/email-marketing" className="hover:text-gray-900 dark:hover:text-white transition-colors">Email Marketing</a></li>
                <li><a href="/google-maps-optimierung" className="hover:text-gray-900 dark:hover:text-white transition-colors">Google Maps Optimierung</a></li>
                <li><a href="/google-business-profile" className="hover:text-gray-900 dark:hover:text-white transition-colors">Google Business Profile</a></li>
                <li><a href="/google-business-profile" className="hover:text-gray-900 dark:hover:text-white transition-colors">Google My Business</a></li>
                <li><a href="/lead-generierung" className="hover:text-gray-900 dark:hover:text-white transition-colors">Lead Generierung</a></li>
                <li><a href="/conversion-optimierung" className="hover:text-gray-900 dark:hover:text-white transition-colors">Conversion Optimierung</a></li>
                <li><a href="/web-analyse-setup" className="hover:text-gray-900 dark:hover:text-white transition-colors">Web Analyse Setup</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Regionen</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/regionen" className="hover:text-gray-900 dark:hover:text-white transition-colors">Alle Regionen</a></li>
                <li><a href="/regionen/rheydt" className="hover:text-gray-900 dark:hover:text-white transition-colors">Rheydt</a></li>
                <li><a href="/regionen/wickrath" className="hover:text-gray-900 dark:hover:text-white transition-colors">Wickrath</a></li>
                <li><a href="/regionen/odenkirchen" className="hover:text-gray-900 dark:hover:text-white transition-colors">Odenkirchen</a></li>
                <li><a href="/regionen/giesenkirchen" className="hover:text-gray-900 dark:hover:text-white transition-colors">Giesenkirchen</a></li>
                <li><a href="/regionen/hardterbroich" className="hover:text-gray-900 dark:hover:text-white transition-colors">Hardterbroich</a></li>
                <li><a href="/regionen/holt" className="hover:text-gray-900 dark:hover:text-white transition-colors">Holt</a></li>
                <li><a href="/regionen/geistenbeck" className="hover:text-gray-900 dark:hover:text-white transition-colors">Geistenbeck</a></li>
              </ul>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/regionen/eicken" className="hover:text-gray-900 dark:hover:text-white transition-colors">Eicken</a></li>
                <li><a href="/regionen/rheindahlen" className="hover:text-gray-900 dark:hover:text-white transition-colors">Rheindahlen</a></li>
                <li><a href="/regionen/korschenbroich" className="hover:text-gray-900 dark:hover:text-white transition-colors">Korschenbroich</a></li>
                <li><a href="/regionen/grevenbroich" className="hover:text-gray-900 dark:hover:text-white transition-colors">Grevenbroich</a></li>
                <li><a href="/regionen/erkelenz" className="hover:text-gray-900 dark:hover:text-white transition-colors">Erkelenz</a></li>
                <li><a href="/regionen/moenchengladbach-sued" className="hover:text-gray-900 dark:hover:text-white transition-colors">MG Süd</a></li>
                <li><a href="/regionen/moenchengladbach-nord" className="hover:text-gray-900 dark:hover:text-white transition-colors">MG Nord</a></li>
                <li><a href="/regionen/moenchengladbach-ost" className="hover:text-gray-900 dark:hover:text-white transition-colors">MG Ost</a></li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.home')}</a></li>
                <li><a href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.about')}</a></li>
                <li><a href="/#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.services')}</a></li>
                <li><a href="/regionen" className="hover:text-gray-900 dark:hover:text-white transition-colors">Regionen</a></li>
                <li><a href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.contact')}</a></li>
                <li><a href="/imprint" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('footer.imprint')}</a></li>
                <li><a href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('footer.privacy')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>info@kibrueder.de</li>
                <li>+49 178 1698587</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 text-sm text-center">
          <p>© 2025 KI Brueder.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
