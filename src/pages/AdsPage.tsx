import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function AdsPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Online Marketing Agentur Mönchengladbach - KI Brueder | Google Ads, Meta Ads, Facebook Ads & Digitale Werbung near me',
    description: 'KI Brueder – Ihre Online Marketing Agentur in Mönchengladbach. Google Ads, Meta Ads, Facebook Ads & digitale Werbung für messbare Ergebnisse.'
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />

      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Digitale Werbung Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Online Marketing Agentur Mönchengladbach – Google Ads & Meta Ads</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Bezahlte Werbung ist der schnellste Weg zu neuen Kunden – wenn sie richtig gemacht wird. 
            Falsch eingesetzt, verbrennt sie Ihr Budget ohne messbare Ergebnisse. Als erfahrene 
            Performance-Marketing-Agentur in Mönchengladbach sorgen wir dafür, dass jeder investierte 
            Euro maximalen Return bringt.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Digitale Werbung Mönchengladbach – Warum sie so wirkungsvoll ist</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            SEO braucht Zeit. Wenn Sie sofort neue Kunden brauchen, ist bezahlte Werbung die Lösung. 
            Mit Google Ads, Meta Ads (Facebook & Instagram) und Search Engine Marketing können Sie 
            bereits heute Abend potenzielle Kunden in Mönchengladbach erreichen – präzise, messbar und skalierbar.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Das Besondere an digitalem Marketing im Vergleich zu klassischer Werbung: Sie bezahlen nur 
            für tatsächliche Ergebnisse. Kein Streuverlust wie bei Flyern oder Zeitungsanzeigen – 
            nur echte Interessenten, die aktiv nach Ihrem Angebot suchen oder perfekt zu Ihrer Zielgruppe passen.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-yellow-700 dark:text-yellow-400">Der Vorteil von Performance Marketing</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Sofortige Sichtbarkeit – bereits am ersten Tag</li>
              <li>✓ Präzises Targeting nach Standort, Interessen und Verhalten</li>
              <li>✓ Vollständige Kostenkontrolle – Sie bestimmen das Budget</li>
              <li>✓ Messbare Ergebnisse: Klicks, Leads, Verkäufe in Echtzeit</li>
              <li>✓ Skalierbar: Was funktioniert, wird ausgebaut</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Unsere Werbe-Leistungen im Detail</h2>

          <div className="space-y-8">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Google Ads Management</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                Google Ads ist die direkteste Form der Neukundengewinnung: Jemand sucht aktiv nach Ihrem 
                Angebot – und Ihre Anzeige erscheint ganz oben. Kein anderer Kanal liefert kaufbereite 
                Interessenten so effizient.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Wir übernehmen das komplette Management Ihrer Google-Ads-Kampagnen: Keyword-Recherche, 
                Anzeigenerstellung, Gebotsoptimierung, A/B-Tests und monatliches Reporting. Dabei fokussieren 
                wir uns auf Konversionen – nicht auf Klicks um ihrer selbst willen.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Meta Ads (Facebook & Instagram)</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                Meta Ads ermöglichen es, Ihre Zielgruppe in Mönchengladbach auf Facebook und Instagram 
                anzusprechen – bevor sie aktiv nach Ihnen suchen. Ideal für Awareness-Kampagnen, 
                Angebotspromotion und Retargeting von Website-Besuchern.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Besonders effektiv für B2C-Unternehmen, E-Commerce, Events und Dienstleister mit 
                visuell ansprechenden Angeboten. Wir erstellen überzeugende Creatives, definieren 
                präzise Zielgruppen und optimieren kontinuierlich für maximale Ergebnisse.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Facebook Ads für lokale Unternehmen</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                Facebook bleibt trotz aller Diskussionen eine der reichweitenstärksten Plattformen in 
                Deutschland – besonders für die Zielgruppen 35+. Für lokale Unternehmen in Mönchengladbach 
                bieten Facebook Ads eine einzigartige Möglichkeit, Personen in einem bestimmten Umkreis 
                gezielt anzusprechen.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Wir nutzen Local Awareness Ads, Lead-Formulare und Event-Promotion, um Ihnen mehr 
                Laufkundschaft, Buchungen und Anfragen aus der direkten Umgebung zu bringen.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Search Engine Marketing (SEM)</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                SEM kombiniert bezahlte Suchanzeigen mit einer übergreifenden Strategie, die auch 
                Shopping-Anzeigen, Display-Netzwerk und YouTube-Werbung einschließt. So erreichen 
                Sie potenzielle Kunden an allen relevanten digitalen Touchpoints – von der ersten 
                Suchanfrage bis zur finalen Kaufentscheidung.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Digitale Werbung & Display Advertising</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Banner-Anzeigen, Retargeting-Kampagnen und programmatische Werbung ergänzen Ihre 
                Suchkampagnen ideal. Besonders Retargeting ist extrem effektiv: Besucher, die Ihre 
                Website verlassen haben, ohne zu konvertieren, werden gezielt erneut angesprochen – 
                oft mit deutlich höherer Conversion-Rate.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Mönchengladbach: Unser Ansatz für messbare Ergebnisse</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Viele Agenturen berichten über Impressionen und Klicks. Wir berichten über das, was 
            zählt: Anfragen, Buchungen, Umsatz. Unser Prozess:
          </p>

          <div className="space-y-4">
            {[
              { step: '01', title: 'Zieldefinition', desc: 'Was soll die Kampagne erreichen? Mehr Anrufe, mehr Formularanfragen, mehr Online-Verkäufe? Klare Ziele sind die Basis für messbare Ergebnisse.' },
              { step: '02', title: 'Zielgruppen-Analyse', desc: 'Wer sind Ihre idealen Kunden in Mönchengladbach? Welche Plattformen nutzen sie? Welche Botschaften sprechen sie an?' },
              { step: '03', title: 'Kampagnen-Setup', desc: 'Wir erstellen alle Anzeigen, definieren Targeting, setzen Tracking ein und stellen sicher, dass jeder Euro nachverfolgbar ist.' },
              { step: '04', title: 'Kontinuierliche Optimierung', desc: 'Wir testen, analysieren und optimieren wöchentlich. Was funktioniert, skalieren wir. Was nicht funktioniert, schalten wir ab.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="text-yellow-500 font-bold text-2xl w-12 shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Digitale Werbung & Ads in Mönchengladbach</h2>
          <div className="space-y-6">
            {[
              { q: 'Wie viel Budget brauche ich für Google Ads?', a: 'Das hängt von Ihrer Branche und Ihren Zielen ab. Für lokale Kampagnen in Mönchengladbach empfehlen wir in der Regel ein Mindestbudget von 500–1.000 € pro Monat, um aussagekräftige Daten zu sammeln.' },
              { q: 'Wie schnell sehe ich Ergebnisse?', a: 'Bei Google Ads bereits nach wenigen Tagen. Meta Ads brauchen oft 2–4 Wochen, bis der Algorithmus Ihre Zielgruppe optimiert hat. Für nachhaltige Ergebnisse empfehlen wir mindestens 3 Monate.' },
              { q: 'Was ist besser – Google Ads oder Facebook/Meta Ads?', a: 'Das hängt von Ihrer Zielgruppe und Ihrem Angebot ab. Google Ads eignet sich ideal, wenn Menschen aktiv nach Ihrem Service suchen. Meta Ads funktioniert hervorragend für visuelle Produkte und Zielgruppen, die Sie aktiv ansprechen möchten.' },
              { q: 'Wie kann ich sehen, ob die Werbung funktioniert?', a: 'Wir richten für Sie vollständiges Tracking ein – von Google Analytics bis zum Conversion-Tracking. Sie sehen in einem monatlichen Report genau, was Ihre Kampagnen geleistet haben.' },
              { q: 'Muss ich einen langfristigen Vertrag abschließen?', a: 'Nein. Wir arbeiten mit transparenten Monatspauschalen. Trotzdem empfehlen wir, Kampagnen mindestens 3 Monate laufen zu lassen, um sinnvolle Optimierungen vornehmen zu können.' },
              { q: 'Erstellen Sie auch die Werbemittel (Bilder, Texte)?', a: 'Ja. Wir erstellen professionelle Anzeigentexte und können einfache Bild-Creatives erstellen. Für aufwändige Video-Produktionen arbeiten wir mit Partnern zusammen.' },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Weiterführende Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Lead Generierung', href: '/lead-generierung' },
              { label: 'Local SEO Mönchengladbach', href: '/local-seo' },
              { label: 'Landing Page Design', href: '/landing-page-design' },
              { label: 'Conversion Optimierung', href: '/conversion-optimierung' },
              { label: 'Email Marketing', href: '/email-marketing' },
              { label: 'Web Analyse Setup', href: '/web-analyse-setup' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">
                → {link.label}
              </a>
            ))}
          </div>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Unternehmen aus der Region die wir betreuen</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Wir arbeiten vollständig online und betreuen Kunden deutschlandweit. Besonders viele unserer Kunden kommen aus Mönchengladbach und der direkten Umgebung – hier kennen wir den lokalen Markt, die Wettbewerbssituation und die Suchgewohnheiten aus dem Effeff.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {[
              { label: 'Mönchengladbach', href: '/' },
              { label: 'Rheydt', href: '/regionen/rheydt' },
              { label: 'Wickrath', href: '/regionen/wickrath' },
              { label: 'Odenkirchen', href: '/regionen/odenkirchen' },
              { label: 'Giesenkirchen', href: '/regionen/giesenkirchen' },
              { label: 'Hardterbroich', href: '/regionen/hardterbroich' },
              { label: 'Holt', href: '/regionen/holt' },
              { label: 'Geistenbeck', href: '/regionen/geistenbeck' },
              { label: 'Eicken', href: '/regionen/eicken' },
              { label: 'Rheindahlen', href: '/regionen/rheindahlen' },
              { label: 'Korschenbroich', href: '/regionen/korschenbroich' },
              { label: 'Grevenbroich', href: '/regionen/grevenbroich' },
              { label: 'Erkelenz', href: '/regionen/erkelenz' },
              { label: 'MG Süd', href: '/regionen/moenchengladbach-sued' },
              { label: 'MG Nord', href: '/regionen/moenchengladbach-nord' },
            ].map((area) => (
              <a key={area.href} href={area.href} className="text-center border border-gray-200 dark:border-gray-800 hover:border-yellow-500/50 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">
                {area.label}
              </a>
            ))}
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Nicht dabei? Kein Problem –{' '}
            <a href="/contact" className="text-yellow-600 dark:text-yellow-400 hover:underline">wir betreuen Unternehmen in ganz Deutschland.</a>
          </p>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Bereit für mehr Kunden ab Tag 1?</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
            Lassen Sie uns in einem kostenlosen Gespräch herausfinden, welche Werbestrategie für 
            Ihr Unternehmen in Mönchengladbach am meisten Sinn ergibt.
          </p>
          <button
            onClick={() => navigate('/booking')}
            className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg"
          >
            Kostenloses Strategiegespräch buchen
          </button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
