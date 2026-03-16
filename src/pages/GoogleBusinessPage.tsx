import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function GoogleBusinessPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Google Business Profile Optimierung Mönchengladbach - KI Brueder | Google Maps, Bewertungen & Local Pack near me',
    description: 'KI Brueder – Google Business Profile Optimierung in Mönchengladbach. Local Pack Top 3, Bewertungsmanagement & Google Posts für lokale Unternehmen.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Google Business Profile Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Google Business Profile Mönchengladbach – Local Pack Optimierung</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Ihr Google Business Profile ist das erste, was potenzielle Kunden sehen, wenn sie in Mönchengladbach nach Ihrem Angebot suchen. Ein vollständig optimiertes Profil bedeutet mehr Sichtbarkeit, mehr Klicks, mehr Anrufe – und mehr Kunden. Ohne großes Werbebudget.</p>
        </div>

        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Google Business Profile Mönchengladbach – Warum es so wichtig ist</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Wenn jemand in Mönchengladbach nach einem lokalen Dienstleister sucht, zeigt Google zuerst das sogenannte Local Pack – drei Einträge mit Karte direkt unter der Suche. Diese drei Plätze bekommen den Löwenanteil der Klicks. Ihr Google Business Profile bestimmt, ob Sie dort erscheinen.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Ein unvollständiges oder schlecht optimiertes Profil kostet Sie täglich potenzielle Kunden – an Konkurrenten, die ihr Profil besser gepflegt haben. Wir ändern das.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Google Business Profile Mönchengladbach – Was wir optimieren</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Wir kümmern uns um jedes Detail: korrekte und vollständige Unternehmensinformationen, optimale Kategorien-Auswahl (Haupt- und Nebenkategorien), überzeugende Unternehmensbeschreibung mit relevanten Keywords für Mönchengladbach, professionelle Fotos (Außenansicht, Team, Leistungen), Einrichtung und regelmäßige Google Posts, Produkte und Dienstleistungen eintragen, Q&A-Bereich optimieren sowie eine Strategie zur kontinuierlichen Gewinnung neuer Google-Bewertungen.</p>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Google Business Profile in Mönchengladbach</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Ist Google Business Profile kostenlos?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ja, das Profil selbst ist komplett kostenlos. Die Kosten entstehen nur durch unsere Optimierungsarbeit, nicht durch Google selbst.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie wichtig sind Google-Bewertungen für das Ranking?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Sehr wichtig. Anzahl, Aktualität und Bewertungsdurchschnitt gehören zu den stärksten Ranking-Faktoren für lokale Suchanfragen. Wir helfen Ihnen, systematisch mehr positive Bewertungen zu gewinnen.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Was sind Google Posts und wie helfen sie?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Google Posts sind kurze Updates, die direkt in Ihrem Profil erscheinen – ähnlich wie Social-Media-Beiträge. Sie signalisieren Google, dass Ihr Profil aktiv gepflegt wird, und zeigen Kunden aktuelle Angebote oder News.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie lange dauert die Optimierung?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Die initiale Optimierung dauert 1–2 Wochen. Danach empfehlen wir ein monatliches Pflege-Paket, um das Profil aktuell und wettbewerbsfähig zu halten.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Was ist, wenn mein Profil schon existiert?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Kein Problem – wir übernehmen und optimieren bestehende Profile. Oft liegt es an kleinen Details, die viel Wirkung haben.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/local-seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Local SEO</a>
            <a href="/google-maps-optimierung" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Google Maps Optimierung</a>
            <a href="/seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ SEO</a>
            <a href="/web-analyse-setup" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Web Analyse</a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ihr Google Business Profil auf Top-Niveau bringen</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Buchen Sie Ihr kostenloses Gespräch und wir analysieren Ihr aktuelles Profil – mit konkreten Verbesserungsvorschlägen.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
