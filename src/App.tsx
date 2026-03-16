import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, ArrowRight, Users, Code, Mail, Settings } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { useLanguage } from './contexts/LanguageContext';
import { useInView } from './hooks/useInView';
import { usePageMetadata } from './hooks/usePageMetadata';
import { lazy, Suspense } from 'react';
import { BackgroundPaths } from './components/ui/background-paths';
import { TimelineDemo } from './components/TimelineDemo';

// Lazy load pages for better performance
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ImprintPage = lazy(() => import('./pages/ImprintPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const NewsletterPage = lazy(() => import('./pages/NewsletterPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const LocalSEOPage = lazy(() => import('./pages/LocalSEOPage'));
const AIPage = lazy(() => import('./pages/AIPage'));
const AdsPage = lazy(() => import('./pages/AdsPage'));
const SEOPage = lazy(() => import('./pages/SEOPage'));
const SEOServicesPage = lazy(() => import('./pages/SEOServicesPage'));
const SEOAnalysePage = lazy(() => import('./pages/SEOAnalysePage'));
const WebsiteErstellungPage = lazy(() => import('./pages/WebsiteErstellungPage'));
const WebsiteOptimierungPage = lazy(() => import('./pages/WebsiteOptimierungPage'));
const LandingPageDesignPage = lazy(() => import('./pages/LandingPageDesignPage'));
const GoogleAdsPage = lazy(() => import('./pages/GoogleAdsPage'));
const FacebookAdsPage = lazy(() => import('./pages/FacebookAdsPage'));
const MetaAdsPage = lazy(() => import('./pages/MetaAdsPage'));
const DigitaleWerbungPage = lazy(() => import('./pages/DigitaleWerbungPage'));
const SEMPage = lazy(() => import('./pages/SEMPage'));
const EmailMarketingPage = lazy(() => import('./pages/EmailMarketingPage'));
const GoogleMapsPage = lazy(() => import('./pages/GoogleMapsPage'));
const GoogleBusinessPage = lazy(() => import('./pages/GoogleBusinessPage'));
const LeadGenerierungPage = lazy(() => import('./pages/LeadGenerierungPage'));
const ConversionPage = lazy(() => import('./pages/ConversionPage'));
const WebAnalysePage = lazy(() => import('./pages/WebAnalysePage'));
// Region pages
const RegionenPage = lazy(() => import('./pages/RegionenPage'));
const RegionRheydtPage = lazy(() => import('./pages/RegionRheydtPage'));
const RegionWickrathPage = lazy(() => import('./pages/RegionWickrathPage'));
const RegionKorschenbroichPage = lazy(() => import('./pages/RegionKorschenbroichPage'));
const RegionGrevenbroichPage = lazy(() => import('./pages/RegionGrevenbroichPage'));
const RegionErkelenzPage = lazy(() => import('./pages/RegionErkelenzPage'));
const RegionRheindahlenPage = lazy(() => import('./pages/RegionRheindahlenPage'));
const RegionEickenPage = lazy(() => import('./pages/RegionEickenPage'));
const RegionMoenchengladbachSuedPage = lazy(() => import('./pages/RegionMoenchengladbachSuedPage'));
const RegionOdenkirchenPage = lazy(() => import('./pages/RegionOdenkirchenPage'));
const RegionGiesenkirchenPage = lazy(() => import('./pages/RegionGiesenkirchenPage'));
const RegionHardterbroichPage = lazy(() => import('./pages/RegionHardterbroichPage'));
const RegionHoltPage = lazy(() => import('./pages/RegionHoltPage'));
const RegionGeistenbeckPage = lazy(() => import('./pages/RegionGeistenbeckPage'));
const RegionMoenchengladbachNordPage = lazy(() => import('./pages/RegionMoenchengladbachNordPage'));
const RegionMoenchengladbachOstPage = lazy(() => import('./pages/RegionMoenchengladbachOstPage'));

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-2 border-yellow-500 border-t-transparent"></div>
    </div>
  );
}

function ServiceCard({ icon, title, features, delay = 0, serviceType = 'contact' }) {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();
  const navigate = useNavigate();

  const handleClick = () => {
    if (serviceType === 'seo') {
      navigate('/local-seo');
    } else if (serviceType === 'ai') {
      navigate('/ai');
    } else if (serviceType === 'ads') {
      navigate('/ads');
    } else {
      navigate('/contact');
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`group p-8 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 hover:border-yellow-500/50 dark:hover:border-yellow-500/50 transition-all duration-300 opacity-0 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] dark:hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] relative overflow-hidden cursor-pointer ${
        isInView ? 'animate-fade-in-up' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.05] to-orange-500/[0.05] dark:from-yellow-500/[0.02] dark:to-orange-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative">
        <div className="text-yellow-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-4 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
              <div className="w-1 h-1 bg-yellow-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
              {feature}
            </li>
          ))}
        </ul>
        <div 
          className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 inline-flex items-center gap-2 transition-colors group-hover:gap-3"
        >
          {t('services.learnMore')} <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [servicesRef, servicesInView] = useInView();

  usePageMetadata({
    title: t('seo.home.title'),
    description: t('seo.home.description'),
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KI Brueder",
      "alternateName": "Ghajar Amirnezami, Nima & Saman GbR",
      "url": "https://kibrueder.de",
      "logo": "https://kibrueder.de/KIBrueder.png",
      "description": "AI-powered business automation solutions including lead generation, customer support, social media automation, and intelligent process optimization.",
      "email": "info@kibrueder.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Schroffstraße 29",
        "addressLocality": "Mönchengladbach",
        "postalCode": "41199",
        "addressCountry": "DE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+49",
        "contactType": "customer service",
        "email": "info@kibrueder.de",
        "availableLanguage": ["German", "English"]
      },
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "Nima Ghajar Amirnezami"
        },
        {
          "@type": "Person", 
          "name": "Saman Ghajar Amirnezami"
        }
      ],
      "serviceArea": {
        "@type": "Place",
        "name": "Germany"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Automation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lead Generation",
              "description": "B2B lead generation with personalized mass outreach, guaranteed minimum 8 new sales appointments per month",
              "provider": {
                "@type": "Organization",
                "@id": "https://kibrueder.de/#organization"
              },
              "areaServed": "DE",
              "serviceType": "Lead Generation"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Customer Support AI Chat",
              "description": "24/7 customer support with automatic appointment contact and real-time analytics",
              "provider": {
                "@type": "Organization", 
                "@id": "https://kibrueder.de/#organization"
              },
              "areaServed": "DE",
              "serviceType": "Customer Support"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Social Media Automation",
              "description": "Automated social media post creation and scheduled posting",
              "provider": {
                "@type": "Organization",
                "@id": "https://kibrueder.de/#organization"
              },
              "areaServed": "DE",
              "serviceType": "Social Media Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development", 
              "description": "Lightning-fast, mobile-optimized, SEO-optimized websites",
              "provider": {
                "@type": "Organization",
                "@id": "https://kibrueder.de/#organization"
              },
              "areaServed": "DE",
              "serviceType": "Web Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Intelligent Call Agent",
              "description": "Automated calls with customer support, speech recognition, and 24/7 availability",
              "provider": {
                "@type": "Organization",
                "@id": "https://kibrueder.de/#organization"
              },
              "areaServed": "DE",
              "serviceType": "Call Center Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Process Automation",
              "description": "Automate paperwork, centralize operations, and eliminate time-wasting work",
              "provider": {
                "@type": "Organization",
                "@id": "https://kibrueder.de/#organization"
              },
              "areaServed": "DE",
              "serviceType": "Business Process Automation"
            }
          }
        ]
      },
      "sameAs": [
        "https://kibrueder.de"
      ],
      "@id": "https://kibrueder.de/#organization"
    }
  });

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const navbarHeight = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const services = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: t('services.ai.title'),
      features: [
        t('services.ai.feature1'),
        t('services.ai.feature2'),
        t('services.ai.feature3')
      ],
      serviceType: 'ai'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('services.seo.title'),
      features: [
        t('services.seo.feature1'),
        t('services.seo.feature2'),
        t('services.seo.feature3')
      ],
      serviceType: 'seo'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: t('services.ads.title'),
      features: [
        t('services.ads.feature1'),
        t('services.ads.feature2'),
        t('services.ads.feature3')
      ],
      serviceType: 'ads'
    }
  ];

  return (
    <>
      <BackgroundPaths 
        growthText={t('hero.growth')}
        headachesText={t('hero.headaches')}
        guaranteedText={t('hero.guaranteed')}
        buttonText={t('hero.cta.book')}
        servicesText={t('hero.cta.services')}
        onButtonClick={handleBookCall}
        onServicesClick={scrollToServices}
      />

      <TimelineDemo />

      <section id="services" ref={servicesRef} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center opacity-0 ${
          servicesInView ? 'animate-fade-in-up' : ''
        }`}>
          {t('services.title')}
        </h2>
        <p className={`text-gray-600 dark:text-gray-400 text-lg mb-12 text-center max-w-3xl mx-auto opacity-0 ${
          servicesInView ? 'animate-fade-in-up animate-delay-100' : ''
        }`}>
          {t('services.subtitle')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              features={service.features}
              delay={200 + index * 100}
              serviceType={service.serviceType}
            />
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <button
          onClick={handleBookCall}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
        >
          {t('hero.cta.book')}
        </button>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Kunden aus der Region die wir betreuen
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Wir arbeiten vollständig online und helfen Unternehmen deutschlandweit. 
          Viele unserer Kunden kommen aus Mönchengladbach und der Umgebung – 
          hier kennen wir den lokalen Markt besonders gut.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
          {[
            { label: 'Rheydt', href: '/regionen/rheydt' },
            { label: 'Wickrath', href: '/regionen/wickrath' },
            { label: 'Odenkirchen', href: '/regionen/odenkirchen' },
            { label: 'Giesenkirchen', href: '/regionen/giesenkirchen' },
            { label: 'Hardterbroich', href: '/regionen/hardterbroich' },
            { label: 'Holt', href: '/regionen/holt' },
            { label: 'Geistenbeck', href: '/regionen/geistenbeck' },
            { label: 'Eicken', href: '/regionen/eicken' },
            { label: 'Rheindahlen', href: '/regionen/rheindahlen' },
            { label: 'Korschenbroich', href: '/regionen/korschenbroich' },
            { label: 'Grevenbroich', href: '/regionen/grevenbroich' },
            { label: 'Erkelenz', href: '/regionen/erkelenz' },
            { label: 'MG Süd', href: '/regionen/moenchengladbach-sued' },
            { label: 'MG Nord', href: '/regionen/moenchengladbach-nord' },
            { label: 'MG Ost', href: '/regionen/moenchengladbach-ost' },
          ].map((area) => (
            <a
              key={area.href}
              href={area.href}
              className="text-center border border-gray-200 dark:border-gray-800 hover:border-yellow-500/50 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all"
            >
              {area.label}
            </a>
          ))}
        </div>
        <p className="text-gray-500 dark:text-gray-500 text-sm text-center">
          Ihr Standort ist nicht dabei?{' '}
          <a href="/contact" className="text-yellow-600 dark:text-yellow-400 hover:underline">
            Kein Problem – wir betreuen Kunden in ganz Deutschland.
          </a>
        </p>
      </section>

      <Footer />
    </>
  );
}

function App() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          const navbarHeight = 80;
          const elementPosition = servicesSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const navbarHeight = 80;
        const elementPosition = servicesSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={scrollToServices} onBookClick={() => navigate('/contact')} />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/local-seo" element={<LocalSEOPage />} />
          <Route path="/ads" element={<AdsPage />} />
          <Route path="/imprint" element={<ImprintPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/seo" element={<SEOPage />} />
          <Route path="/seo-services" element={<SEOServicesPage />} />
          <Route path="/seo-analyse" element={<SEOAnalysePage />} />
          <Route path="/website-erstellung" element={<WebsiteErstellungPage />} />
          <Route path="/website-optimierung" element={<WebsiteOptimierungPage />} />
          <Route path="/landing-page-design" element={<LandingPageDesignPage />} />
          <Route path="/google-ads" element={<GoogleAdsPage />} />
          <Route path="/facebook-ads" element={<FacebookAdsPage />} />
          <Route path="/meta-ads" element={<MetaAdsPage />} />
          <Route path="/digitale-werbung" element={<DigitaleWerbungPage />} />
          <Route path="/search-engine-marketing" element={<SEMPage />} />
          <Route path="/email-marketing" element={<EmailMarketingPage />} />
          <Route path="/google-maps-optimierung" element={<GoogleMapsPage />} />
          <Route path="/google-business-profile" element={<GoogleBusinessPage />} />
          <Route path="/lead-generierung" element={<LeadGenerierungPage />} />
          <Route path="/conversion-optimierung" element={<ConversionPage />} />
          <Route path="/web-analyse-setup" element={<WebAnalysePage />} />
          <Route path="/regionen" element={<RegionenPage />} />
          <Route path="/regionen/rheydt" element={<RegionRheydtPage />} />
          <Route path="/regionen/wickrath" element={<RegionWickrathPage />} />
          <Route path="/regionen/korschenbroich" element={<RegionKorschenbroichPage />} />
          <Route path="/regionen/grevenbroich" element={<RegionGrevenbroichPage />} />
          <Route path="/regionen/erkelenz" element={<RegionErkelenzPage />} />
          <Route path="/regionen/rheindahlen" element={<RegionRheindahlenPage />} />
          <Route path="/regionen/eicken" element={<RegionEickenPage />} />
          <Route path="/regionen/moenchengladbach-sued" element={<RegionMoenchengladbachSuedPage />} />
          <Route path="/regionen/odenkirchen" element={<RegionOdenkirchenPage />} />
          <Route path="/regionen/giesenkirchen" element={<RegionGiesenkirchenPage />} />
          <Route path="/regionen/hardterbroich" element={<RegionHardterbroichPage />} />
          <Route path="/regionen/holt" element={<RegionHoltPage />} />
          <Route path="/regionen/geistenbeck" element={<RegionGeistenbeckPage />} />
          <Route path="/regionen/moenchengladbach-nord" element={<RegionMoenchengladbachNordPage />} />
          <Route path="/regionen/moenchengladbach-ost" element={<RegionMoenchengladbachOstPage />} />
        </Routes>
      </Suspense>
      <CookieBanner />
    </div>
  );
}

export default App;
