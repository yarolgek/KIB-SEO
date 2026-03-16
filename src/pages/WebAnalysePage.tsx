import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function WebAnalysePage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Web Analyse Setup Mönchengladbach - KI Brueder | Google Analytics 4, Search Console & Conversion Tracking near me',
    description: 'KI Brueder – Web Analyse Setup in Mönchengladbach. Google Analytics 4, Search Console, Conversion Tracking & DSGVO-konformes Tracking.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Web Analyse Setup Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Web Analyse Mönchengladbach – Google Analytics & Tracking Setup</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Ohne saubere Daten ist Online-Marketing Raten. Mit dem richtigen Web-Analyse-Setup wissen Sie jederzeit: Woher kommen Ihre Besucher? Was tun sie auf Ihrer Website? Welche Seiten konvertieren? Und wo verlieren Sie täglich potenzielle Kunden? Wir richten Ihr Tracking professionell ein – damit jede Marketing-Entscheidung auf Fakten basiert.</p>
        </div>

        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Web Analyse Mönchengladbach – Was ein professionelles Setup umfasst</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Google Analytics 4 (GA4) ist die Basis: korrekte Installation, Konfiguration aller relevanten Events, Ausschluss interner Zugriffe und Verknüpfung mit Google Search Console und Google Ads.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Conversion-Tracking: Was zählt als Erfolg auf Ihrer Website? Formularabsendungen, Anrufe, Buchungen, Newsletter-Anmeldungen? Wir richten für jedes wichtige Ziel ein präzises Tracking ein, damit Sie wissen, welche Kanäle und Seiten wirklich konvertieren.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Google Search Console: Unverzichtbar für SEO – zeigt, für welche Suchanfragen Ihre Website bei Google erscheint, wie viele Klicks Sie erhalten und ob es technische Probleme gibt.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Google Tag Manager: Flexibles Tag-Management ohne Entwickleraufwand – macht es einfacher, zukünftige Tracking-Anpassungen schnell umzusetzen.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Web Analyse Mönchengladbach – Warum sauberes Tracking so wichtig ist</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Falsche Daten führen zu falschen Entscheidungen. Wir sehen regelmäßig Websites, bei denen das Tracking fehlerhaft aufgesetzt ist: Conversions werden doppelt gezählt, interne Zugriffe verfälschen die Daten, oder wichtige Events werden gar nicht erfasst. Das Ergebnis: Marketing-Budgets werden falsch allokiert, weil man nicht weiß, was wirklich funktioniert. Wir stellen sicher, dass Ihre Daten zuverlässig und vollständig sind.</p>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Web Analyse in Mönchengladbach</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Brauche ich wirklich Google Analytics, wenn ich eh eine kleine Website habe?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ja. Auch für kleine Websites ist es wichtig zu wissen, woher Besucher kommen und was sie tun. Ohne diese Daten können Sie keine fundierten Entscheidungen treffen.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Was ist der Unterschied zwischen Google Analytics und Google Search Console?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Google Analytics zeigt, was Besucher auf Ihrer Website tun. Google Search Console zeigt, wie Ihre Website in den Google-Suchergebnissen performt. Beide zusammen geben ein vollständiges Bild.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Ist mein bestehendes Google Analytics korrekt eingerichtet?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">In den meisten Fällen gibt es Optimierungspotenzial. Wir führen ein kostenloses Tracking-Audit durch und zeigen Ihnen, ob Ihre Daten verlässlich sind.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Ist das Tracking DSGVO-konform?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ja. Wir richten Analytics mit IP-Anonymisierung, korrektem Cookie-Banner und Datenschutzeinstellungen ein, die den deutschen DSGVO-Anforderungen entsprechen.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ SEO</a>
            <a href="/conversion-optimierung" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Conversion Optimierung</a>
            <a href="/website-optimierung" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Website Optimierung</a>
            <a href="/google-ads" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Google Ads</a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Endlich wissen, was auf Ihrer Website wirklich passiert</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Buchen Sie Ihr kostenloses Gespräch – wir richten Ihr Tracking sauber ein und zeigen Ihnen, wie Sie die Daten nutzen.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
