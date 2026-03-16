import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function LocalSEOPage() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'BEST Local SEO Agentur Mönchengladbach - KI Brueder | Local SEO, Google Maps Optimierung & Google Business Profile near me',
    description: 'KI Brueder – Ihre Local SEO Agentur in Mönchengladbach. Mehr lokale Kunden durch Google Maps Top 3, Google Business Optimierung & lokale Sichtbarkeit.'
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={() => navigate('/')} onBookClick={() => navigate('/booking')} />

      <main className="max-w-4xl mx-auto px-4 py-32">

        <div className="mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Local SEO Mönchengladbach</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">Local SEO Mönchengladbach – Mehr lokale Kunden bei Google</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Wenn jemand in Mönchengladbach nach Ihrem Angebot sucht – erscheint Ihr Unternehmen auf Seite 1 bei Google? 
            Wenn nicht, verlieren Sie täglich potenzielle Kunden an Ihre Konkurrenz. Mit unserer Local-SEO-Strategie 
            ändern wir das – nachhaltig und messbar.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Local SEO Mönchengladbach – Warum es so wichtig ist</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Local SEO (lokale Suchmaschinenoptimierung) sorgt dafür, dass Ihr Unternehmen bei lokalen Suchanfragen 
            in Mönchengladbach und Umgebung ganz oben erscheint. Das sind Suchanfragen wie „Zahnarzt Mönchengladbach", 
            „Steuerberater in der Nähe" oder „bester Friseur Rheydt".
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Der entscheidende Punkt: Menschen, die lokal suchen, sind kaufbereit. Sie wollen keine Information – 
            sie wollen einen Termin, ein Produkt, eine Dienstleistung. Wer bei diesen Suchanfragen oben steht, 
            gewinnt. Wer auf Seite 2 landet, existiert für den Suchenden praktisch nicht.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Für Unternehmen in Mönchengladbach, Rheydt, Rheindalhen und der gesamten Niederrheinregion ist 
            Local SEO daher eine der effektivsten Investitionen in nachhaltiges Wachstum.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-yellow-700 dark:text-yellow-400">Wussten Sie?</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ 46% aller Google-Suchanfragen haben einen lokalen Bezug</li>
              <li>✓ 76% der Menschen, die lokal suchen, besuchen ein Unternehmen innerhalb von 24 Stunden</li>
              <li>✓ 28% dieser Besuche führen zu einem Kauf</li>
              <li>✓ Die Top 3 Google Maps-Ergebnisse erhalten über 60% aller Klicks</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Unsere Local SEO Leistungen für Mönchengladbach</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Local SEO ist kein einmaliges Projekt – es ist eine kontinuierliche Strategie. Wir kümmern uns um alle 
            relevanten Faktoren, die Google nutzt, um lokale Suchergebnisse zu bewerten:
          </p>

          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Google Business Profile Optimierung</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Ihr Google-Business-Profil ist Ihre wichtigste Visitenkarte im Netz. Wir optimieren es vollständig: 
                korrekte Kategorie, überzeugende Beschreibung, professionelle Fotos, regelmäßige Posts und eine 
                Strategie zur Generierung von Google-Bewertungen. Das Ergebnis: Ihr Unternehmen erscheint in der 
                begehrten „Local Pack" – den drei Einträgen, die direkt unter der Karte angezeigt werden.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Lokale Keyword-Strategie</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Wir analysieren, nach welchen Begriffen Ihre potenziellen Kunden in Mönchengladbach suchen – 
                und optimieren Ihre Website gezielt dafür. Das umfasst lokale Begriffe wie Stadtteile (Rheydt, 
                Odenkirchen, Wickrath), Nachbarstädte (Düsseldorf, Krefeld, Neuss) und branchenspezifische 
                Kombinationen, die echte Kaufabsicht signalisieren.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">On-Page Optimierung mit lokalem Fokus</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Wir optimieren Ihre Website-Inhalte, Meta-Daten, Überschriften und interne Verlinkung so, dass 
                Google Ihr Unternehmen klar mit Mönchengladbach und Ihrer Branche assoziiert. Dazu gehören auch 
                strukturierte Daten (Schema Markup), die Google zusätzliche Informationen über Ihr Unternehmen liefern.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Lokaler Linkaufbau & Citations</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Backlinks von lokalen Websites und konsistente Unternehmenseinträge (NAP: Name, Adresse, 
                Telefonnummer) in relevanten Verzeichnissen stärken Ihre lokale Autorität erheblich. 
                Wir kümmern uns um Einträge in relevanten deutschen und lokalen Verzeichnissen und bauen 
                gezielt lokale Backlinks auf.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Bewertungsmanagement</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Google-Bewertungen sind ein massiver Rankingfaktor – und gleichzeitig Ihre beste Werbung. 
                Wir implementieren ein System, das Ihnen automatisch mehr positive Bewertungen einbringt und 
                Ihnen zeigt, wie Sie souverän auf negative Kritik reagieren.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Local SEO in Mönchengladbach: So gehen wir vor</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Unser bewährter Prozess sorgt für nachhaltige Ergebnisse:
          </p>

          <div className="space-y-4">
            {[
              { step: '01', title: 'Analyse & Audit', desc: 'Wir analysieren Ihre aktuelle Sichtbarkeit, Ihre Wettbewerber und das Suchverhalten in Mönchengladbach. So wissen wir genau, wo die größten Hebel liegen.' },
              { step: '02', title: 'Strategie & Planung', desc: 'Basierend auf der Analyse erstellen wir eine individuelle Local-SEO-Strategie mit klaren Prioritäten und realistischen Zeitrahmen.' },
              { step: '03', title: 'Implementierung', desc: 'Wir setzen alle technischen und inhaltlichen Optimierungen um – von der Google-Business-Optimierung bis zur Content-Erstellung.' },
              { step: '04', title: 'Monitoring & Optimierung', desc: 'SEO ist keine einmalige Sache. Wir überwachen Ihre Rankings regelmäßig und passen die Strategie an, wenn der Algorithmus sich ändert.' },
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
          <h2 className="text-3xl font-bold mb-8">FAQ: Local SEO Mönchengladbach</h2>
          <div className="space-y-6">
            {[
              { q: 'Wie lange dauert es, bis Local SEO Ergebnisse zeigt?', a: 'Die ersten spürbaren Verbesserungen sind oft nach 4–8 Wochen sichtbar. Für Top-Rankings in wettbewerbsintensiven Branchen sollten Sie 3–6 Monate einplanen. Local SEO ist eine nachhaltige Investition, keine Sofortlösung.' },
              { q: 'Was kostet Local SEO für ein Unternehmen in Mönchengladbach?', a: 'Die Kosten hängen von der Wettbewerbsintensität Ihrer Branche und dem gewünschten Leistungsumfang ab. In einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot ohne versteckte Kosten.' },
              { q: 'Kann ich Local SEO auch selbst machen?', a: 'Grundlegendes wie das Anlegen eines Google-Business-Profils kann jeder. Für nachhaltige Top-Rankings brauchen Sie aber Expertise, Zeit und die richtigen Tools – das ist unser Job.' },
              { q: 'Was ist der Unterschied zwischen Local SEO und normalem SEO?', a: 'Normales SEO zielt auf nationale oder internationale Sichtbarkeit. Local SEO fokussiert sich auf Suchanfragen mit lokalem Bezug und die Sichtbarkeit in Google Maps.' },
              { q: 'Hilft Local SEO auch, wenn ich kein lokales Ladengeschäft habe?', a: 'Ja. Auch Dienstleister, die zu Kunden fahren (z. B. Handwerker, Reinigungsservice), profitieren enorm von Local SEO.' },
              { q: 'Arbeiten Sie auch mit Unternehmen außerhalb von Mönchengladbach?', a: 'Ja, wir betreuen Unternehmen in der gesamten Region Niederrhein, darunter Düsseldorf, Krefeld, Neuss und Viersen.' },
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
          <p className="text-gray-600 dark:text-gray-400 mb-6">Local SEO funktioniert am besten als Teil einer ganzheitlichen Online-Marketing-Strategie:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'SEO & Content Marketing', href: '/seo' },
              { label: 'Google Business Profile Optimierung', href: '/google-business-profile' },
              { label: 'Google Maps Optimierung', href: '/google-maps-optimierung' },
              { label: 'Website Erstellung Mönchengladbach', href: '/website-erstellung' },
              { label: 'KI-Lösungen für lokale Unternehmen', href: '/ai' },
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
          <h2 className="text-3xl font-bold mb-4">Wollen Sie mehr lokale Kunden gewinnen?</h2>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
            Buchen Sie jetzt Ihr kostenloses Local-SEO-Beratungsgespräch. Wir zeigen Ihnen in 30 Minuten, 
            wo Sie in Mönchengladbach aktuell stehen und was nötig ist, um auf Seite 1 zu kommen.
          </p>
          <button
            onClick={() => navigate('/booking')}
            className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-4 rounded-lg transition-all text-lg"
          >
            Kostenloses Beratungsgespräch buchen
          </button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
