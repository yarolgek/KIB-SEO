import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function RegionHoltPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Online Marketing Holt Mönchengladbach - KI Brueder | Local SEO, Google Ads & Website Erstellung in Holt near me',
    description: 'KI Brueder – Online Marketing für Unternehmen in Holt, Mönchengladbach. Local SEO, Google Ads & professionelle Websites für lokale Betriebe in Holt.'
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/contact')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Online Marketing Holt · Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
            Online Marketing Holt – Local SEO, Google Ads & Website Erstellung
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Sie betreiben ein Unternehmen in Holt und wollen von lokalen Kunden bei Google gefunden werden? KI Brueder ist Ihre Online Marketing Agentur direkt in Mönchengladbach – ca. 5 km westlich vom Stadtzentrum. Wir kennen Ihren Stadtteil, Ihre Zielgruppe und den lokalen Wettbewerb genau.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Local SEO Holt – Gefunden werden, wo Ihre Kunden suchen</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Holt ist ein ruhiger Wohnstadtteil von Mönchengladbach mit familiärer Atmosphäre, lokaler Gemeinschaft und vielen kleinen Gewerbetreibenden. Für lokale Unternehmen gilt: Wer bei Google auf Seite 1 erscheint – und im Google Maps Local Pack – gewinnt täglich neue Kunden. Wer nicht sichtbar ist, verliert sie an die Konkurrenz.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            In Holt wird lokal gedacht – Kunden hier bevorzugen Anbieter aus dem Viertel. Online-Sichtbarkeit für 'Holt' schafft sofortiges Vertrauen bei der lokalen Kundschaft.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Typische Suchanfragen für die wir Ihr Unternehmen ranken: "Holt [Ihr Service]", "bester [Ihr Service] Holt", "[Ihr Service] Mönchengladbach Holt", "[Ihr Service] in der Nähe".
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-yellow-700 dark:text-yellow-400">Local SEO Holt – Was wir konkret tun</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Google Business Profile für Holt vollständig optimieren</li>
              <li>✓ Keywords wie "Holt [Service]" und "Mönchengladbach Holt" gezielt einbauen</li>
              <li>✓ Google Maps Top-3 für Suchanfragen aus Holt</li>
              <li>✓ Lokale Citations und Backlinks speziell für Holt</li>
              <li>✓ Bewertungsstrategie – mehr Google-Rezensionen aus Holt</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Google Ads Holt – Sofort sichtbar für Kunden in Ihrem Stadtteil</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Während Local SEO langfristig aufgebaut wird, bringt Google Ads sofortige Ergebnisse. Wir schalten Ihre Anzeigen gezielt für Suchanfragen aus Holt – kein Budget für irrelevante Klicks aus anderen Gebieten.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Auf Stadtteilebene ist der Wettbewerb oft geringer als in der Gesamtstadt – das bedeutet niedrigere Klickpreise und bessere Ergebnisse für Ihr Budget. Ideal für lokale Betriebe in Holt, die schnell neue Kunden gewinnen wollen.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Hyperlokal targeting für Holt', desc: 'Anzeigen ausschließlich für Suchanfragen aus Holt und direktem Umfeld – maximale Relevanz, kein Budgetverschwendung.' },
              { title: 'Weniger Wettbewerb auf Stadtteilebene', desc: 'Stadtteil-Keywords haben oft niedrigere Klickpreise als stadtweite Begriffe – mehr Leads für Ihr Budget.' },
              { title: 'Sofortige Ergebnisse ab Tag 1', desc: 'Google Ads ist vom ersten Tag an aktiv. Erste Anfragen aus Holt können schon in der ersten Woche kommen.' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Website Erstellung Holt – Ihre digitale Basis im Stadtteil</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Eine professionelle Website ist die Grundlage für alles andere. Ohne eine schnelle, mobile-optimierte und lokal ausgerichtete Website verpuffen SEO- und Google Ads-Investitionen. Wir bauen Websites, die speziell für lokale Rankings in Holt und Mönchengladbach optimiert sind.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Jede Website, die wir für Unternehmen in Holt entwickeln, enthält von Anfang an lokale SEO-Strukturen, Holt-spezifische Inhalte, korrekte NAP-Daten und eine Architektur, die Google signalisiert: dieses Unternehmen ist in Holt aktiv und relevant.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Häufige Fragen – Online Marketing Holt</h2>
          <div className="space-y-6">
            {[
              { q: 'Lohnt sich Local SEO speziell für Holt?', a: 'Ja. Stadtteil-Keywords wie "Holt Handwerker" oder "Holt Dienstleister" haben oft weniger Wettbewerb als stadtweite Begriffe – und die Suchenden sind extrem kaufbereit.' },
              { q: 'Wie schnell sehe ich Ergebnisse für mein Unternehmen in Holt?', a: 'Auf Stadtteilebene oft schneller als stadtweite Rankings. Erste Google Maps Verbesserungen sind häufig nach 3–6 Wochen sichtbar.' },
              { q: 'Was kostet Google Ads für ein lokales Unternehmen in Holt?', a: 'Für hyperlokal begrenzte Kampagnen in Holt reichen oft schon 200–400 € Monatsbudget für erste messbare Ergebnisse.' },
              { q: 'Optimieren Sie sowohl für Holt als auch für Mönchengladbach gesamt?', a: 'Ja, immer beides gleichzeitig. So decken Sie Stadtteil-Suchanfragen UND stadtweite Keywords ab – maximale Reichweite.' },
              { q: 'Betreuen Sie auch kleine Betriebe in Holt?', a: 'Ja. Viele unserer Kunden sind Einzelunternehmer und Kleinbetriebe. Wir finden immer eine Lösung, die zum Budget passt.' },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Weitere Stadtteile & Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Alle Regionen & Stadtteile', href: '/regionen' },
              { label: 'Local SEO Mönchengladbach', href: '/local-seo' },
              { label: 'Google Ads Management', href: '/google-ads' },
              { label: 'Website Erstellung Mönchengladbach', href: '/website-erstellung' },
              { label: 'SEO Mönchengladbach', href: '/seo' },
              { label: 'Google Business Profile Optimierung', href: '/google-business-profile' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ {link.label}</a>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ihr Unternehmen in Holt bei Google sichtbar machen</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
            Buchen Sie jetzt Ihr kostenloses Strategiegespräch. Wir zeigen Ihnen in 30 Minuten, wie wir Ihr Unternehmen in Holt bei Google nach vorne bringen.
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
