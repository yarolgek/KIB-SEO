import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function DigitaleWerbungPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Digitale Werbung Mönchengladbach - KI Brueder | Online Werbung, Display Ads, Retargeting & Performance Marketing near me',
    description: 'KI Brueder – Digitale Werbung in Mönchengladbach. Google Ads, Meta Ads, Display Advertising & Retargeting für maximale Online-Reichweite.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Digitale Werbung Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Digitale Werbung Mönchengladbach – Performance Marketing</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Digitale Werbung umfasst alle bezahlten Online-Marketingmaßnahmen – von Google Ads über Social Media bis zu Display-Werbung und Retargeting. Als Ihre Werbeagentur in Mönchengladbach entwickeln wir die optimale Kombination für Ihre Ziele und Ihr Budget.</p>
        </div>

        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Digitale Werbung Mönchengladbach – Welche Kanäle gibt es?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Die Welt der digitalen Werbung ist vielfältig. Suchanzeigen (Google Ads) erreichen kaufbereite Interessenten in dem Moment, in dem sie suchen. Social Media Ads (Meta, LinkedIn) erreichen definierte Zielgruppen auf ihren Lieblingsplattformen. Display-Werbung platziert Ihre Bannerwerbung auf relevanten Websites im Google Display Netzwerk. Retargeting spricht Personen an, die bereits Ihre Website besucht haben. Jeder Kanal hat seine Stärken – die richtige Kombination hängt von Ihrer Zielgruppe, Ihrem Angebot und Ihrem Budget ab.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Digitale Werbung Mönchengladbach – Unser Ansatz</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Wir denken nicht in einzelnen Kanälen, sondern in Kundenreisen. Wo ist Ihre Zielgruppe in Mönchengladbach aktiv? Welche Botschaft überzeugt in welcher Phase? Wir entwickeln eine kanalübergreifende Strategie, die Interessenten auf ihrem Weg zur Kaufentscheidung an mehreren Punkten begleitet und überzeugt.</p>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: Digitale Werbung in Mönchengladbach</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Welcher Werbekanal ist der beste?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Den einen besten Kanal gibt es nicht – es kommt auf Ihre Zielgruppe und Ihr Angebot an. Im kostenlosen Erstgespräch analysieren wir, welche Kanäle für Ihr Unternehmen in Mönchengladbach am vielversprechendsten sind.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie verteile ich mein Budget sinnvoll auf verschiedene Kanäle?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Als Faustregel empfehlen wir, zunächst einen Kanal zu testen und zu optimieren, bevor weitere dazukommen. So lernen Sie, was funktioniert, ohne Budget zu verschwenden.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Kann ich digitale Werbung auch mit kleinem Budget betreiben?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ja. Auch mit 300–500 € Monatsbudget können lokale Kampagnen in Mönchengladbach sehr effektiv sein – vorausgesetzt, sie sind gut aufgesetzt und zielgerichtet.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie messe ich den Erfolg meiner digitalen Werbung?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Über sauberes Tracking: Google Analytics, Conversion-Tracking und regelmäßige Reports. Wir richten alles ein, damit Sie jederzeit den Überblick haben.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/google-ads" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Google Ads</a>
            <a href="/meta-ads" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Meta Ads</a>
            <a href="/search-engine-marketing" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Search Engine Marketing</a>
            <a href="/email-marketing" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Email Marketing</a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Den richtigen Werbekanal für Ihr Unternehmen finden</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Buchen Sie Ihr kostenloses Beratungsgespräch und wir zeigen Ihnen, welche digitalen Werbekanäle für Ihr Unternehmen in Mönchengladbach am meisten Sinn ergeben.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
