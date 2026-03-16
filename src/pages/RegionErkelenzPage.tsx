import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function RegionErkelenzPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Online Marketing Agentur Erkelenz - KI Brueder | Local SEO, Google Ads & Website Erstellung für Unternehmen in Erkelenz near me',
    description: 'KI Brueder – Online Marketing für Unternehmen in Erkelenz. Local SEO, Google Ads & professionelle Websites vom Niederrhein-Spezialisten aus Mönchengladbach.'
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/contact')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Online Marketing Erkelenz</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
            Online Marketing Agentur Erkelenz – Local SEO, Google Ads & Website Erstellung
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Sie betreiben ein Unternehmen in Erkelenz und wollen bei Google gefunden werden – von lokalen Kunden, die genau jetzt nach Ihrem Angebot suchen? KI Brueder aus Mönchengladbach (ca. 30 km) ist Ihr Spezialist für Online Marketing in Erkelenz und der gesamten Niederrheinregion.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Local SEO Erkelenz – Mehr lokale Kunden durch bessere Google-Sichtbarkeit</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Erkelenz ist eine charmante Mittelstadt im Kreis Heinsberg mit starkem lokalem Mittelstand, traditionellem Marktplatz und einer wachsenden Unternehmenslandschaft. Für lokale Unternehmen bedeutet das: Wer bei Google auf Seite 1 erscheint, gewinnt. Wer nicht gefunden wird, verliert täglich potenzielle Kunden an die Konkurrenz – oft an Betriebe, die nicht mal besser sind, sondern nur besser sichtbar.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Erkelenz ist ein Markt mit großem Potenzial – viele lokale Unternehmen sind noch kaum online präsent, was für unsere Kunden einen klaren Wettbewerbsvorteil bedeutet.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Mit unserer Local-SEO-Strategie sorgen wir dafür, dass Ihr Unternehmen in Erkelenz bei den relevanten Suchanfragen ganz oben erscheint – in den organischen Ergebnissen und im Google Maps Local Pack. Typische Suchanfragen, für die wir ranken: "[Ihr Service] Erkelenz", "bester [Ihr Service] in der Nähe", "[Ihr Service] Erkelenz empfehlung".
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-yellow-700 dark:text-yellow-400">Local SEO Erkelenz – Was wir konkret tun</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Google Business Profile Optimierung speziell für Erkelenz</li>
              <li>✓ Lokale Keyword-Strategie mit Erkelenz-spezifischen Suchbegriffen</li>
              <li>✓ On-Page Optimierung mit lokalem Fokus auf Erkelenz und Umgebung</li>
              <li>✓ Aufbau lokaler Citations & Backlinks in relevanten Verzeichnissen</li>
              <li>✓ Bewertungsmanagement – mehr Google-Rezensionen, besseres Ranking</li>
              <li>✓ Google Maps Top-3 – das Local Pack, das die meisten Klicks bekommt</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Google Ads Erkelenz – Sofortige Sichtbarkeit für kaufbereite Kunden</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Local SEO wirkt nachhaltig – aber es braucht Zeit. Wenn Sie sofort neue Kunden in Erkelenz gewinnen wollen, ist Google Ads die perfekte Ergänzung. Ihre Anzeige erscheint ganz oben bei Google, wenn jemand in Erkelenz aktiv nach Ihrem Angebot sucht – ab dem ersten Tag der Kampagne.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Sie zahlen nur, wenn jemand auf Ihre Anzeige klickt – kein Streuverlust, kein Blindbudget. Wir übernehmen das komplette Management: Keyword-Recherche für Erkelenz, Anzeigentexte, Gebotsoptimierung, Conversion-Tracking und monatliches Reporting.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Lokales Targeting für Erkelenz', desc: 'Wir schalten Ihre Anzeigen ausschließlich für Suchanfragen aus Erkelenz und der direkten Umgebung – kein Budget für irrelevante Klicks von außerhalb.' },
              { title: 'Nur für kaufbereite Interessenten', desc: 'Google Ads erreicht Menschen, die aktiv nach Ihrem Service suchen – nicht zufällige Seitenbesucher. Das bedeutet höhere Conversion-Rates und bessere Leads.' },
              { title: 'Messbar bis auf den letzten Cent', desc: 'Wir richten vollständiges Conversion-Tracking ein: Anrufe, Formularanfragen, Buchungen. Sie sehen genau, was jeder investierte Euro bringt.' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Website Erstellung Erkelenz – Ihre digitale Basis für lokales Wachstum</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Local SEO und Google Ads können nur so gut sein wie die Website, auf die sie zeigen. Eine langsame, veraltete oder schlecht strukturierte Website verschwendet Ihr Marketing-Budget – egal wie viel Traffic Sie darauf schicken.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Wir entwickeln professionelle Websites für Unternehmen in Erkelenz: schnell, mobil-optimiert, SEO-freundlich und auf Conversions ausgelegt. Jede Website, die wir bauen, ist von Anfang an auf lokales Ranking in Erkelenz ausgerichtet.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-yellow-700 dark:text-yellow-400">Was in jeder Website steckt</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Blitzschnelle Ladezeiten – Core Web Vitals optimiert</li>
              <li>✓ 100% mobil-responsiv – perfekt auf Smartphone, Tablet und Desktop</li>
              <li>✓ SEO-Grundstruktur für Erkelenz von Anfang an eingebaut</li>
              <li>✓ Klare Handlungsaufforderungen – mehr Anfragen, mehr Anrufe</li>
              <li>✓ DSGVO-konform mit Cookie-Banner und Datenschutz</li>
              <li>✓ Lokal optimierte Inhalte für bessere Rankings in Erkelenz</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Warum Unternehmen in Erkelenz auf KI Brueder setzen</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Als Agentur aus Mönchengladbach kennen wir den Markt am Niederrhein – inklusive Erkelenz. Wir verstehen die lokale Wettbewerbssituation, die Suchgewohnheiten Ihrer Zielkunden und was nötig ist, um sich in Erkelenz digital durchzusetzen. Keine Standardlösungen von der Stange – sondern Strategien, die zu Ihrer Stadt passen.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Regionales Marktverständnis Niederrhein',
              'Messbare Ergebnisse – keine Eitelkeitsmetriken',
              'Local SEO, Google Ads & Website aus einer Hand',
              'Garantierte Lead-Generierung (8 Termine/Monat)',
              'DSGVO-konforme Umsetzung',
              'Persönlicher Ansprechpartner – kein Ticketsystem',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-yellow-500 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Häufige Fragen – Online Marketing Erkelenz</h2>
          <div className="space-y-6">
            {[
              { q: 'Betreuen Sie auch Unternehmen in Erkelenz?', a: 'Ja, absolut. Wir arbeiten vollständig online und betreuen Unternehmen in Erkelenz, Mönchengladbach und der gesamten Niederrheinregion. Der Standort spielt für unsere Zusammenarbeit keine Rolle.' },
              { q: 'Wie lange dauert es, bis Local SEO in Erkelenz Ergebnisse zeigt?', a: 'Erste spürbare Verbesserungen sind oft nach 4–8 Wochen sichtbar. Für stabile Top-Rankings in Erkelenz planen Sie bitte 3–6 Monate ein. Google Ads liefert parallel sofortige Sichtbarkeit.' },
              { q: 'Was kostet eine Website für ein Unternehmen in Erkelenz?', a: 'Eine professionelle Unternehmenswebsite beginnt bei ca. 1.500–3.000 €. Im kostenlosen Erstgespräch erstellen wir ein transparentes Angebot, das genau zu Ihrem Bedarf passt.' },
              { q: 'Kann ich Local SEO und Google Ads kombinieren?', a: 'Ja – und das empfehlen wir sogar. Google Ads liefert sofortige Ergebnisse, während Local SEO langfristig kostenlosen organischen Traffic aufbaut. Zusammen dominieren Sie die Google-Suchergebnisse in Erkelenz auf mehreren Ebenen.' },
              { q: 'Wie viel Budget brauche ich für Google Ads in Erkelenz?', a: 'Für lokale Kampagnen in Erkelenz empfehlen wir ein Mindest-Werbebudget von 300–500 € pro Monat. Bei weniger Wettbewerb als in Großstädten reicht das oft für sehr gute Ergebnisse.' },
              { q: 'Wie unterscheiden Sie sich von anderen Agenturen?', a: 'Wir arbeiten ergebnisbasiert und bieten ein Garantieversprechen: Mindestens 8 neue Verkaufstermine pro Monat durch Lead Generierung – oder Sie zahlen nicht. Außerdem berichten wir ausschließlich über Metriken, die wirklich zählen.' },
              { q: 'Brauche ich alle drei Leistungen gleichzeitig?', a: 'Nein. Viele Kunden starten mit einer Leistung und erweitern dann. Im Erstgespräch analysieren wir gemeinsam, wo für Ihr Unternehmen in Erkelenz der größte Hebel liegt.' },
              { q: 'Gibt es eine Mindestvertragslaufzeit?', a: 'Für monatliche SEO-Leistungen empfehlen wir mindestens 6 Monate, damit die Maßnahmen wirken können. Google Ads läuft monatlich kündbar. Eine einmalige Website hat keine laufende Bindung.' },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Weitere Regionen & Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Alle Regionen die wir betreuen', href: '/regionen' },
              { label: 'Local SEO Mönchengladbach', href: '/local-seo' },
              { label: 'Google Ads Management', href: '/google-ads' },
              { label: 'Website Erstellung Mönchengladbach', href: '/website-erstellung' },
              { label: 'SEO Mönchengladbach', href: '/seo' },
              { label: 'KI Lösungen & Automatisierung', href: '/ai' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ {link.label}</a>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ihr Unternehmen in Erkelenz bei Google nach vorne bringen</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
            Buchen Sie jetzt Ihr kostenloses Strategiegespräch. In 30 Minuten zeigen wir Ihnen konkret, wie wir Ihr Unternehmen in Erkelenz bei Google sichtbar machen – mit Local SEO, Google Ads oder einer neuen Website.
          </p>
          <button onClick={() => navigate('/contact')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">
            Kostenloses Gespräch buchen
          </button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
