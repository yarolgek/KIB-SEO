import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';
import LazyImage from '../components/LazyImage';
import Footer from '../components/Footer';

function AboutPage() {
  const { t } = useLanguage();

  // Set page metadata for about page
  usePageMetadata({
    title: t('seo.about.title'),
    description: t('seo.about.description')
  });

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('about.title')}
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
            {t('about.description')}
          </p>
          
          {/* Additional About Content */}
          <div className="grid gap-8 mt-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.mission.description')}
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{t('about.values.title')}</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>{t('about.values.innovation')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>{t('about.values.customer')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>{t('about.values.improvement')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>{t('about.values.ethical')}</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('about.team.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Saman Ghajar */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
                <div className="mb-6">
                  <LazyImage
                    src="/1767794639240.jpeg"
                    alt="Saman Ghajar - Co-Founder KI Brueder"
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                    placeholder="Loading..."
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Saman Ghajar</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('about.team.coFounder')}</p>
              </div>
              
              {/* Nima Ghajar - Placeholder */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
                <div className="mb-6">
                  <LazyImage
                    src="/zve00453(2) copy.jpg"
                    alt="Nima Ghajar - Co-Founder KI Brueder"
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                    placeholder="Loading..."
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Nima Ghajar</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('about.team.coFounder')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;