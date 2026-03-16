import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function WebsiteErstellungPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Website Erstellung Mönchengladbach - KI Brueder | Professionelle Websites, Landing Pages & Online Shops near me',
    description: 'KI Brueder – Website Erstellung in Mönchengladbach. Schnelle, mobile-optimierte & SEO-freundliche Websites die Kunden gewinnen.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">
        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Website Erstellung Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Website Erstellung Mönchengladbach – Professionelle Websites</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Ihre Website ist Ihre wichtigste Verkaufsperson – sie arbeitet 24/7, schläft nie und repräsentiert Ihr Unternehmen bei jedem ersten Eindruck. Wir entwickeln schnelle, mobile-optimierte und SEO-freundliche Websites, die nicht nur schön aussehen, sondern echte Ergebnisse liefern.</p>
        </div>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Website Erstellung Mönchengladbach – Was eine gute Website leisten muss</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Eine moderne Website für ein Unternehmen in Mönchengladbach muss drei Dinge gleichzeitig leisten: Sie muss bei Google gefunden werden, Besucher überzeugen und aus Besuchern Kunden machen. Das ist kein einfaches Design-Projekt – es ist strategische Arbeit.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Wir entwickeln keine Websites von der Stange. Jede Website wird individuell konzipiert, auf Ihre Zielgruppe zugeschnitten und technisch so umgesetzt, dass sie schnell lädt, auf jedem Gerät perfekt aussieht und von Google geliebt wird.</p>
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-yellow-700 dark:text-yellow-400">Was in jeder unserer Websites steckt</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Blitzschnelle Ladezeiten (Core Web Vitals optimiert)</li>
              <li>✓ 100% mobil-responsiv – perfekt auf Smartphone, Tablet und Desktop</li>
              <li>✓ SEO-Grundstruktur von Anfang an eingebaut</li>
              <li>✓ Professionelles Design, das Vertrauen schafft</li>
              <li>✓ Klare Handlungsaufforderungen (CTAs) für mehr Konversionen</li>
              <li>✓ DSGVO-konform mit Cookie-Banner und Datenschutz</li>
            </ul>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Unsere Website-Pakete für Mönchengladbach</h2>
          <div className="space-y-6">
            {[
              { title: 'Landingpage / One-Pager', desc: 'Ideal für Kampagnen, neue Produkte oder Dienstleistungen. Eine fokussierte Seite mit klarer Botschaft und starkem CTA. Schnell umgesetzt, hohe Conversion-Rate.' },
              { title: 'Unternehmenswebsite (5–10 Seiten)', desc: 'Die klassische Unternehmenswebsite für Mönchengladbacher Betriebe: Startseite, Über uns, Leistungen, Kontakt – plus individuelle Unterseiten für Ihre Services.' },
              { title: 'Erweiterte Website mit Blog & SEO-Content', desc: 'Für Unternehmen, die langfristig organischen Traffic aufbauen wollen. Inklusive Content-Strategie, Blog-System und vollständiger On-Page-Optimierung.' },
              { title: 'E-Commerce & Online-Shops', desc: 'Vom einfachen Produkt-Showcase bis zum vollständigen Online-Shop mit Warenkorb, Zahlungsabwicklung und Bestandsverwaltung.' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Website Erstellung in Mönchengladbach</h2>
          <div className="space-y-6">
            {[
              { q: 'Was kostet eine professionelle Website?', a: 'Eine einfache Unternehmenswebsite beginnt bei ca. 1.500–3.000 €. Umfangreichere Projekte kosten entsprechend mehr. Im kostenlosen Erstgespräch erstellen wir ein transparentes Angebot.' },
              { q: 'Wie lange dauert die Erstellung?', a: 'Eine Standard-Unternehmenswebsite ist in 3–6 Wochen fertig. Der genaue Zeitrahmen hängt vom Umfang und der Zulieferung von Inhalten Ihrerseits ab.' },
              { q: 'Kann ich die Website später selbst bearbeiten?', a: 'Ja. Wir bauen auf Systemen, die einfach zu bedienen sind. Auf Wunsch schulen wir Sie, damit Sie selbst Texte und Bilder anpassen können.' },
              { q: 'Ist Hosting und Domain inklusive?', a: 'Hosting und Domain können auf Wunsch als Rundum-Paket organisiert werden. Wir beraten Sie zu den besten und günstigsten Optionen für Ihren Bedarf.' },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[{ label: 'Website Optimierung', href: '/website-optimierung' },{ label: 'Landing Page Design', href: '/landing-page-design' },{ label: 'SEO Mönchengladbach', href: '/seo' },{ label: 'Local SEO', href: '/local-seo' }].map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ {link.label}</a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Unternehmen aus der Region die wir betreuen</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Wir arbeiten vollständig online und betreuen Kunden deutschlandweit. Besonders viele unserer Kunden kommen aus Mönchengladbach und der direkten Umgebung – hier kennen wir den lokalen Markt, die Wettbewerbssituation und die Suchgewohnheiten aus dem Effeff.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {[
              { label: 'Mönchengladbach', href: '/' },
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
            ].map((area) => (
              <a key={area.href} href={area.href} className="text-center border border-gray-200 dark:border-gray-800 hover:border-yellow-500/50 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">
                {area.label}
              </a>
            ))}
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Nicht dabei? Kein Problem –{' '}
            <a href="/contact" className="text-yellow-600 dark:text-yellow-400 hover:underline">wir betreuen Unternehmen in ganz Deutschland.</a>
          </p>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ihr nächster Schritt: Eine Website, die wirklich verkauft</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Kontaktieren Sie uns für ein kostenloses Beratungsgespräch. Wir analysieren Ihre aktuelle Website (oder starten von Null) und zeigen Ihnen, was möglich ist.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
