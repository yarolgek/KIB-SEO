import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function ConversionPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Conversion Optimierung Mönchengladbach - KI Brueder | CRO, A/B Testing, Heatmaps & mehr Leads near me',
    description: 'KI Brueder – Conversion Optimierung in Mönchengladbach. CRO, A/B Testing, Heatmaps & Funnel Optimierung für mehr Leads aus bestehendem Traffic.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Conversion Optimierung Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Conversion Optimierung Mönchengladbach – Mehr Leads, gleicher Traffic</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Mehr Traffic ist nicht immer die Antwort. Oft liegt das größte Wachstumspotenzial in der Optimierung bestehender Seiten. Wenn Ihre Website 1.000 Besucher pro Monat hat und 1% davon konvertiert, haben Sie 10 Leads. Steigern wir die Conversion-Rate auf 3%, sind es 30 Leads – ohne einen Cent mehr für Werbung auszugeben.</p>
        </div>

        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Conversion Optimierung Mönchengladbach – Was CRO bedeutet</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Conversion-Rate-Optimierung ist der systematische Prozess, den Anteil der Website-Besucher zu erhöhen, die eine gewünschte Aktion ausführen – sei es eine Anfrage senden, anrufen, buchen oder kaufen. Wir analysieren das Verhalten Ihrer Besucher, identifizieren Hürden und Reibungspunkte und beseitigen diese durch gezielte Änderungen an Text, Design und Struktur.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Conversion Optimierung Mönchengladbach – Unsere CRO-Methoden</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Heatmap-Analyse: Wir sehen genau, wohin Besucher klicken, wie weit sie scrollen und wo sie die Seite verlassen. Das zeigt, wo die Aufmerksamkeit liegt – und wo Potenzial verloren geht.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Nutzerverhalten-Analyse: Durch Session-Recordings verstehen wir, wie echte Besucher Ihre Website erleben – welche Elemente verwirren, welche überzeugen.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">A/B-Testing: Wir testen verschiedene Varianten gegeneinander: andere Headlines, andere CTAs, andere Formulare, andere Bilder – und messen, was mehr Conversions bringt.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Funnel-Optimierung: Wir analysieren, an welchem Punkt Nutzer den Kaufprozess abbrechen, und optimieren diese kritischen Stellen gezielt.</p>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Conversion Optimierung in Mönchengladbach</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Was ist eine gute Conversion-Rate?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Das hängt stark von der Branche und dem Angebot ab. Für lokale Dienstleister in Mönchengladbach sind 2–5% für Kontaktanfragen ein guter Richtwert. E-Commerce liegt meist bei 1–3%.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie lange dauert es, bis CRO-Maßnahmen wirken?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Einfache Änderungen wie bessere CTAs oder schnellere Ladezeit wirken sofort. A/B-Tests brauchen genug Traffic, um statistisch aussagekräftig zu sein – das dauert je nach Traffic 2–8 Wochen.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Brauche ich viel Traffic für sinnvolle CRO?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Für A/B-Tests brauchen Sie idealerweise mindestens 500–1.000 Besucher pro Monat. Für qualitative Methoden wie Heatmaps und Session-Recordings reicht auch weniger Traffic.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Funktioniert CRO auch für meine Branche?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ja. Jede Website, die eine Aktion von Besuchern möchte – Anfrage, Buchung, Kauf – profitiert von Conversion-Optimierung.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/website-optimierung" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Website Optimierung</a>
            <a href="/landing-page-design" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Landing Page Design</a>
            <a href="/web-analyse-setup" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Web Analyse Setup</a>
            <a href="/google-ads" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Google Ads</a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Mehr aus Ihrem bestehenden Traffic herausholen</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Buchen Sie Ihr kostenloses CRO-Gespräch und wir zeigen Ihnen, wo Ihre Website aktuell Leads verliert.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
