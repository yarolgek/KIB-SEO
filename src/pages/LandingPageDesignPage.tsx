import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function LandingPageDesignPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Landing Page Design Mönchengladbach - KI Brueder | Hochkonvertierende Landing Pages für Google Ads & Meta Ads near me',
    description: 'KI Brueder – Landing Page Design in Mönchengladbach. Hochkonvertierende Landing Pages für Google Ads, Meta Ads & organischen Traffic.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Landing Page Design Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Landing Page Design Mönchengladbach – Seiten die konvertieren</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Eine Landing Page hat nur ein Ziel: konvertieren. Keine Ablenkungen, keine Navigation quer durch die Website – nur eine klare Botschaft und eine einzige Handlungsaufforderung. Wir designen Landing Pages, die dieses Ziel konsequent verfolgen und messbar mehr Anfragen generieren.</p>
        </div>

        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Landing Page Design Mönchengladbach – Was eine erfolgreiche Seite ausmacht</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Der Unterschied zwischen einer guten und einer schlechten Landing Page liegt oft in Details, die auf den ersten Blick unsichtbar sind. Eine Headline, die das Problem Ihrer Zielgruppe direkt anspricht. Ein Angebot, das sofort klar macht, welchen Vorteil der Besucher hat. Sozialer Beweis durch echte Kundenstimmen oder konkrete Ergebnisse. Ein CTA-Button, der nicht 'Absenden' sagt, sondern eine konkrete Handlung beschreibt. Schnelle Ladezeit – jede Sekunde kostet Conversions. All das klingt einfach, aber die meisten Landing Pages in Mönchengladbach setzen es falsch um – und lassen dadurch täglich Leads liegen.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Landing Page Design Mönchengladbach – Für welche Zwecke wir sie erstellen</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Google Ads Landing Pages: Für jeden Ihrer Werbekampagnen-Typen erstellen wir eine thematisch passende Landing Page, die genau das liefert, was der Nutzer nach seinem Klick erwartet. Meta Ads Landing Pages: Optimiert für Social-Media-Traffic, der oft kälter ist als Suchtraffic – also mehr Überzeugungsarbeit braucht. Lokale Service-Pages: Für jeden Ihrer Services eine eigene Seite mit lokalem Fokus auf Mönchengladbach – gut für SEO und für Conversions. Event-Seiten: Für Webinare, Workshops oder lokale Events in Mönchengladbach mit klarer Registrierungsaufforderung.</p>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Landing Page Design in Mönchengladbach</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Was ist der Unterschied zwischen einer Landing Page und einer normalen Website-Seite?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Eine normale Website-Seite hat viele Ziele und Navigationsmöglichkeiten. Eine Landing Page hat genau ein Ziel – zum Beispiel eine Anfrage, eine Buchung oder ein Download. Keine Ablenkungen, maximaler Fokus.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Brauche ich für jede Werbekampagne eine eigene Landing Page?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Idealerweise ja. Eine Landing Page, die thematisch exakt zu Ihrer Anzeige passt, konvertiert deutlich besser als Ihre allgemeine Homepage.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie schnell kann eine Landing Page erstellt werden?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Eine einfache Landing Page ist in 5–7 Werktagen fertig. Komplexere Seiten mit vielen Inhalten dauern 2–3 Wochen.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Testen Sie Landing Pages nach der Erstellung?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ja. Wir richten A/B-Tests ein, um verschiedene Varianten gegeneinander zu testen und die Conversion-Rate kontinuierlich zu verbessern.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/website-erstellung" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Website Erstellung</a>
            <a href="/conversion-optimierung" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Conversion Optimierung</a>
            <a href="/google-ads" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Google Ads</a>
            <a href="/meta-ads" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Meta Ads</a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Mehr Leads durch bessere Landing Pages</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Lassen Sie uns gemeinsam eine Landing Page entwickeln, die wirklich konvertiert – für Ihre nächste Kampagne in Mönchengladbach.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
