(function () {
  'use strict';

  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.getStarted': 'Get Started',
      'footer.services': 'Services',
      'footer.quickLinks': 'Quick Links',
      'footer.contact': 'Contact',
      'footer.imprint': 'Imprint',
      'footer.privacy': 'Privacy',
      'cookie.title': 'Cookie Settings',
      'cookie.description': 'We use cookies to improve your experience.',
      'cookie.learnMore': 'Learn more',
      'cookie.accept': 'Accept',
      'cookie.decline': 'Decline',
      'hero.growth': 'More Growth.',
      'hero.headaches': 'Less Headaches.',
      'hero.guaranteed': 'Guaranteed.',
      'hero.cta.book': 'Book a Free Strategy Call',
      'hero.cta.services': 'View Services',
      'services.title': 'Our Services',
      'services.subtitle': 'Comprehensive local SEO and marketing solutions to grow and scale your business',
      'services.learnMore': 'Learn more',
      'services.ai.title': 'AI',
      'services.ai.feature1': 'AI Chat',
      'services.ai.feature2': 'AI Call Assistant',
      'services.ai.feature3': 'Automations',
      'services.seo.title': 'Local SEO',
      'services.seo.feature1': 'Top 3 on Google Maps',
      'services.seo.feature2': 'SEO-optimized website',
      'services.seo.feature3': 'Maximum visibility',
      'services.ads.title': 'Ads',
      'services.ads.feature1': 'Google Ads',
      'services.ads.feature2': 'Meta Ads',
      'services.ads.feature3': 'Performance optimization',
      'about.title': 'About KI Brueder',
      'about.description': 'We are brothers specializing in local SEO and marketing, dedicated to helping businesses scale efficiently through effective digital marketing solutions.',
      'contact.title': 'Contact Us',
      'contact.form.title': 'Book Your Free Strategy Call',
      'contact.form.subtitle': 'Tell us about your project and we will get back to you shortly.',
      'contact.form.submit': 'Book Your Consultation',
      'blog.title': 'Latest Insights',
      'blog.subtitle': 'Stay up to date with the latest in local SEO, marketing, and business growth.',
      'blog.readMore': 'Read more',
      'newsletter.title': 'Newsletter',
      'newsletter.subtitle': 'Daily tips for local SEO and business growth.',
      'imprint.title': 'Imprint',
      'privacy.title': 'Privacy Policy',
    },
    de: {
      'nav.home': 'Startseite',
      'nav.about': 'Über uns',
      'nav.services': 'Dienstleistungen',
      'nav.contact': 'Kontakt',
      'nav.getStarted': 'Loslegen',
      'footer.services': 'Dienstleistungen',
      'footer.quickLinks': 'Schnelllinks',
      'footer.contact': 'Kontakt',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',
      'cookie.title': 'Cookie-Einstellungen',
      'cookie.description': 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.',
      'cookie.learnMore': 'Mehr erfahren',
      'cookie.accept': 'Akzeptieren',
      'cookie.decline': 'Ablehnen',
      'hero.growth': 'Mehr Wachstum.',
      'hero.headaches': 'Weniger Kopfschmerzen.',
      'hero.guaranteed': 'Garantiert.',
      'hero.cta.book': 'Kostenloses Strategiegespräch buchen',
      'hero.cta.services': 'Dienstleistungen ansehen',
      'services.title': 'Unsere Dienstleistungen',
      'services.subtitle': 'Umfassende Local SEO und Marketing-Lösungen zum Wachstum und zur Skalierung Ihres Unternehmens',
      'services.learnMore': 'Mehr erfahren',
      'services.ai.title': 'KI',
      'services.ai.feature1': 'KI-Chat',
      'services.ai.feature2': 'KI-Anrufassistent',
      'services.ai.feature3': 'Automatisierungen',
      'services.seo.title': 'Local SEO',
      'services.seo.feature1': 'Top 3 in Google Maps',
      'services.seo.feature2': 'SEO-optimierte Website',
      'services.seo.feature3': 'Höchste Sichtbarkeit',
      'services.ads.title': 'Werbeanzeigen',
      'services.ads.feature1': 'Google Ads',
      'services.ads.feature2': 'Meta Ads',
      'services.ads.feature3': 'Performance-Optimierung',
      'about.title': 'Über KI Brueder',
      'about.description': 'Wir sind Brüder, die sich auf Local SEO und Marketing spezialisiert haben und Unternehmen dabei helfen, durch effektive digitale Marketing-Lösungen effizient zu skalieren.',
      'contact.title': 'Kontakt',
      'contact.form.title': 'Kostenloses Strategiegespräch buchen',
      'contact.form.subtitle': 'Erzählen Sie uns von Ihrem Projekt – wir melden uns in Kürze.',
      'contact.form.submit': 'Beratung buchen',
      'blog.title': 'Neueste Einblicke',
      'blog.subtitle': 'Bleiben Sie über die neuesten Entwicklungen in Local SEO und Marketing und Geschäftswachstumsstrategien informiert.',
      'blog.readMore': 'Weiterlesen',
      'newsletter.title': 'Newsletter',
      'newsletter.subtitle': 'Tägliche Tipps für Local SEO und Geschäftswachstum.',
      'imprint.title': 'Impressum',
      'privacy.title': 'Datenschutz',
    },
  };

  let current = localStorage.getItem('language') || 'de';

  function applyLanguage(lang) {
    current = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = translations[lang]?.[key];
      if (text) el.textContent = text;
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('bg-orange-600', isActive);
      btn.classList.toggle('text-white', isActive);
      btn.classList.toggle('text-gray-600', !isActive);
      btn.classList.toggle('dark:text-gray-400', !isActive);
    });
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });

  applyLanguage(current);
})();
