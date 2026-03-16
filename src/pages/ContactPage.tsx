import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Footer from '../components/Footer';
import { Mail, Phone, Check, AlertCircle } from 'lucide-react';

type ContactSubmission = {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  company_name: string;
  phone_number: string;
  service: string;
  problems: string;
  found_us: string;
  additional_info?: string;
};

function ContactPage() {
  const { t } = useLanguage();
  
  // Set page metadata for contact page
  usePageMetadata({
    title: t('seo.contact.title'),
    description: t('seo.contact.description'),
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": t('contact.title'),
      "description": t('seo.contact.description'),
      "url": "https://kibrueder.de/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "KI Brueder",
        "alternateName": "Ghajar Amirnezami, Nima & Saman GbR",
        "url": "https://kibrueder.de",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+49",
            "contactType": "customer service",
            "email": "info@kibrueder.de",
            "availableLanguage": ["German", "English"],
            "areaServed": "DE",
            "serviceType": "AI Automation Consulting"
          },
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "info@kibrueder.de",
            "availableLanguage": ["German", "English"],
            "areaServed": "DE",
            "serviceType": "AI Business Solutions"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Schroffstraße 29",
          "addressLocality": "Mönchengladbach",
          "postalCode": "41199",
          "addressCountry": "DE"
        },
        "sameAs": [
          "https://kibrueder.de"
        ]
      }
    }
  });

  const [formData, setFormData] = useState<ContactSubmission>({
    full_name: '',
    email: '',
    company_name: '',
    phone_number: '',
    service: '',
    problems: '',
    found_us: '',
    additional_info: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.full_name.trim()) errors.full_name = t('contact.form.fullName');
    if (!formData.email.trim()) {
      errors.email = t('contact.form.email');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.company_name.trim()) errors.company_name = t('contact.form.companyName');
    if (!formData.phone_number.trim()) errors.phone_number = t('contact.form.phoneNumber');
    if (!formData.service) errors.service = t('contact.form.selectService');
    if (!formData.problems.trim()) errors.problems = t('contact.form.problems');
    if (!formData.found_us.trim()) errors.found_us = t('contact.form.foundUs');
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendWebhook = async (data: ContactSubmission) => {
    try {
      const webhookUrl = 'https://hook.eu2.make.com/g2rleywbhes1xomav35o21zibyep3n6j';
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: 'contact_form'
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }
      
      return response;
    } catch (error) {
      console.error('Error sending webhook:', error);
      throw error; // Re-throw to handle in the form submission
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(false);
      
      try {
        // Send directly to Make.com webhook
        const response = await sendWebhook(formData);
        
        if (!response || !response.ok) {
          throw new Error('Failed to submit form. Please try again.');
        }
        
        setSubmitSuccess(true);
        setFormData({
          full_name: '',
          email: '',
          company_name: '',
          phone_number: '',
          service: '',
          problems: '',
          found_us: '',
          additional_info: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError(true);
        setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('contact.title')}
        </h1>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-16 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('contact.form.subtitle')}
          </p>

          {submitSuccess ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-400">{t('contact.form.success')}</h3>
              </div>
              <p className="text-green-700 dark:text-green-300">
                {t('contact.form.successMessage')}
              </p>
            </div>
          ) : submitError ? (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-100 dark:bg-red-800 p-1 rounded-full">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-red-800 dark:text-red-400">{t('contact.form.error')}</h3>
              </div>
              <p className="text-red-700 dark:text-red-300">
                {t('contact.form.errorMessage').replace('{0}', errorMessage)}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('contact.form.personalInfo')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.fullName')}
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.full_name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    />
                    {formErrors.full_name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.full_name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.companyName')}
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.company_name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    />
                    {formErrors.company_name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.company_name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.phone_number ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    />
                    {formErrors.phone_number && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.phone_number}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('contact.form.serviceDetails')}</h3>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.selectService')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      formErrors.service ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  >
                    <option value="">{t('contact.form.selectService')}</option>
                    <option value="ai">{t('contact.form.services.ai')}</option>
                    <option value="seo">{t('contact.form.services.seo')}</option>
                    <option value="ads">{t('contact.form.services.ads')}</option>
                  </select>
                  {formErrors.service && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.service}</p>
                  )}
                </div>
              </div>

              {/* Project Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('contact.form.projectInfo')}</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="problems" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.problems')}
                    </label>
                    <textarea
                      id="problems"
                      name="problems"
                      value={formData.problems}
                      onChange={handleChange}
                      rows={4}
                      placeholder={t('contact.form.problemsPlaceholder')}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.problems ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    ></textarea>
                    {formErrors.problems && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.problems}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="found_us" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.foundUs')}
                    </label>
                    <textarea
                      id="found_us"
                      name="found_us"
                      value={formData.found_us}
                      onChange={handleChange}
                      rows={2}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.found_us ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    ></textarea>
                    {formErrors.found_us && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.found_us}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="additional_info" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.additionalInfo')}
                    </label>
                    <textarea
                      id="additional_info"
                      name="additional_info"
                      value={formData.additional_info || ''}
                      onChange={handleChange}
                      rows={3}
                      placeholder={t('contact.form.additionalInfoPlaceholder')}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.form.processing')}
                  </>
                ) : (
                  t('contact.form.submit')
                )}
              </button>
            </form>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('contact.subtitle')}</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="font-medium">{t('contact.email')}</p>
                  <p className="text-gray-600 dark:text-gray-400">info@kibrueder.de</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Phone className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="font-medium">{t('contact.phone')}</p>
                  <p className="text-gray-600 dark:text-gray-400">+49 178 1698587</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;