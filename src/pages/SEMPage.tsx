import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function SEMPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Search Engine Marketing Mönchengladbach - KI Brueder | SEM, Google Ads & SEO aus einer Hand near me',
    description: 'KI Brueder – Search Engine Marketing in Mönchengladbach. SEO & Google Ads kombiniert für maximale Sichtbarkeit bei Google.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Search Engine Marketing Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Search Engine Marketing Mönchengladbach – SEO & SEA kombiniert</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Search Engine Marketing (SEM) ist der Oberbegriff für alle Maßnahmen, die Ihre Sichtbarkeit in Suchmaschinen erhöhen – sowohl durch bezahlte Anzeigen (SEA) als auch durch organische Optimierung (SEO). Als SEM-Agentur in Mönchengladbach kombinieren wir beide Disziplinen für maximale Wirkung.</p>
        </div>

        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Search Engine Marketing Mönchengladbach – SEM erklärt</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Viele Unternehmen setzen entweder auf SEO oder auf Google Ads – aber die klügste Strategie verbindet beides. Während Google Ads sofortige Sichtbarkeit liefert, baut SEO parallel nachhaltigen organischen Traffic auf. Mit der Zeit reduzieren Sie Ihre Abhängigkeit von bezahlter Werbung, weil Ihre organischen Rankings immer stärker werden.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Für Unternehmen in Mönchengladbach bedeutet das: Sie dominieren die Suchergebnisseite auf mehreren Ebenen gleichzeitig – bezahlte Anzeigen oben, organische Ergebnisse darunter, Google Maps daneben. Wer Google so beherrscht, gewinnt den Markt.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Search Engine Marketing Mönchengladbach – Unsere Strategie</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Wir starten mit einer umfassenden Keyword-Analyse für Ihren lokalen Markt. Dann definieren wir, welche Keywords kurzfristig über Ads bespielt werden und welche langfristig organisch aufgebaut werden. Diese integrierte Strategie sorgt für maximale Effizienz Ihres Marketing-Budgets – heute und in Zukunft.</p>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Search Engine Marketing</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Was ist der Unterschied zwischen SEM und SEO?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">SEO ist ein Teil von SEM. SEM umfasst alle Suchmaschinen-Marketingmaßnahmen – also sowohl SEO (organisch) als auch bezahlte Suchanzeigen (Google Ads / SEA).</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Brauche ich wirklich beides – SEO und Google Ads?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Nicht unbedingt von Anfang an. Oft starten wir mit Google Ads für sofortige Ergebnisse und bauen parallel SEO auf. Mit der Zeit verschiebt sich die Balance Richtung organisch.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie lange bis SEM messbare Ergebnisse zeigt?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Google Ads liefert Ergebnisse ab Tag 1. SEO zeigt erste Verbesserungen nach 6–12 Wochen, signifikante Rankings nach 3–6 Monaten.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Ist SEM auch für kleine Unternehmen geeignet?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Absolut. Gerade kleine Unternehmen in Mönchengladbach profitieren, weil lokale Keywords oft weniger Wettbewerb und niedrigere Klickpreise haben als nationale Begriffe.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/google-ads" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Google Ads</a>
            <a href="/seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ SEO</a>
            <a href="/local-seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Local SEO</a>
            <a href="/web-analyse-setup" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Web Analyse</a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Jetzt Ihre SEM-Strategie entwickeln</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Buchen Sie ein kostenloses Gespräch und erfahren Sie, wie eine integrierte SEM-Strategie Ihrem Unternehmen in Mönchengladbach mehr Kunden bringt.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
