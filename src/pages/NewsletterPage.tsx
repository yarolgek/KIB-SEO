import React, { useState } from 'react';
import { Send, Check, AlertCircle, ArrowRight } from 'lucide-react';
import { supabase, type NewsletterSubscription } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Footer from '../components/Footer';

function NewsletterPage() {
  const { t } = useLanguage();
  
  // Set page metadata for newsletter page
  usePageMetadata({
    title: t('seo.newsletter.title'),
    description: t('seo.newsletter.description')
  });

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'subscribing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('subscribing');
    setErrorMessage('');

    try {
      // Validate email
      if (!email) {
        throw new Error('Please enter an email address');
      }
      
      // Enhanced email validation with domain check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address');
      }
      
      const subscription: NewsletterSubscription = {
        email: email.toLowerCase().trim()
      };

      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([subscription]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          throw new Error('This email is already subscribed to our newsletter');
        }
        throw error;
      }

      // Send to webhook
      try {
        const webhookUrl = 'https://hook.eu2.make.com/ksfuh0scnsz9wdo9idv88j8kbpwfds73';
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: subscription.email,
            timestamp: new Date().toISOString(),
            source: 'newsletter_signup'
          }),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Don't throw here - we still want to show success to user even if webhook fails
      }
      setStatus('success');
      setEmail('');
      
      // Reset success message after 8 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 8000);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred while subscribing');
    }
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('newsletter.title')}
          </h1>
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8">
                {t('newsletter.subtitle')}
              </p>

              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <ArrowRight className="w-5 h-5 text-yellow-500" />
                  <span>{t('newsletter.feature1')}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <ArrowRight className="w-5 h-5 text-yellow-500" />
                  <span>{t('newsletter.feature2')}</span>
                </div>
              </div>

              <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
                {t('newsletter.description')}
              </p>

              <p className="text-lg text-gray-800 dark:text-gray-200 mb-8">
                {t('newsletter.closing')}
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Check className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{t('newsletter.success')}</div>
                      <div className="text-sm mt-1">{t('newsletter.spamReminder')}</div>
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
                    <AlertCircle className="w-5 h-5" />
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'subscribing'}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === 'subscribing' ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : status === 'success' ? (
                    <>
                      <Check className="w-5 h-5" />
                      {t('newsletter.success')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('newsletter.button')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsletterPage;