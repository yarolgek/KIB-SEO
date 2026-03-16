import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function GoogleMapsPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Google Maps Optimierung Mönchengladbach - KI Brueder | Local Pack, Google Business & lokale Sichtbarkeit near me',
    description: 'KI Brueder – Google Maps Optimierung in Mönchengladbach. Top 3 Local Pack erreichen durch Google Business Optimierung, Bewertungen & lokale Citations.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Google Maps Optimierung Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Google Maps Mönchengladbach – Top 3 Local Pack erreichen</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Wenn jemand in Mönchengladbach nach Ihrem Service sucht, sieht er vor den normalen Suchergebnissen die Google Maps-Einträge. Diese drei Positionen – das sogenannte Local Pack – sind Gold wert. Wir optimieren Ihren Auftritt gezielt für maximale Sichtbarkeit auf Google Maps.</p>
        </div>

        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Google Maps Mönchengladbach – Wie das Ranking funktioniert</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Google bewertet lokale Unternehmen nach drei Hauptfaktoren: Relevanz (passt Ihr Angebot zur Suchanfrage?), Entfernung (wie nah sind Sie zum Suchenden?) und Bekanntheit (wie etabliert und bekannt ist Ihr Unternehmen online?). Den dritten Faktor können wir am stärksten beeinflussen – durch ein optimiertes Google Business Profile, starke Bewertungen, konsistente Citations in Verzeichnissen und lokale Backlinks.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Google Maps Mönchengladbach – Unsere Optimierungsmaßnahmen</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Wir optimieren Ihr Google Business Profile vollständig, erarbeiten eine Bewertungsstrategie für mehr und bessere Google-Rezensionen, sorgen für konsistente NAP-Daten (Name, Adresse, Telefon) in allen relevanten Verzeichnissen, bauen lokale Citations in deutschen Branchenverzeichnissen auf und erstellen lokalen Content, der Ihre Relevanz für Mönchengladbach stärkt.</p>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Google Maps Optimierung in Mönchengladbach</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie lange dauert es, in die Top 3 auf Google Maps zu kommen?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Das hängt stark vom Wettbewerb in Ihrer Branche ab. In weniger umkämpften Branchen sind Verbesserungen oft nach 4–8 Wochen sichtbar. In stark umkämpften Bereichen kann es 3–6 Monate dauern.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Kann ich Google Maps Ranking kaufen?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Nein. Google Maps-Rankings können nicht direkt gekauft werden – sie entstehen durch echte Optimierungsarbeit, Bewertungen und lokale Autorität.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Was ist der Unterschied zwischen Google Maps und Google Business Profile?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Google Business Profile ist das Verwaltungstool für Ihren Eintrag. Google Maps ist die Plattform, auf der Ihr Eintrag für Nutzer sichtbar ist. Beides ist eng verknüpft.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Lohnt sich Google Maps Optimierung für mobile Suchen?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Absolut. Über 60% aller lokalen Suchanfragen kommen vom Smartphone – und dort dominiert Google Maps die Ergebnisseite noch stärker als auf dem Desktop.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/local-seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Local SEO</a>
            <a href="/google-business-profile" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Google Business Profile</a>
            <a href="/seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ SEO</a>
            <a href="/web-analyse-setup" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Web Analyse</a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">In Mönchengladbach auf Google Maps gefunden werden</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Buchen Sie Ihr kostenloses Gespräch und erfahren Sie, wo Sie aktuell stehen und was nötig ist, um in die Top 3 zu kommen.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
