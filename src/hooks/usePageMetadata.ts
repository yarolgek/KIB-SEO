import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface HreflangAlternate {
  lang: string;
  path: string;
}

interface PageMetadata {
  title: string;
  description: string;
  alternateHreflangs?: HreflangAlternate[];
  schema?: Record<string, any>;
}

export function usePageMetadata({ title, description, alternateHreflangs, schema }: PageMetadata) {
  const location = useLocation();
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Open Graph meta tags for social sharing
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    // Update Open Graph image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', `${window.location.origin}/KIBrueder.png`);

    // Update Open Graph image alt text
    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAlt) {
      ogImageAlt = document.createElement('meta');
      ogImageAlt.setAttribute('property', 'og:image:alt');
      document.head.appendChild(ogImageAlt);
    }
    ogImageAlt.setAttribute('content', 'KI Brueder Logo');

    // Update Twitter Card meta tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', `${window.location.origin}/KIBrueder.png`);

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', title);

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', description);

    // Remove existing hreflang tags
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(link => link.remove());

    // Add hreflang tags
    const baseUrl = window.location.origin;
    const currentPath = location.pathname;
    
    // Use provided alternates or generate default ones
    const hreflangs = alternateHreflangs || [
      { lang: 'de', path: currentPath },
      { lang: 'en', path: currentPath },
      { lang: 'x-default', path: currentPath }
    ];

    hreflangs.forEach(({ lang, path }) => {
      const hreflangLink = document.createElement('link');
      hreflangLink.setAttribute('rel', 'alternate');
      hreflangLink.setAttribute('hreflang', lang);
      hreflangLink.setAttribute('href', `${baseUrl}${path}`);
      document.head.appendChild(hreflangLink);
    });

    // Remove existing schema script tags
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => script.remove());

    // Add schema markup if provided
    if (schema) {
      const schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.innerHTML = JSON.stringify(schema, null, 2);
      document.head.appendChild(schemaScript);
    }
  }, [title, description, alternateHreflangs, location.pathname]);
}