import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Footer from '../components/Footer';

function ImprintPage() {
  const { t } = useLanguage();

  // Set page metadata for imprint page
  usePageMetadata({
    title: t('seo.imprint.title'),
    description: t('seo.imprint.description')
  });

  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">{t('imprint.title')}</h1>
        <div className="prose dark:prose-invert">
          <h2 className="text-2xl font-semibold mb-4">{t('imprint.legalInfo')}</h2>
          <p className="text-lg mb-2">{t('imprint.name')}</p>
          <p className="whitespace-pre-line mb-8">{t('imprint.address')}</p>
          
          <p className="whitespace-pre-line mb-8">{t('imprint.representatives')}</p>
          
          <h2 className="text-2xl font-semibold mb-4">{t('imprint.contact')}</h2>
          <p className="mb-8">{t('imprint.email')}</p>
          
          <p className="whitespace-pre-line mb-8">{t('imprint.vatId')}</p>
          
          <p className="whitespace-pre-line">{t('imprint.responsibility')}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ImprintPage;