import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Footer from '../components/Footer';

function PrivacyPage() {
  const { t } = useLanguage();

  // Set page metadata for privacy page
  usePageMetadata({
    title: t('seo.privacy.title'),
    description: t('seo.privacy.description')
  });

  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">{t('privacy.title')}</h1>
        <div className="prose dark:prose-invert">
          <p className="text-lg mb-8">{t('privacy.intro')}</p>
          
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.collection.title')}</h2>
          <p className="mb-6">{t('privacy.collection.noCookies')}</p>
          <p className="mb-6">{t('privacy.collection.personalInfo')}</p>
          <p className="mb-6">{t('privacy.collection.noSharing')}</p>
          
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.thirdParty.title')}</h2>
          <p className="mb-6">{t('privacy.thirdParty.content')}</p>
          
          <div className="bg-yellow-500/10 rounded-lg p-6 mt-8">
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('privacy.disclaimer')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPage;