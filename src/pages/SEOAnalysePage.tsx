import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function SEOAnalysePage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST SEO Analyse Mönchengladbach - KI Brueder | SEO Audit, Wettbewerber-Analyse & Keyword-Recherche near me',
    description: 'KI Brueder – SEO Analyse in Mönchengladbach. Kostenloser SEO Audit, Wettbewerber-Analyse & Keyword-Recherche für nachhaltige Rankings.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">SEO Analyse Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">SEO Analyse Mönchengladbach – Ihr kostenloses SEO Audit</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Bevor wir optimieren, verstehen wir. Eine professionelle SEO-Analyse gibt Ihnen ein klares Bild: Wo steht Ihre Website heute? Was machen Ihre Mitbewerber in Mönchengladbach besser? Und welche Maßnahmen bringen den größten Impact? Ohne Daten optimiert man ins Blaue.</p>
        </div>

        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">SEO Analyse Mönchengladbach – Was wir untersuchen</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Technischer Audit: Wir analysieren Ihre Website auf über 100 technische Faktoren – Ladegeschwindigkeit, Crawling-Fehler, Duplicate Content, fehlende Alt-Texte, kaputte Links, Weiterleitungsketten und Core Web Vitals. Das ist die Grundlage, auf der alles andere aufbaut.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Keyword-Analyse: Für welche Suchbegriffe rankt Ihre Website bereits? Welche relevanten Keywords fehlen noch? Wo gibt es Potenzial für schnelle Verbesserungen?</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Wettbewerber-Analyse: Wir untersuchen Ihre drei bis fünf stärksten Konkurrenten in Mönchengladbach: Welche Keywords ranken sie? Wie stark ist ihr Backlink-Profil? Was machen sie inhaltlich besser?</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Backlink-Analyse: Qualität und Quantität Ihrer eingehenden Links im Vergleich zum Wettbewerb – inklusive toxischer Links, die Ihrem Ranking schaden könnten.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">SEO Analyse Mönchengladbach – Was Sie danach erhalten</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Kein Datenberg ohne Konsequenz. Sie erhalten einen klaren, priorisierten Maßnahmenplan: Was sollte sofort umgesetzt werden? Was bringt mittelfristig die größten Gewinne? Und welche Maßnahmen sind langfristig strategisch wichtig? Mit diesem Plan können Sie selbst tätig werden – oder uns mit der Umsetzung beauftragen.</p>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: SEO Analyse in Mönchengladbach</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie lange dauert eine professionelle SEO-Analyse?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Eine gründliche Analyse dauert 3–5 Werktage. Das Ergebnis präsentieren wir Ihnen in einem persönlichen Gespräch, damit alle Punkte klar verständlich sind.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Was kostet eine SEO-Analyse?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Wir bieten ein kostenloses Basis-Audit an, das die wichtigsten Probleme identifiziert. Eine vollständige Tiefenanalyse inklusive Wettbewerbervergleich ist kostenpflichtig – die genauen Kosten besprechen wir im Erstgespräch.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Kann ich die Analyse-Ergebnisse selbst umsetzen?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ja. Wir erstellen den Maßnahmenplan so, dass er auch für Nicht-Techniker verständlich ist. Natürlich stehen wir auch für die Umsetzung zur Verfügung.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie aktuell sind die Analysedaten?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Wir nutzen professionelle SEO-Tools mit tagesaktuellen Daten. Die Analyse spiegelt den aktuellen Stand Ihrer Website und des Wettbewerbs wider.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ SEO Mönchengladbach</a>
            <a href="/seo-services" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ SEO Services</a>
            <a href="/local-seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Local SEO</a>
            <a href="/web-analyse-setup" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Web Analyse</a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Jetzt kostenlose SEO-Analyse anfordern</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Wir analysieren Ihre Website kostenlos und zeigen Ihnen in einem Gespräch, wo die größten Potenziale liegen.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
