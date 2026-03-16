import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function RegionenPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Online Marketing Agentur Niederrhein - KI Brueder | Local SEO, Google Ads & Website Erstellung für die Region near me',
    description: 'KI Brueder aus Mönchengladbach betreut Unternehmen in der gesamten Niederrheinregion. Local SEO, Google Ads & Websites für Rheydt, Wickrath, Korschenbroich, Grevenbroich und Erkelenz.'
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/contact')} />
      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Regionen die wir betreuen</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
            Online Marketing Agentur Niederrhein – Regionen die wir betreuen
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            KI Brueder ist in Mönchengladbach verwurzelt – aber wir helfen Unternehmen in der gesamten Umgebung, bei Google sichtbar zu werden. Von Rheydt und Wickrath über Korschenbroich bis nach Grevenbroich und Erkelenz: Wir bringen lokale Unternehmen bei Google nach vorne.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Online Marketing für die Region Mönchengladbach – Warum lokaler Fokus entscheidend ist</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Als vollständig online arbeitende Agentur aus Mönchengladbach betreuen wir Unternehmen ortsunabhängig – aber mit tiefem regionalem Verständnis. Wir kennen den Markt in jedem Ort der Region, die lokale Wettbewerbssituation und die Suchgewohnheiten der Kunden vor Ort.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Das macht den Unterschied zwischen generischen Lösungen und Strategien, die wirklich funktionieren. Unser Ziel: Ihr Unternehmen als erste Wahl in Ihrer Stadt bei Google zu positionieren – durch Local SEO, Google Ads und professionelle Websites.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-yellow-700 dark:text-yellow-400">Unsere Kernleistungen für die Region</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ <strong>Local SEO</strong> – Top-Rankings bei Google Maps & organischer Suche für Ihren Standort</li>
              <li>✓ <strong>Google Ads</strong> – Sofortige Sichtbarkeit für kaufbereite lokale Kunden</li>
              <li>✓ <strong>Website Erstellung</strong> – Schnelle, SEO-optimierte Websites für lokales Wachstum</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Regionen die wir betreuen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'Rheydt', href: '/regionen/rheydt', desc: 'Stadtteil von Mönchengladbach – Local SEO, Google Ads & Websites für Rheydter Unternehmen' },
              { name: 'Wickrath', href: '/regionen/wickrath', desc: 'Historischer Stadtteil – Online Marketing für lokale Betriebe in Wickrath' },
              { name: 'Korschenbroich', href: '/regionen/korschenbroich', desc: 'Wachsende Gemeinde – Local SEO & Google Ads für Korschenbroicher Unternehmen' },
              { name: 'Grevenbroich', href: '/regionen/grevenbroich', desc: 'Wirtschaftsstandort Rhein – Online Marketing für Grevenbroicher Betriebe' },
              { name: 'Erkelenz', href: '/regionen/erkelenz', desc: 'Kreis Heinsberg – Local SEO, Google Ads & Websites für Erkelenzer Unternehmen' },
            ].map((city) => (
              <a key={city.href} href={city.href} className="block border border-gray-200 dark:border-gray-800 hover:border-yellow-500/50 rounded-xl p-5 transition-all hover:shadow-md group">
                <h3 className="font-bold text-lg mb-1 group-hover:text-yellow-500 transition-colors">{city.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{city.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Warum Unternehmen in der Region auf KI Brueder vertrauen</h2>
          <div className="space-y-4">
            {[
              { title: 'Regionales Marktverständnis', desc: 'Wir kennen die Wettbewerbssituation in jedem Ort der Region – und entwickeln Strategien, die auf den jeweiligen lokalen Markt zugeschnitten sind.' },
              { title: 'Alles aus einer Hand', desc: 'Local SEO, Google Ads und Website-Erstellung – wir koordinieren alle Maßnahmen aufeinander abgestimmt. Kein Ping-Pong zwischen verschiedenen Agenturen.' },
              { title: 'Garantierte Ergebnisse', desc: 'Bei der Lead Generierung garantieren wir mindestens 8 neue Verkaufstermine pro Monat – oder Sie zahlen nicht.' },
              { title: 'Volle Transparenz', desc: 'Monatliche Reports, klare Kommunikation, ein fester Ansprechpartner. Sie wissen immer, was wir tun und warum.' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ihr Unternehmen in der Region bei Google sichtbar machen</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">Buchen Sie Ihr kostenloses Strategiegespräch und erfahren Sie, wie wir Ihr Unternehmen in Ihrer Stadt nach vorne bringen.</p>
          <button onClick={() => navigate('/contact')} className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg">Kostenloses Gespräch buchen</button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
