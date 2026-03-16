import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function MetaAdsPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Meta Ads Agentur Mönchengladbach - KI Brueder | Facebook Ads, Instagram Ads & Social Media Werbung near me',
    description: 'KI Brueder – Meta Ads Agentur in Mönchengladbach. Facebook & Instagram Werbung mit präzisem Targeting für lokale Unternehmen am Niederrhein.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Meta Ads Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Meta Ads Mönchengladbach – Facebook & Instagram Werbung</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Während Google Ads Menschen erreicht, die aktiv suchen, sprechen Meta Ads Ihre Zielgruppe an, bevor sie überhaupt wissen, dass sie Ihr Angebot brauchen. Das ist der entscheidende Unterschied – und ein enormes Potenzial für Unternehmen in Mönchengladbach.</p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Meta Ads Mönchengladbach – Was sie so wirkungsvoll macht</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Meta Ads sind bezahlte Werbeanzeigen auf Facebook und Instagram – zwei der meistgenutzten Plattformen in Deutschland. Der einzigartige Vorteil: Meta verfügt über unglaublich detaillierte Daten zu seinen Nutzern – Interessen, Verhalten, Standort, Alter, Beruf und vieles mehr.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Das bedeutet für Sie: Wir können Ihre Anzeigen exakt den Menschen zeigen, die mit höchster Wahrscheinlichkeit an Ihrem Angebot interessiert sind – in Mönchengladbach, in einem bestimmten Stadtteil oder in einem definierten Umkreis. Kein Streuverlust, maximale Relevanz.</p>
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-yellow-700 dark:text-yellow-400">Die Stärken von Meta Ads</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Detailliertestes Targeting aller Werbeplattformen</li>
              <li>✓ Visuelles Format – ideal für Produkte und Dienstleistungen</li>
              <li>✓ Gleichzeitig auf Facebook UND Instagram präsent</li>
              <li>✓ Retargeting: Website-Besucher erneut ansprechen</li>
              <li>✓ Lookalike Audiences: neue Kunden finden, die Ihren besten ähneln</li>
              <li>✓ Oft günstigere Klickpreise als Google Ads</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Meta Ads Mönchengladbach – Unsere Leistungen</h2>
          <div className="space-y-6">
            {[
              { title: 'Zielgruppen-Definition & Targeting', desc: 'Wir analysieren Ihre idealen Kunden in Mönchengladbach und erstellen präzise Zielgruppen basierend auf Standort, Interessen, Verhalten und demografischen Merkmalen. So erreichen Ihre Anzeigen nur relevante Personen.' },
              { title: 'Creative-Erstellung', desc: 'Das Bild oder Video in einer Meta-Anzeige entscheidet über Erfolg oder Misserfolg. Wir erstellen ansprechende Anzeigen-Creatives mit überzeugenden Texten, klaren Botschaften und starken Call-to-Actions.' },
              { title: 'Kampagnen-Setup & Pixel-Integration', desc: 'Wir installieren den Meta Pixel auf Ihrer Website, richten alle Conversion-Events ein und strukturieren Ihre Kampagnen nach bewährten Frameworks (Awareness → Consideration → Conversion).' },
              { title: 'Retargeting-Kampagnen', desc: 'Bis zu 97% der Website-Besucher kaufen beim ersten Besuch nicht. Mit Retargeting sprechen wir diese Personen gezielt erneut an – mit maßgeschneiderten Botschaften, die zum nächsten Schritt animieren.' },
              { title: 'A/B-Testing', desc: 'Wir testen systematisch verschiedene Anzeigenvarianten gegeneinander: unterschiedliche Bilder, Texte, Zielgruppen und CTAs. So finden wir heraus, was bei Ihrer Zielgruppe in Mönchengladbach am besten funktioniert.' },
              { title: 'Optimierung & Reporting', desc: 'Wöchentliche Optimierung der Kampagnen und monatliche Reports mit allen wichtigen KPIs: Reichweite, Klickrate, Cost-per-Lead und Return on Ad Spend (ROAS).' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Meta Ads Mönchengladbach – Wann sie die richtige Wahl sind</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Meta Ads sind besonders stark, wenn:</p>
          <div className="space-y-3">
            {[
              'Ihr Angebot visuell ansprechend ist (Produkte, Before/After, Räumlichkeiten)',
              'Sie eine klar definierte lokale Zielgruppe in Mönchengladbach ansprechen wollen',
              'Sie Ihre Markenbekanntheit in der Region steigern möchten',
              'Sie Website-Besucher erneut ansprechen wollen (Retargeting)',
              'Sie ein jüngeres Publikum (18–45 Jahre) erreichen wollen',
              'Sie Events, Angebote oder saisonale Aktionen bewerben möchten',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold mt-1">✓</span>
                <p className="text-gray-600 dark:text-gray-400">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Meta Ads in Mönchengladbach</h2>
          <div className="space-y-6">
            {[
              { q: 'Was ist der Unterschied zwischen Meta Ads und Google Ads?', a: 'Google Ads erreicht Menschen, die aktiv suchen. Meta Ads erreicht Menschen basierend auf Interessen und Verhalten – auch wenn sie gerade nicht suchen. Beide ergänzen sich ideal.' },
              { q: 'Wie viel Budget brauche ich für Meta Ads?', a: 'Für erste aussagekräftige Ergebnisse empfehlen wir mindestens 300–500 € Werbebudget pro Monat. Der Algorithmus braucht eine gewisse Datenmenge, um sich zu optimieren.' },
              { q: 'Funktionieren Meta Ads auch für B2B-Unternehmen?', a: 'Ja, allerdings ist LinkedIn für reines B2B oft effektiver. Meta Ads funktionieren gut für B2B, wenn die Entscheider auch privat auf Facebook/Instagram aktiv sind – was häufig der Fall ist.' },
              { q: 'Wie lange dauert es, bis ich Ergebnisse sehe?', a: 'Die ersten Ergebnisse sind oft nach 1–2 Wochen sichtbar. Für stabile, optimierte Ergebnisse sollten Sie mindestens 4–6 Wochen einplanen, da der Meta-Algorithmus eine Lernphase benötigt.' },
              { q: 'Erstellen Sie auch die Anzeigenbilder?', a: 'Ja, wir erstellen einfache, professionelle Bild-Creatives. Für aufwändige Videoproduktionen arbeiten wir mit lokalen Partnern zusammen.' },
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
            {[{ label: 'Facebook Ads', href: '/facebook-ads' }, { label: 'Google Ads Management', href: '/google-ads' }, { label: 'Lead Generierung', href: '/lead-generierung' }, { label: 'Landing Page Design', href: '/landing-page-design' }, { label: 'Conversion Optimierung', href: '/conversion-optimierung' }, { label: 'Digitale Werbung', href: '/digitale-werbung' }].map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ {link.label}</a>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Mehr Kunden durch Meta Ads in Mönchengladbach</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Lassen Sie uns in einem kostenlosen Gespräch herausfinden, ob und wie Meta Ads für Ihr Unternehmen funktionieren können.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
