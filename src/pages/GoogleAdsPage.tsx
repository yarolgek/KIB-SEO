import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function GoogleAdsPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Google Ads Agentur Mönchengladbach - KI Brueder | Google Ads Management, Search Ads & PPC Kampagnen near me',
    description: 'KI Brueder – Google Ads Agentur in Mönchengladbach. Professionelles Google Ads Management, PPC Kampagnen & Conversion Tracking für lokale Unternehmen.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Google Ads Management Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Google Ads Mönchengladbach – PPC Management & Search Ads</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Stellen Sie sich vor: Jemand in Mönchengladbach sucht genau heute nach dem, was Sie anbieten – und Ihr Unternehmen erscheint als erstes Ergebnis. Kein Zufall, keine Wartezeit. Mit professionellem Google Ads Management machen wir das möglich – ab dem ersten Tag.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Google Ads Mönchengladbach – Der schnellste Weg zu neuen Kunden</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">SEO ist mächtig – aber es braucht Zeit. Wenn Sie jetzt Kunden brauchen, ist Google Ads die Lösung. Sie zahlen nur, wenn jemand tatsächlich auf Ihre Anzeige klickt. Kein Streuverlust, keine Blindwerbung – nur kaufbereite Interessenten, die aktiv nach Ihrem Angebot suchen.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Für lokale Unternehmen in Mönchengladbach ist das besonders wertvoll: Mit lokalem Targeting sprechen Sie gezielt Menschen in Ihrer Stadt, in bestimmten Stadtteilen oder in einem definierten Umkreis an – und verschwenden kein Budget für Nutzer außerhalb Ihres Einzugsgebiets.</p>
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-yellow-700 dark:text-yellow-400">Google Ads auf einen Blick</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Sichtbarkeit ab Tag 1 – kein monatelanger Aufbau</li>
              <li>✓ Zahlung nur pro Klick (Pay-per-Click)</li>
              <li>✓ Präzises Geo-Targeting für Mönchengladbach und Umgebung</li>
              <li>✓ Vollständige Budgetkontrolle – Sie bestimmen das Maximum</li>
              <li>✓ Messbar bis auf den letzten Cent</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Google Ads Management Mönchengladbach – Was wir übernehmen</h2>
          <div className="space-y-6">
            {[
              { title: 'Keyword-Recherche & Strategie', desc: 'Wir finden die Suchbegriffe, die Ihre Zielkunden in Mönchengladbach tatsächlich eingeben – inklusive Long-Tail-Keywords mit hoher Kaufabsicht und niedrigem Wettbewerb. Gleichzeitig definieren wir negative Keywords, damit Ihr Budget nicht für irrelevante Klicks verschwendet wird.' },
              { title: 'Anzeigenerstellung & Copywriting', desc: 'Eine Anzeige mit der richtigen Botschaft zur richtigen Zeit macht den Unterschied. Wir schreiben überzeugende Anzeigentexte, die Aufmerksamkeit erregen, Vertrauen schaffen und zum Klicken animieren – abgestimmt auf die Suchintention Ihrer Zielgruppe.' },
              { title: 'Kampagnenstruktur & Setup', desc: 'Eine saubere Kampagnenstruktur ist die Grundlage für effizientes Budget-Management. Wir strukturieren Ihre Kampagnen nach Themen und Zielgruppen, damit jeder Euro dort landet, wo er am meisten bringt.' },
              { title: 'Conversion-Tracking', desc: 'Was bringt eine Anzeige, wenn man nicht weiß, ob sie Ergebnisse liefert? Wir richten vollständiges Tracking ein – Anrufe, Formularabsendungen, Buchungen – damit Sie genau sehen, was Ihre Ads bewirken.' },
              { title: 'Laufende Optimierung', desc: 'Google Ads ist kein "Set and forget". Wir optimieren wöchentlich: Gebote anpassen, schwache Anzeigen pausieren, neue Varianten testen und Budgets dorthin verschieben, wo die Ergebnisse am besten sind.' },
              { title: 'Monatliches Reporting', desc: 'Sie erhalten jeden Monat einen klaren Bericht: Klicks, Kosten, Conversions, Cost-per-Lead und konkrete Empfehlungen für den nächsten Monat. Keine versteckten Zahlen, volle Transparenz.' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Für welche Unternehmen in Mönchengladbach lohnen sich Google Ads?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Google Ads funktioniert für nahezu jede Branche – vorausgesetzt, potenzielle Kunden suchen aktiv bei Google nach Ihrem Angebot. Besonders effektiv für:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {['Handwerksbetriebe', 'Rechtsanwälte', 'Steuerberater', 'Immobilienmakler', 'Kfz-Werkstätten', 'Zahnarztpraxen', 'Umzugsunternehmen', 'Reinigungsservices', 'Coaches & Trainer'].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 text-sm font-medium text-center">{item}</div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Google Ads in Mönchengladbach</h2>
          <div className="space-y-6">
            {[
              { q: 'Wie viel Budget brauche ich für Google Ads?', a: 'Für lokale Kampagnen in Mönchengladbach empfehlen wir ein Mindestbudget von 500–1.000 € pro Monat für das Werbebudget selbst. Darunter sind die Daten oft zu dünn für sinnvolle Optimierungen.' },
              { q: 'Wie schnell bekomme ich erste Ergebnisse?', a: 'Oft bereits innerhalb der ersten 48–72 Stunden nach Kampagnenstart. Die ersten Wochen dienen der Datensammlung und Optimierung – danach werden die Ergebnisse kontinuierlich besser.' },
              { q: 'Was kostet das Management?', a: 'Unsere Management-Gebühr ist transparent und richtet sich nach dem Umfang Ihrer Kampagnen. Im kostenlosen Erstgespräch erhalten Sie ein konkretes Angebot.' },
              { q: 'Kann ich Google Ads selbst verwalten?', a: 'Technisch ja – aber ohne Erfahrung verbrennen die meisten Unternehmen ihr Budget mit falschen Keywords, schlechten Anzeigen und fehlerhaftem Targeting. Professionelles Management amortisiert sich in der Regel sehr schnell.' },
              { q: 'Was ist der Unterschied zwischen Google Ads und SEO?', a: 'Google Ads liefert sofortige Sichtbarkeit, kostet aber pro Klick. SEO braucht länger, generiert dann aber dauerhaft kostenlosen Traffic. Die beste Strategie kombiniert beides.' },
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
            {[{ label: 'Meta Ads (Facebook & Instagram)', href: '/meta-ads' }, { label: 'Lead Generierung', href: '/lead-generierung' }, { label: 'Landing Page Design', href: '/landing-page-design' }, { label: 'Conversion Optimierung', href: '/conversion-optimierung' }, { label: 'Search Engine Marketing', href: '/search-engine-marketing' }, { label: 'Web Analyse Setup', href: '/web-analyse-setup' }].map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ {link.label}</a>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Bereit für Ihre erste Google Ads Kampagne?</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Buchen Sie jetzt Ihr kostenloses Strategiegespräch. Wir analysieren Ihr Potenzial in Mönchengladbach und zeigen Ihnen, was mit dem richtigen Budget möglich ist.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
