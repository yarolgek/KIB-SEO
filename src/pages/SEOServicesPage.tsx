import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function SEOServicesPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST SEO Services Mönchengladbach - KI Brueder | Technisches SEO, On-Page SEO, Linkaufbau & Content near me',
    description: 'KI Brueder – SEO Services in Mönchengladbach. Technisches SEO, On-Page Optimierung, Linkaufbau & Content aus einer Hand.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">SEO Services Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">SEO Services Mönchengladbach – Full-Service SEO Agentur</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Professionelle Suchmaschinenoptimierung ist mehr als das Einpflegen von Keywords. Es ist ein komplexes Zusammenspiel aus Technik, Content und Autorität. Als Full-Service-SEO-Agentur in Mönchengladbach bieten wir alle notwendigen Leistungen – koordiniert und aus einer Hand.</p>
        </div>

        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">SEO Services Mönchengladbach – Unser Leistungspaket</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Technisches SEO bildet das Fundament: Wir stellen sicher, dass Google Ihre Website vollständig crawlen und indexieren kann. Das umfasst Ladegeschwindigkeit, Core Web Vitals, Mobile-Optimierung, sichere HTTPS-Verbindung, saubere URL-Struktur und die Behebung technischer Fehler.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">On-Page SEO optimiert den sichtbaren Bereich Ihrer Website: Titel-Tags, Meta-Descriptions, Überschriften-Hierarchie, Content-Qualität, Bild-Optimierung und interne Verlinkungsstruktur. Jede Seite wird strategisch auf relevante Keywords ausgerichtet.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Off-Page SEO stärkt die Autorität Ihrer Domain durch qualitative Backlinks von thematisch relevanten Websites. Wir setzen auf nachhaltige Linkbuilding-Methoden ohne Risiko für Ihre Domain.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Local SEO sorgt dafür, dass Sie bei lokalen Suchanfragen in Mönchengladbach gefunden werden – in den organischen Ergebnissen und auf Google Maps.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">SEO Services Mönchengladbach – Warum ganzheitliches SEO entscheidend ist</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Viele Agenturen fokussieren sich auf einen Aspekt – entweder nur Technik oder nur Content oder nur Links. Nachhaltige Rankings entstehen aber durch das Zusammenspiel aller drei Bereiche. Wir denken SEO ganzheitlich und entwickeln für jedes Unternehmen in Mönchengladbach eine individuelle Strategie, die alle relevanten Faktoren berücksichtigt.</p>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ: SEO Services in Mönchengladbach</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Was unterscheidet gute von schlechter SEO?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Gute SEO ist nachhaltig, transparent und an echten Nutzerbedürfnissen ausgerichtet. Schlechte SEO setzt auf schnelle Tricks, die kurzfristig wirken, aber langfristig zu Google-Abstrafungen führen können.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie lange dauert professionelles SEO bis zu Ergebnissen?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Erste Verbesserungen nach 6–12 Wochen, signifikante Rankings nach 3–6 Monaten. SEO ist eine langfristige Investition mit nachhaltigem Return.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Bieten Sie auch einmalige SEO-Projekte an?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ja, neben laufenden SEO-Retainern bieten wir auch einmalige Projekte wie technische Audits, Keyword-Strategien und Content-Erstellung an.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">Wie berichten Sie über den SEO-Fortschritt?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Monatliche Reports mit Rankings, organischem Traffic, Sichtbarkeitsindex, gewonnenen und verlorenen Keywords sowie konkreten nächsten Schritten.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verwandte Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ SEO Mönchengladbach</a>
            <a href="/seo-analyse" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ SEO Analyse</a>
            <a href="/local-seo" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Local SEO</a>
            <a href="/web-analyse-setup" className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors">→ Web Analyse Setup</a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Jetzt SEO-Strategie für Mönchengladbach entwickeln</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Buchen Sie Ihr kostenloses SEO-Beratungsgespräch und erfahren Sie, was nötig ist, um bei Google dauerhaft nach vorne zu kommen.</p>
          <button onClick={() => navigate('/booking')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
