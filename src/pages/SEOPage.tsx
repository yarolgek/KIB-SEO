import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function SEOPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST SEO Agentur Mönchengladbach - KI Brueder | Suchmaschinenoptimierung, SEO Services & SEO Analyse near me',
    description: 'KI Brueder – Ihre SEO Agentur in Mönchengladbach. Nachhaltige Google Rankings durch technisches SEO, On-Page Optimierung, Content & Linkaufbau.'
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/contact')} />

      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">SEO Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">SEO Agentur Mönchengladbach – Nachhaltige Google Rankings</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Suchmaschinenoptimierung ist die Königsdisziplin des Online-Marketings – und der einzige Kanal, 
            der langfristig organischen Traffic generiert, ohne dass Sie dauerhaft für jeden Klick zahlen müssen. 
            Als SEO-Agentur in Mönchengladbach helfen wir Ihnen, bei Google die Positionen zu erreichen, 
            die Ihr Unternehmen verdient.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">SEO Mönchengladbach – Warum es sich lohnt</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            SEO (Search Engine Optimization) umfasst alle Maßnahmen, die dafür sorgen, dass Ihre Website 
            bei Google und anderen Suchmaschinen für relevante Suchbegriffe möglichst weit oben erscheint. 
            Im Gegensatz zu bezahlter Werbung generiert gutes SEO dauerhaften, kostenlosen Traffic – 
            rund um die Uhr, auch wenn Sie schlafen.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Die Realität ist hart: Über 90% aller Google-Nutzer klicken nur auf Ergebnisse der ersten Seite. 
            Platz 1 erhält durchschnittlich 30% aller Klicks. Wer auf Seite 2 oder 3 landet, wird 
            praktisch nicht gefunden. Das bedeutet: Ohne SEO schenken Sie Ihrer Konkurrenz täglich potenzielle Kunden.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-lg mb-3 text-yellow-700 dark:text-yellow-400">SEO vs. bezahlte Werbung</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-yellow-200 dark:border-yellow-800">
                    <th className="text-left py-2 pr-4">Kriterium</th>
                    <th className="text-left py-2 pr-4">SEO</th>
                    <th className="text-left py-2">Google Ads</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300 space-y-2">
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 pr-4 font-medium">Kosten pro Klick</td>
                    <td className="py-2 pr-4 text-green-600">Kostenlos</td>
                    <td className="py-2">Bezahlt</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 pr-4 font-medium">Zeitrahmen</td>
                    <td className="py-2 pr-4">3–6 Monate</td>
                    <td className="py-2 text-green-600">Sofort</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 pr-4 font-medium">Nachhaltigkeit</td>
                    <td className="py-2 pr-4 text-green-600">Sehr hoch</td>
                    <td className="py-2">Endet mit Budget</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Vertrauen der Nutzer</td>
                    <td className="py-2 pr-4 text-green-600">Höher</td>
                    <td className="py-2">Niedriger</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Unsere SEO-Leistungen für Mönchengladbacher Unternehmen</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Technisches SEO</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Die Grundlage jeder erfolgreichen SEO-Strategie: Wir stellen sicher, dass Ihre Website 
                technisch einwandfrei ist. Das umfasst Ladegeschwindigkeit (Core Web Vitals), 
                Mobile-Optimierung, sichere HTTPS-Verbindung, saubere URL-Struktur, korrekte 
                Sitemap und Robots.txt sowie die Behebung von Crawling-Fehlern.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">On-Page SEO & Content-Optimierung</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Wir optimieren jede wichtige Seite Ihrer Website: Titel-Tags, Meta-Descriptions, 
                Überschriften-Hierarchie (H1–H3), interne Verlinkung, Bild-Alt-Texte und den 
                eigentlichen Content. Gut optimierter Content rangiert nicht nur besser – 
                er überzeugt auch Besucher, zu Kunden zu werden.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Keyword-Strategie & -Recherche</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Der Erfolg von SEO steht und fällt mit der richtigen Keyword-Strategie. Wir recherchieren 
                systematisch, nach welchen Begriffen Ihre Zielkunden suchen – inklusive Suchvolumen, 
                Wettbewerbsintensität und Kaufabsicht. Dann erstellen wir eine Keyword-Map, 
                die Ihrer Website eine klare Struktur gibt.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Content-Erstellung für SEO</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hochwertige Inhalte sind der stärkste SEO-Hebel. Wir erstellen für Sie Servicepages, 
                Blogartikel und Landingpages, die sowohl bei Google ranken als auch echte Mehrwerte 
                für Ihre Besucher bieten. Jeder Text ist einzigartig, fachlich fundiert und SEO-optimiert.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Linkaufbau (Off-Page SEO)</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Backlinks von anderen Websites sind ein zentrales Ranking-Signal für Google. 
                Wir bauen qualitativ hochwertige Backlinks von relevanten, thematisch passenden 
                Websites auf – nachhaltig und ohne Risiko für Ihre Domain.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">SEO-Analyse & Reporting</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Transparenz ist uns wichtig. Sie erhalten monatliche Reports mit allen relevanten 
                KPIs: Rankings, organischer Traffic, Sichtbarkeitsindex und Conversion-Daten. 
                So sehen Sie jederzeit, was Ihre SEO-Investition bringt.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: SEO für Unternehmen in Mönchengladbach</h2>
          <div className="space-y-6">
            {[
              { q: 'Wie lange dauert SEO bis man Ergebnisse sieht?', a: 'Erste Verbesserungen sind oft nach 6–12 Wochen sichtbar. Für signifikante Ranking-Verbesserungen sollten Sie 4–6 Monate einplanen. SEO ist ein Marathon, kein Sprint – aber die Ergebnisse sind nachhaltiger als jede bezahlte Werbung.' },
              { q: 'Was kostet SEO für ein mittelständisches Unternehmen?', a: 'Professionelles SEO beginnt bei circa 800–1.500 € pro Monat für lokale Unternehmen. Der ROI ist langfristig sehr attraktiv, da organischer Traffic keine laufenden Klickkosten verursacht.' },
              { q: 'Garantieren Sie bestimmte Rankings?', a: 'Keine seriöse SEO-Agentur kann spezifische Rankings garantieren – das liegt letztlich bei Google. Was wir garantieren: transparente Arbeit, messbare Fortschritte und einen fairen Umgang mit Ihrem Budget.' },
              { q: 'Was ist der Unterschied zwischen SEO und Local SEO?', a: 'SEO zielt auf überregionale oder nationale Sichtbarkeit. Local SEO fokussiert speziell auf lokale Suchanfragen und Google Maps. Für die meisten lokalen Unternehmen in Mönchengladbach ist Local SEO der wichtigere Hebel.' },
              { q: 'Funktioniert SEO auch in meiner Branche?', a: 'In den allermeisten Branchen ja. Solange Menschen Ihr Angebot bei Google suchen, lohnt sich SEO. In manchen Nischen ist der Wettbewerb höher, was mehr Aufwand bedeutet – aber auch mehr Potenzial für den, der es richtig macht.' },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte SEO-Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Local SEO Mönchengladbach', href: '/local-seo' },
              { label: 'SEO Services', href: '/seo-services' },
              { label: 'SEO Analyse', href: '/seo-analyse' },
              { label: 'Google Maps Optimierung', href: '/google-maps-optimierung' },
              { label: 'Website Optimierung', href: '/website-optimierung' },
              { label: 'Web Analyse Setup', href: '/web-analyse-setup' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">
                → {link.label}
              </a>
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
          <h2 className="text-3xl font-bold mb-4">Bereit für mehr organischen Traffic?</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
            Buchen Sie Ihr kostenloses SEO-Audit. Wir analysieren Ihre aktuelle Situation 
            und zeigen Ihnen konkret, was nötig ist, um bei Google nach oben zu kommen.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg"
          >
            Kostenloses SEO-Audit buchen
          </button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
