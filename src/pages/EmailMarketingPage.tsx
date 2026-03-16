import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function EmailMarketingPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Email Marketing Agentur Mönchengladbach - KI Brueder | Newsletter, Email Automatisierung & Kampagnen near me',
    description: 'KI Brueder – Email Marketing Agentur in Mönchengladbach. Newsletter, automatisierte Kampagnen & Kundenbindung für lokale Unternehmen.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Email Marketing Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Email Marketing Mönchengladbach – Newsletter & Automatisierung</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Email Marketing hat den höchsten Return on Investment aller digitalen Marketingkanäle: Studien belegen bis zu 42 Euro Umsatz pro investiertem Euro. Für Unternehmen in Mönchengladbach ist eine gut aufgesetzte Email-Strategie eine der günstigsten und wirkungsvollsten Möglichkeiten, Kunden zu binden und Umsatz zu steigern.</p>
        </div>

        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Email Marketing Mönchengladbach – Warum es unverzichtbar ist</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Social-Media-Reichweite kann über Nacht wegbrechen, wenn Algorithmen sich ändern. Eine Email-Liste gehört Ihnen. Niemand kann Ihnen den Zugang zu Ihren Abonnenten nehmen. Das macht Email Marketing zu einem der sichersten und nachhaltigsten Marketingkanäle überhaupt.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Dazu kommt: Wer sich für Ihren Newsletter angemeldet hat, hat aktiv Interesse signalisiert. Diese Menschen kennen Sie bereits – sie brauchen nur den richtigen Impuls zum Kauf, zur Buchung oder zur erneuten Anfrage.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Email Marketing Mönchengladbach – Unsere Leistungen</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Wir entwickeln für Sie eine vollständige Email-Marketing-Strategie: vom Aufbau Ihrer Liste über die Gestaltung ansprechender Templates bis zur Automatisierung wiederkehrender Kampagnen. Konkret umfasst das: Willkommenssequenzen für neue Abonnenten, Newsletter-Kampagnen für Angebote und News, automatisierte Follow-up-Sequenzen nach Anfragen, Reaktivierungskampagnen für inaktive Kontakte sowie monatliche Auswertung von Öffnungsraten, Klickraten und Conversions.</p>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Email Marketing in Mönchengladbach</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Brauche ich eine große Email-Liste, um loszulegen?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Nein. Auch mit 100 oder 200 Kontakten lässt sich Email Marketing effektiv betreiben – besonders im lokalen B2B-Bereich. Wichtiger als die Größe ist die Qualität der Liste.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Welche Tools nutzen Sie für Email Marketing?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Wir arbeiten mit professionellen Plattformen wie Mailchimp, Brevo oder ActiveCampaign – je nach Ihren Anforderungen und Ihrem Budget.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Ist Email Marketing DSGVO-konform möglich?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ja, mit der richtigen Einwilligung (Double-Opt-in) und korrekten Datenschutzeinstellungen ist Email Marketing vollständig DSGVO-konform. Wir stellen sicher, dass Ihre Kampagnen rechtssicher aufgesetzt sind.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie oft sollte ich Emails versenden?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Das hängt von Ihrer Branche und Zielgruppe ab. Als Faustregel gilt: Qualität vor Quantität. Lieber ein hochwertiger Newsletter pro Monat als vier schlechte pro Woche.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Was ist der Unterschied zwischen Newsletter und automatisierten Sequenzen?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ein Newsletter ist eine einmalige Aussendung an alle Abonnenten. Automatisierte Sequenzen werden durch Aktionen ausgelöst (z.B. Anmeldung, Kauf, Inaktivität) und laufen vollautomatisch – das ist der mächtigere Ansatz.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/lead-generierung" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Lead Generierung</a>
            <a href="/digitale-werbung" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Digitale Werbung</a>
            <a href="/conversion-optimierung" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Conversion Optimierung</a>
            <a href="/ai" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ KI-Lösungen & Automatisierung</a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Email Marketing, das Ihre Kunden wirklich lesen</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Lassen Sie uns Ihre Email-Strategie gemeinsam entwickeln. Kostenloses Erstgespräch – unverbindlich und ohne Verkaufsdruck.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
