import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.booking': 'Book Call',
    'nav.getStarted': 'Get Started',

    // SEO Meta Tags
    'seo.home.title': 'KI Brueder | Local SEO and Marketing Solutions',
    'seo.home.description': 'Transform your business with local SEO and marketing. Lead generation, Google Maps optimization, digital advertising, and more. Get 8+ new sales appointments monthly, guaranteed.',
    'seo.about.title': 'About KI Brueder | Local SEO and Marketing Experts',
    'seo.about.description': 'Learn about KI Brueder, your trusted partner for local SEO and marketing. Meet our brothers dedicated to scaling your business with effective digital marketing solutions.',
    'seo.booking.title': 'Book Free Strategy Call | KI Brueder Local SEO and Marketing',
    'seo.booking.description': 'Schedule a free 30-minute strategy consultation with our local SEO and marketing experts. Discover how to scale your business with proven digital marketing solutions.',
    'seo.contact.title': 'Contact KI Brueder | Free Local SEO and Marketing Consultation',
    'seo.contact.description': 'Book a free strategy call to discuss how local SEO and marketing can scale your business. Expert consultation on lead generation, Google Maps optimization, and digital advertising.',
    'seo.blog.title': 'Local SEO and Marketing Blog | Business Growth Insights - KI Brueder',
    'seo.blog.description': 'Latest insights on local SEO and marketing, lead generation strategies, and business growth tactics. Learn how to scale your business with effective digital marketing.',
    'seo.newsletter.title': 'Local SEO and Marketing Newsletter | Daily Business Growth Tips',
    'seo.newsletter.description': 'Subscribe to our daily newsletter for proven local SEO and marketing tactics, lead generation tips, and smart digital strategies that drive real business results.',
    'seo.imprint.title': 'Imprint | Legal Information - KI Brueder',
    'seo.imprint.description': 'Legal information and contact details for KI Brueder, your trusted partner for local SEO and marketing solutions.',
    'seo.privacy.title': 'Privacy Policy | Data Protection - KI Brueder',
    'seo.privacy.description': 'Learn about our privacy practices and data protection policies. We value your privacy and use minimal tracking technologies.',
    'seo.localSeo.title': 'Local SEO Services Mönchengladbach | Google Maps Optimization - KI Brueder',
    'seo.localSeo.description': 'Professional Local SEO services in Mönchengladbach. Top 3 ranking on Google Maps, SEO-optimized websites, and maximum local visibility for your business.',

    // Hero Section
    'hero.growth': 'More Growth.',
    'hero.headaches': 'Less Headaches.',
    'hero.guaranteed': 'Guaranteed.',
    'hero.cta.book': 'Book a Free Strategy Call',
    'hero.cta.services': 'View Services',

    // About Page
    'about.title': 'About KI Brueder',
    'about.description': 'We are brothers specializing in local SEO and marketing, dedicated to helping businesses scale efficiently through effective digital marketing solutions. Our mission is to maximize your online visibility and unlock growth potential.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To improve businesses with cutting-edge local SEO and marketing solutions that drive growth, visibility, and innovation.',
    'about.values.title': 'Our Values',
    'about.values.innovation': 'Always using newest AI models and updates from the American markets',
    'about.values.customer': 'Customer Success First',
    'about.values.improvement': 'Continuous Improvement',
    'about.values.ethical': 'Ethical AI Development',
    'about.team.title': 'Meet the Team',
    'about.team.coFounder': 'Co-Founder',

    // Booking Page
    'booking.title': 'Book Your Free Strategy Call',
    'booking.subtitle': 'Schedule a 30-minute consultation to discuss how we can help automate and scale your business with AI solutions.',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive local SEO and marketing solutions to grow and scale your business',
    'services.learnMore': 'Learn More',
    
    // Website Development
    'services.ai.title': 'AI',
    'services.ai.feature1': 'AI-chat',
    'services.ai.feature2': 'AI Calling assistant',
    'services.ai.feature3': 'Automations',
    
    // Local SEO Services
    'services.seo.title': 'Local SEO',
    'services.seo.feature1': 'Top 3 on google maps',
    'services.seo.feature2': 'Seo optimized website',
    'services.seo.feature3': 'Highest visibility',

    // Ads
    'services.ads.title': 'Ads',
    'services.ads.feature1': 'Google Ads',
    'services.ads.feature2': 'Meta Ads',
    'services.ads.feature3': 'Performance optimization',


    // Blog Section
    'blog.title': 'Latest Insights',
    'blog.subtitle': 'Stay informed about the latest developments in local SEO and marketing and business growth strategies.',
    'blog.readMore': 'Read More',

    // Blog Posts
    'blog.posts': [
      {
        id: 'do-less',
        title: 'Do Less',
        date: 'January 28, 2025',
        readTime: '2 min read',
        author: 'Nima Ghajar',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        imageAlt: 'Person working efficiently on laptop with coffee - representing productivity and focus',
        content: `You need to start doing less.

You'll actually get way more done — by doing less.

Let me explain.

Running a business is chaos sometimes. You're in charge of everything, so you *have to* look at everything.

And "everything" is… a lot.

It gets overwhelming. Frustrating. Vexing. (Love that word.)

Now — real talk?

I don't hate the pressure. If I did, I'd be sitting in a cozy HR role somewhere, faking Excel sheets and living for coffee breaks.

But we're built different. We want to *build*. We want results.

So here's the trick:

If you want to do more —  
You need to do *less*.

The magic zone is right at the edge of control. Things are moving fast, but you're still in the driver's seat.

Go past that edge? Chaos. Stuff breaks. You start reacting instead of creating.

When that happens, don't double down. Zoom out.  
Look at your list. Figure out what you can STOP doing.

Maybe you're spread thin across 6 social platforms when one is driving 90% of your results.  
Maybe you're still manually replying to DMs when AI could do it faster, smarter, 24/7.  
Maybe you're stuck creating content, chasing trends, and burning out instead of focusing on systems that work while you sleep.

We've seen this over and over:  
Clients unlock real growth not by adding more — but by cutting the noise.

So simplify. Automate. Delegate.

Do less → Grow more.

Feels weird at first. Works like magic.

Talk soon,  
Nima

P.S. If you're doing okay but want to scale without the overwhelm, let's chat. I'll show you how automation can handle the heavy lifting while you stay focused on what really moves the needle.  
No pressure, no fluff — just clarity.`
      },
      {
        id: 'beat-any-ad',
        title: 'Beat Any Ad',
        date: 'January 28, 2025',
        readTime: '1 min read',
        author: 'Nima Ghajar',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        imageAlt: 'Digital advertising and marketing analytics dashboard showing performance metrics',
        content: `Was talking to a client yesterday. We were going over how to boost their lead gen.

Let me give you one of the easiest ways to outperform almost *anything*. Doesn't cost extra. You can implement it immediately. All upside.

Remember that scene in Jurassic Park with the T-Rex?

They said it could only see you if you moved. Not sure how scientific that is — haven't met a T-Rex personally — but it's true that predators are wired to detect movement.

Guess who else is a predator?

Yep. Humans.

This is why movement grabs attention. This is why video ads outperform static ones.  
Even subtle animation on a static post makes a difference.

But let's take that a step further:

What beats a video?

**Interaction.**

The second someone can *talk* to a system — ask questions, get answers, book a call — they're hooked. It's not passive anymore. It's active.

That's what smart lead gen is.  
Not just another ad. A conversation. A qualified lead. Booked straight into your calendar.

Higher engagement. Lower cost. Better results.

Many more tricks to come — but start here.  
Shift from static to active. From scroll-past to *stop and engage*.

Talk soon,  
Nima

P.S. If you're already getting leads but want to scale faster with less effort, we should talk. My AI systems are built to do the heavy lifting for you.  
No pressure, no salesy stuff — just a clean way to grow.`
      }
    ],

    'blog.contactButton': 'Let\'s Chat',

    // Newsletter Section
    'newsletter.title': 'THE Newsletter to Grow & Scale Your Business.',
    'newsletter.subtitle': 'Get proven local SEO and marketing tactics, lead generation tips, and smart digital strategies that actually move the needle—delivered daily to your inbox.',
    'newsletter.feature1': 'No vague tech jargon',
    'newsletter.feature2': 'No one-size-fits-all tools',
    'newsletter.description': 'Just practical strategies used by experts to grow any business.',
    'newsletter.closing': 'These are the same tactics we use to help businesses scale faster, save time, and close more deals—consistently.',
    'newsletter.success': 'Successfully subscribed to our newsletter!',
    'newsletter.spamReminder': 'Please check your spam/junk folder if you don\'t see our emails in your inbox.',
    'newsletter.button': 'Subscribe',

    // Cookie Banner
    'cookie.title': 'We value your privacy',
    'cookie.description': 'This website uses essential cookies to ensure proper functionality. We do not use tracking cookies or collect personal data without your consent.',
    'cookie.accept': 'Accept',
    'cookie.decline': 'Decline',
    'cookie.learnMore': 'Learn more',

    // CTA Section
    'cta.title': 'Ready to Transform Your Business?',
    'cta.subtitle': 'Take the first step towards effective local SEO and marketing today.',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Cookies + Privacy',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.bookingTitle': 'Book a Free Strategy Call',
    'contact.bookingSubtitle': 'Schedule a 30-minute consultation to discuss how we can help automate and scale your business.',

    // PAS Section
    'pas.problem.text': 'Every day, you\'re missing out on potential customers—simply because you\'re overwhelmed with tasks, your outbound system is difficult to scale, or you don\'t have the capacity to engage with every lead effectively.',
    'pas.agitate.text': 'Hiring new employees is expensive and time-consuming. Finding the right talent is uncertain, and even when you do, people have limitations—they get tired, make mistakes, take sick leave, resign for better opportunities, or relocate. Meanwhile, your business keeps missing valuable growth opportunities.',
    'pas.solution.text': 'We solve this problem for you—quickly, seamlessly, and efficiently. Our solution is fully tailored, automated, and yet highly personalized. We don\'t hide behind corporate layers or call centers. Instead, we build a direct, effective, and scalable system that helps you engage more customers effortlessly.',

    // Imprint Section
    'imprint.title': 'Imprint',
    'imprint.legalInfo': 'Information according to § 5 TMG',
    'imprint.name': 'Ghajar Amirnezami, Nima & Saman GbR',
    'imprint.address': 'Schroffstraße 29\n41199 Mönchengladbach',
    'imprint.representatives': 'Represented by:\nNima Ghajar Amirnezami and Saman Ghajar Amirnezami',
    'imprint.contact': 'Contact',
    'imprint.email': 'Email: info@kibrueder.de',
    'imprint.vatId': 'VAT identification number according to § 27a VAT Act:\nDE455176452',
    'imprint.responsibility': 'Responsible for content according to § 55 para. 2 RStV:\nGhajar Amirnezami, Nima & Saman GbR',

    // Privacy Section
    'privacy.title': 'DATA COLLECTION & COOKIE POLICY',
    'privacy.intro': 'We value your privacy.',
    'privacy.collection.title': 'Data Collection',
    'privacy.collection.noCookies': 'This website does not use cookies or tracking technologies to monitor your activity.',
    'privacy.collection.personalInfo': 'We only collect personal information that you choose to provide — for example, when you fill out our contact form or subscribe to our newsletter. This information (such as your name or email address) is stored securely and is used solely to respond to your inquiry or send you newsletter updates, if you\'ve opted in.',
    'privacy.collection.noSharing': 'We do not sell or share your personal information with third parties for marketing purposes.',
    'privacy.thirdParty.title': 'Third-Party Content',
    'privacy.thirdParty.content': 'Please note: If third-party content (like embedded videos or forms) is added in the future, those services may use their own cookies. We\'ll update this policy accordingly if that changes.',
    'privacy.disclaimer': 'This notice is for general informational purposes and does not constitute legal advice. If you have questions about privacy compliance, we recommend consulting a legal professional.',

    // Journey Section
    'journey.title': 'Your Journey to Success',
    'journey.subtitle': 'Let\'s explore how we can transform your business challenges into opportunities.',

    // Local SEO Page
    'localSeo.title': 'Local SEO Services',
    'localSeo.subtitle': 'Dominate your local market with professional SEO optimization and Google Maps ranking.',

    'localSeo.feature1.title': 'Google Maps Top 3',
    'localSeo.feature1.description': 'We guarantee top 3 placement on Google Maps for your target keywords in your local area.',

    'localSeo.feature2.title': 'SEO-Optimized Website',
    'localSeo.feature2.description': 'Lightning-fast, mobile-optimized website built for conversions and search engine rankings.',

    'localSeo.feature3.title': 'Maximum Visibility',
    'localSeo.feature3.description': 'Comprehensive local SEO strategy to ensure your business is found by customers in your area.',

    'localSeo.content.title': 'Why Local SEO Matters',
    'localSeo.content.placeholder': 'Do you want to receive more inquiries?\n\nGoogle Ads are good, but complicated and expensive. Money has to flow in daily and that adds up. Making your website visible through SEO is difficult, you\'re also competing with companies that aren\'t local, and it\'s a tedious, expensive process. Focusing on customer acquisition yourself takes too much time, then you can hardly concentrate on your craft anymore.\n\nThe solution is simpler than you think.\n\nWhen someone searches for example "Cleaning Service Mönchengladbach", three Google Maps results are always displayed directly below the sponsored results, located under a map section.\n\nWith Local SEO, you can organically rank at the top and consistently receive more inquiries. Once you\'re at the top, you can easily stay there for years without much change and above all, you get local customers who naturally have more trust in someone from the area.',

    'localSeo.benefits.title': 'What You Get',
    'localSeo.benefits.benefit1.title': 'More Local Customers',
    'localSeo.benefits.benefit1.description': 'Attract customers actively searching for your services in your area.',
    'localSeo.benefits.benefit2.title': 'Higher Rankings',
    'localSeo.benefits.benefit2.description': 'Dominate Google Maps and local search results above your competitors.',
    'localSeo.benefits.benefit3.title': 'Increased Trust',
    'localSeo.benefits.benefit3.description': 'Better visibility builds credibility and trust with potential customers.',
    'localSeo.benefits.benefit4.title': 'Measurable Results',
    'localSeo.benefits.benefit4.description': 'Track your ranking improvements and ROI with detailed analytics.',

    'localSeo.cta.title': 'Ready to Dominate Your Local Market?',
    'localSeo.cta.subtitle': 'Book a free consultation to discuss your Local SEO strategy and start ranking higher.',
    'localSeo.cta.button': 'Get Started Now',

    // Local SEO FAQ
    'localSeo.faq.title': 'Frequently Asked Questions',
    'localSeo.faq.q1': 'How do I know you can really guarantee Top 3?',
    'localSeo.faq.a1': 'We\'ve done this for dozens of local German businesses - from tree nurseries to surveyors to insurance agencies. We only take on businesses we know we can rank - which is why we\'ve never had to issue a refund so far. Before we take your money, we audit your market and only proceed if we\'re confident we can get you there. If we can\'t deliver Top 3 within 90 days, you get every euro back. We have no incentive to take your €1,700 if we can\'t deliver.',
    'localSeo.faq.q2': 'What does this cost me in total?',
    'localSeo.faq.a2': '€1,700. That\'s it. One payment, no monthly fees, no setup fees, no hidden costs. You pay once, we work for 90 days, you either rank Top 3 or get a full refund. There\'s literally nothing else to pay.',
    'localSeo.faq.q3': 'Will this work for my type of business?',
    'localSeo.faq.a3': 'If you\'re a German local business with a physical service area, yes. We\'ve ranked tree nurseries, surveyors, insurance agencies, contractors - the system works for any local service business. On our call, we\'ll tell you straight if your market is too competitive or if there\'s anything that would prevent us from ranking you. We won\'t take your money if we can\'t deliver.',
    'localSeo.faq.q4': 'How long until I see real results?',
    'localSeo.faq.a4': 'Most businesses see ranking movements within 2-3 weeks. You\'ll notice yourself climbing up the maps. The guarantee is Top 3 within 90 days, but many hit it sooner. Once you\'re in the Top 3, the phone rings consistently. That\'s when you see the real ROI - not from rankings, but from actual customers booking with you instead of your competitors.',
    'localSeo.faq.q5': 'How much time do I need to spend?',
    'localSeo.faq.a5': 'About 30 minutes total. One onboarding call where we get access to your Google Business Profile and gather some information about your business. After that, we handle absolutely everything - optimization, reviews, posts, citations, everything. You don\'t need to touch anything or learn anything technical. You just keep running your business while we rank you.',
    'localSeo.faq.q6': 'What if I want my money back?',
    'localSeo.faq.a6': 'If you\'re not in the Top 3 after 90 days, email us, we\'ll process a full refund within 48 hours. No forms, no hassle, no fighting with payment processors. We\'re a registered EU business - we\'re not interested in keeping money we didn\'t earn. You either get Top 3 rankings or you get €1,700 back. It\'s that simple.',

    // AI Page
    'seo.ai.title': 'AI Automation Services | Local SEO and Marketing Solutions - KI Brueder',
    'seo.ai.description': 'Transform your business with AI automation and local SEO. AI chat support, intelligent call agents, and smart automations that work 24/7 to scale your business.',

    'ai.title': 'AI Automation Services',
    'ai.subtitle': 'Transform your business with intelligent AI solutions and local SEO that work 24/7 to scale your operations and drive growth.',

    'ai.feature1.title': 'AI Chat Support',
    'ai.feature1.description': '24/7 intelligent chat support that handles customer inquiries, books appointments, and qualifies leads automatically.',

    'ai.feature2.title': 'AI Call Agent',
    'ai.feature2.description': 'Smart voice assistant that handles calls, schedules meetings, and provides customer support with natural conversation.',

    'ai.feature3.title': 'Business Automation',
    'ai.feature3.description': 'Automate repetitive tasks, streamline workflows, and eliminate manual work to focus on what matters most.',

    'ai.content.title': 'Why AI Automation?',
    'ai.content.placeholder': 'Finding reliable employees who handle your calls and emails professionally and remain just as friendly after the hundredth conversation as they were during the first is difficult. At the same time, high costs arise from salaries, training, and downtime - whether due to vacation or illness. On top of that: 24/7 availability is hardly possible, callbacks are delayed, and important emergencies are not always forwarded immediately. Even predefined procedures or conversation guidelines are not always consistently followed in stressful daily operations.\n\nThe solution: intelligent AI systems that work reliably, efficiently, and fully automated. An AI phone assistant answers every call, responds to common questions, qualifies prospects, and immediately forwards important matters. Chatbots respond to website inquiries within seconds, while automated email marketing ensures that no contact is lost.\n\nYour AI is available 24/7, doesn\'t get sick, doesn\'t need vacation, and treats every customer with the same professionalism. This not only improves your customer experience but also saves time and personnel costs - and you can fully focus on your core business while new inquiries are continuously generated and managed in the background.',

    'ai.benefits.title': 'What You Get',
    'ai.benefits.benefit1.title': '24/7 Availability',
    'ai.benefits.benefit1.description': 'AI systems work around the clock, never take breaks, and handle unlimited conversations simultaneously.',
    'ai.benefits.benefit2.title': 'Instant Responses',
    'ai.benefits.benefit2.description': 'Provide immediate answers to customer questions and never miss a lead opportunity.',
    'ai.benefits.benefit3.title': 'Cost Effective',
    'ai.benefits.benefit3.description': 'Reduce operational costs while scaling your business without hiring additional staff.',
    'ai.benefits.benefit4.title': 'Consistent Quality',
    'ai.benefits.benefit4.description': 'Every interaction maintains the same high standard, ensuring consistent customer experience.',

    'ai.cta.title': 'Ready to Automate Your Business?',
    'ai.cta.subtitle': 'Book a free consultation to discover how AI automation can transform your business operations.',
    'ai.cta.button': 'Get Started Now',

    // Ads Page
    'seo.ads.title': 'Digital Advertising Services | Google Ads & Meta Ads - KI Brueder',
    'seo.ads.description': 'Professional digital advertising services. Google Ads, Meta Ads (Facebook & Instagram), and performance optimization to maximize your ROI and drive real results.',

    'ads.title': 'Digital Advertising Services',
    'ads.subtitle': 'Drive targeted traffic and conversions with professional Google Ads and Meta Ads management.',

    'ads.feature1.title': 'Google Ads Management',
    'ads.feature1.description': 'Expert Google Ads campaigns that target the right audience at the right time to maximize your return on investment.',

    'ads.feature2.title': 'Meta Ads (Facebook & Instagram)',
    'ads.feature2.description': 'Strategic social media advertising on Facebook and Instagram to reach your ideal customers where they spend their time.',

    'ads.feature3.title': 'Performance Optimization',
    'ads.feature3.description': 'Continuous monitoring and optimization of your campaigns to improve performance and reduce cost per acquisition.',

    'ads.content.title': 'Why Digital Advertising?',
    'ads.content.placeholder': 'Do you want to passively receive more qualified inquiries without having to chase after potential customers?\nDo you want to focus on the tasks that are truly lucrative for your business – and not just locally, but also beyond your region, reaching exactly those customers who are actively searching for your service?\nYou also know that growth requires investment and think entrepreneurially.\n\nAt the same time, you don\'t want to wait months for SEO results or write daily blog posts, but ideally want to acquire new customers as early as tomorrow.\n\nThen Google Ads are exactly right for you. We handle everything from A to Z – strategy, campaign setup, optimization, and tracking. You invest a fixed budget and predictably gain new inquiries without having to worry about it yourself. This allows you to focus fully on what you do best: delighting your new customers.',

    'ads.benefits.title': 'What You Get',
    'ads.benefits.benefit1.title': 'Targeted Reach',
    'ads.benefits.benefit1.description': 'Reach your ideal customers with precision targeting based on demographics, interests, and behavior.',
    'ads.benefits.benefit2.title': 'Measurable Results',
    'ads.benefits.benefit2.description': 'Track every click, conversion, and euro spent with detailed analytics and transparent reporting.',
    'ads.benefits.benefit3.title': 'Scalable Growth',
    'ads.benefits.benefit3.description': 'Scale your campaigns up or down based on performance to maximize your marketing budget.',
    'ads.benefits.benefit4.title': 'Expert Management',
    'ads.benefits.benefit4.description': 'Experienced ad specialists manage your campaigns to ensure optimal performance and ROI.',

    'ads.cta.title': 'Ready to Scale Your Advertising?',
    'ads.cta.subtitle': 'Book a free consultation to discuss your advertising strategy and start driving results.',
    'ads.cta.button': 'Get Started Now',

    // Contact Form
    'contact.form.title': 'Get Started with Our Local SEO and Marketing Services',
    'contact.form.subtitle': 'Please fill out the form below to get started with our local SEO and marketing services. All fields marked with * are required.',
    'contact.form.success': 'Thank you for your submission!',
    'contact.form.successMessage': 'We\'ve received your information and will contact you shortly to discuss your project.',
    'contact.form.error': 'Something went wrong',
    'contact.form.errorMessage': 'There was an error submitting your form: {0}. Please try again or contact us directly.',
    
    'contact.form.personalInfo': 'Personal Information',
    'contact.form.fullName': '* Full Name',
    'contact.form.email': '* Email Address',
    'contact.form.companyName': '* Company Name',
    'contact.form.phoneNumber': '* Phone Number',
    
    'contact.form.serviceDetails': 'Service Details',
    'contact.form.selectService': '* Select Service',
    'contact.form.services.ai': 'AI',
    'contact.form.services.seo': 'Local SEO',
    'contact.form.services.ads': 'Ads',
    
    'contact.form.projectInfo': 'Project Information',
    'contact.form.problems': '* What specific problems are you looking to solve?',
    'contact.form.problemsPlaceholder': 'Please describe your current challenges and desired outcomes',
    'contact.form.foundUs': '* How did you find us?',
    'contact.form.additionalInfo': 'Additional Information (Optional)',
    'contact.form.additionalInfoPlaceholder': 'Share any other relevant details about your project or requirements',
    
    'contact.form.submit': 'Book Your Consultation',
    'contact.form.processing': 'Processing...',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.contact': 'Kontakt',
    'nav.booking': 'Termin buchen',
    'nav.getStarted': 'Loslegen',

    // SEO Meta Tags
    'seo.home.title': 'KI Brueder | Bester Internet Marketing Service Mönchengladbach - Wenn du nach Local SEO in der Nähe oder Google Maps Optimierung in der Nähe suchst - KIBrueder Marketing dein Ansprechpartner',
    'seo.home.description': 'Transformieren Sie Ihr Unternehmen mit Local SEO und Marketing. Lead-Generierung, Google Maps Optimierung, digitale Werbung und mehr. Garantiert 8+ neue Verkaufstermine monatlich.',
    'seo.about.title': 'Über KI Brueder | Local SEO und Marketing Experten',
    'seo.about.description': 'Erfahren Sie mehr über KI Brueder, Ihren vertrauensvollen Partner für Local SEO und Marketing. Lernen Sie unsere Brüder kennen, die sich der Skalierung Ihres Unternehmens widmen.',
    'seo.booking.title': 'Kostenloses Strategiegespräch buchen | KI Brueder Local SEO und Marketing',
    'seo.booking.description': 'Vereinbaren Sie eine kostenlose 30-minütige Strategieberatung mit unseren Local SEO und Marketing Experten. Entdecken Sie, wie Sie Ihr Unternehmen mit effektiven digitalen Marketing-Lösungen skalieren.',
    'seo.contact.title': 'Kontakt KI Brueder | Kostenlose Local SEO und Marketing Beratung',
    'seo.contact.description': 'Buchen Sie ein kostenloses Strategiegespräch um zu besprechen, wie Local SEO und Marketing Ihr Unternehmen skalieren kann. Expertenberatung für Lead-Generierung, Google Maps Optimierung und digitale Werbung.',
    'seo.blog.title': 'Local SEO und Marketing Blog | Geschäftswachstum Insights - KI Brueder',
    'seo.blog.description': 'Neueste Einblicke in Local SEO und Marketing, Lead-Generierung Strategien und Geschäftswachstum Taktiken. Lernen Sie, wie Sie Ihr Unternehmen mit effektivem digitalen Marketing skalieren.',
    'seo.newsletter.title': 'Local SEO und Marketing Newsletter | Tägliche Geschäftswachstum Tipps',
    'seo.newsletter.description': 'Abonnieren Sie unseren täglichen Newsletter für bewährte Local SEO und Marketing Taktiken, Lead-Generierung Tipps und intelligente digitale Strategien für echte Geschäftsergebnisse.',
    'seo.imprint.title': 'Impressum | Rechtliche Informationen - KI Brueder',
    'seo.imprint.description': 'Rechtliche Informationen und Kontaktdaten für KI Brueder, Ihr vertrauensvoller Partner für Local SEO und Marketing Lösungen.',
    'seo.privacy.title': 'Datenschutz | Datenschutzrichtlinie - KI Brueder',
    'seo.privacy.description': 'Erfahren Sie mehr über unsere Datenschutzpraktiken und Datenschutzrichtlinien. Wir schätzen Ihre Privatsphäre und verwenden minimale Tracking-Technologien.',
    'seo.localSeo.title': 'Local SEO Mönchengladbach | Google Maps Optimierung - KI Brueder',
    'seo.localSeo.description': 'Professionelle Local SEO Dienstleistungen in Mönchengladbach. Top 3 Ranking bei Google Maps, SEO-optimierte Websites und maximale lokale Sichtbarkeit für Ihr Unternehmen.',

    // Hero Section
    'hero.growth': 'Mehr Wachstum.',
    'hero.headaches': 'Weniger Kopfschmerzen.',
    'hero.guaranteed': 'Garantiert.',
    'hero.cta.book': 'Kostenloses Strategiegespräch buchen',
    'hero.cta.services': 'Dienstleistungen ansehen',

    // About Page
    'about.title': 'Über KI Brueder',
    'about.description': 'Wir sind Brüder, die sich auf Local SEO und Marketing spezialisiert haben und Unternehmen dabei helfen, durch effektive digitale Marketing-Lösungen effizient zu skalieren. Unsere Mission ist es, Ihre Online-Sichtbarkeit zu maximieren und Wachstumspotential freizusetzen.',
    'about.mission.title': 'Unsere Mission',
    'about.mission.description': 'Unternehmen mit modernsten Local SEO und Marketing-Lösungen zu verbessern, die Wachstum, Sichtbarkeit und Innovation vorantreiben.',
    'about.values.title': 'Unsere Werte',
    'about.values.innovation': 'Immer die neuesten KI-Modelle und Updates aus den amerikanischen Märkten verwenden',
    'about.values.customer': 'Kundenerfolg steht an erster Stelle',
    'about.values.improvement': 'Kontinuierliche Verbesserung',
    'about.values.ethical': 'Ethische KI-Entwicklung',
    'about.team.title': 'Treffen Sie das Team',
    'about.team.coFounder': 'Mitgründer',

    // Booking Page
    'booking.title': 'Buchen Sie Ihr kostenloses Strategiegespräch',
    'booking.subtitle': 'Vereinbaren Sie eine 30-minütige Beratung, um zu besprechen, wie wir Ihr Unternehmen mit KI-Lösungen automatisieren und skalieren können.',

    // Services Section
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Umfassende Local SEO und Marketing-Lösungen zum Wachstum und zur Skalierung Ihres Unternehmens',
    'services.learnMore': 'Mehr erfahren',
    
    // Website Development
    'services.ai.title': 'KI',
    'services.ai.feature1': 'KI-Chat',
    'services.ai.feature2': 'KI-Anrufassistent',
    'services.ai.feature3': 'Automatisierungen',
    
    // Local SEO Services
    'services.seo.title': 'Local SEO',
    'services.seo.feature1': 'Top 3 in Google Maps',
    'services.seo.feature2': 'SEO-optimierte Website',
    'services.seo.feature3': 'Höchste Sichtbarkeit',

    // Ads
    'services.ads.title': 'Werbeanzeigen',
    'services.ads.feature1': 'Google Ads',
    'services.ads.feature2': 'Meta Ads',
    'services.ads.feature3': 'Performance-Optimierung',


    // Blog Section
    'blog.title': 'Neueste Einblicke',
    'blog.subtitle': 'Bleiben Sie über die neuesten Entwicklungen in Local SEO und Marketing und Geschäftswachstumsstrategien informiert.',
    'blog.readMore': 'Weiterlesen',

    // Blog Posts
    'blog.posts': [
      {
        id: 'do-less',
        title: 'Mach weniger',
        date: '28. Januar 2025',
        readTime: '2 min Lesezeit',
        author: 'Nima Ghajar',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        imageAlt: 'Person arbeitet effizient am Laptop mit Kaffee - repräsentiert Produktivität und Fokus',
        content: `Du musst anfangen, weniger zu tun.

Du wirst tatsächlich viel mehr erreichen — indem du weniger tust.

Lass mich erklären.

Ein Unternehmen zu führen ist manchmal chaotisch. Du bist für alles verantwortlich, also *musst* du dir alles ansehen.

Und "alles" ist... eine Menge.

Es wird überwältigend. Frustrierend. Quälend. (Liebe dieses Wort.)

Jetzt — ehrlich gesagt?

Ich hasse den Druck nicht. Wenn dem so wäre, würde ich in einer gemütlichen HR-Position sitzen, Excel-Tabellen fälschen und für Kaffeepausen leben.

Aber wir sind anders gebaut. Wir wollen *aufbauen*. Wir wollen Ergebnisse.

Hier ist der Trick:

Wenn du mehr erreichen willst —
Musst du *weniger* tun.

Die magische Zone liegt genau an der Grenze der Kontrolle. Die Dinge bewegen sich schnell, aber du sitzt noch am Steuer.

Gehst du über diese Grenze hinaus? Chaos. Dinge gehen kaputt. Du beginnst zu reagieren, anstatt zu gestalten.

Wenn das passiert, verdopple nicht deine Anstrengungen. Zoom heraus.
Schau dir deine Liste an. Finde heraus, was du AUFHÖREN kannst zu tun.

Vielleicht bist du auf 6 Social-Media-Plattformen verteilt, wenn eine 90% deiner Ergebnisse liefert.
Vielleicht antwortest du noch manuell auf DMs, wenn KI es schneller, intelligenter und rund um die Uhr erledigen könnte.
Vielleicht steckst du in der Content-Erstellung fest, jagst Trends nach und brennst aus, anstatt dich auf Systeme zu konzentrieren, die arbeiten, während du schläfst.

Wir haben das immer wieder gesehen:
Kunden erschließen echtes Wachstum nicht durch Hinzufügen von mehr — sondern durch Reduzierung des Rauschens.

Also vereinfache. Automatisiere. Delegiere.

Mach weniger → Wachse mehr.

Fühlt sich am Anfang seltsam an. Funktioniert wie Magie.

Bis bald,
Nima

P.S. Wenn es dir gut geht, aber du ohne Überforderung skalieren möchtest, lass uns reden. Ich zeige dir, wie Automatisierung die schwere Arbeit übernehmen kann, während du dich auf das konzentrierst, was wirklich wichtig ist.
Kein Druck, kein Schnickschnack — nur Klarheit.`
      },
      {
        id: 'beat-any-ad',
        title: 'Schlag jede Werbung',
        date: '28. Januar 2025',
        readTime: '1 min Lesezeit',
        author: 'Nima Ghajar',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        imageAlt: 'Digitale Werbung und Marketing-Analytics Dashboard mit Leistungsmetriken',
        content: `Ich sprach gestern mit einem Kunden. Wir haben besprochen, wie wir ihre Lead-Generierung verbessern können.

Lass mich dir einen der einfachsten Wege zeigen, um fast *alles* zu übertreffen. Kostet nichts extra. Du kannst es sofort umsetzen. Nur Vorteile.

Erinnerst du dich an die Szene in Jurassic Park mit dem T-Rex?

Sie sagten, er könne dich nur sehen, wenn du dich bewegst. Keine Ahnung, wie wissenschaftlich das ist — habe persönlich noch keinen T-Rex getroffen — aber es stimmt, dass Raubtiere darauf programmiert sind, Bewegung zu erkennen.

Rate mal, wer auch ein Raubtier ist?

Genau. Menschen.

Deshalb zieht Bewegung Aufmerksamkeit auf sich. Deshalb übertreffen Video-Anzeigen statische.
Selbst subtile Animation in einem statischen Post macht einen Unterschied.

Aber lass uns noch einen Schritt weitergehen:

Was schlägt ein Video?

**Interaktion.**

In dem Moment, wo jemand mit einem System *sprechen* kann — Fragen stellen, Antworten bekommen, einen Termin buchen — sind sie gefesselt. Es ist nicht mehr passiv. Es ist aktiv.

Das ist intelligente Lead-Generierung.
Nicht nur eine weitere Anzeige. Ein Gespräch. Ein qualifizierter Lead. Direkt in deinen Kalender gebucht.

Höheres Engagement. Niedrigere Kosten. Bessere Ergebnisse.

Viele weitere Tricks werden folgen — aber fang hier an.
Wechsle von statisch zu aktiv. Vom Vorbeiscrollen zum *Anhalten und Mitmachen*.

Bis bald,
Nima

P.S. Wenn du bereits Leads generierst, aber schneller und mit weniger Aufwand skalieren möchtest, sollten wir reden. Meine KI-Systeme sind darauf ausgelegt, die schwere Arbeit für dich zu erledigen.
Kein Druck, keine Verkaufsmasche — nur ein sauberer Weg zu wachsen.`
      }
    ],

    'blog.contactButton': 'Lass uns reden',

    // Newsletter Section
    'newsletter.title': 'DER Newsletter für das Wachstum & Skalierung Ihres Unternehmens.',
    'newsletter.subtitle': 'Erhalten Sie bewährte Local SEO und Marketing-Taktiken, Lead-Generierungs-Tipps und intelligente digitale Strategien, die wirklich etwas bewirken – täglich in Ihrem Posteingang.',
    'newsletter.feature1': 'Kein vages Tech-Kauderwelsch',
    'newsletter.feature2': 'Keine Einheitslösungen',
    'newsletter.description': 'Nur praktische Strategien, die von Experten zum Wachstum jedes Unternehmens eingesetzt werden.',
    'newsletter.closing': 'Dies sind dieselben Taktiken, die wir einsetzen, um Unternehmen dabei zu helfen, schneller zu skalieren, Zeit zu sparen und konstant mehr Abschlüsse zu erzielen.',
    'newsletter.success': 'Erfolgreich zum Newsletter angemeldet!',
    'newsletter.spamReminder': 'Bitte überprüfen Sie Ihren Spam-/Junk-Ordner, falls Sie unsere E-Mails nicht in Ihrem Posteingang sehen.',
    'newsletter.button': 'Abonnieren',

    // Cookie Banner
    'cookie.title': 'Wir schätzen Ihre Privatsphäre',
    'cookie.description': 'Diese Website verwendet nur notwendige Cookies für die ordnungsgemäße Funktion. Wir verwenden keine Tracking-Cookies und sammeln keine persönlichen Daten ohne Ihre Zustimmung.',
    'cookie.accept': 'Akzeptieren',
    'cookie.decline': 'Ablehnen',
    'cookie.learnMore': 'Mehr erfahren',

    // CTA Section
    'cta.title': 'Bereit, Ihr Unternehmen zu transformieren?',
    'cta.subtitle': 'Machen Sie den ersten Schritt in Richtung effektives Local SEO und Marketing.',

    // Footer
    'footer.quickLinks': 'Schnellzugriff',
    'footer.services': 'Dienstleistungen',
    'footer.contact': 'Kontakt',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Cookies + Datenschutz',

    // Contact Page
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Nehmen Sie Kontakt mit uns auf',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.location': 'Standort',
    'contact.bookingTitle': 'Kostenloses Strategiegespräch buchen',
    'contact.bookingSubtitle': 'Vereinbaren Sie eine 30-minütige Beratung, um zu besprechen, wie wir Ihr Unternehmen automatisieren und skalieren können.',

    // PAS Section
    'pas.problem.text': 'Jeden Tag verpassen Sie potenzielle Kunden – einfach weil Sie mit Aufgaben überlastet sind, Ihr Outbound-System schwer zu skalieren ist oder Sie nicht die Kapazität haben, jeden Lead effektiv zu bearbeiten.',
    'pas.agitate.text': 'Neue Mitarbeiter einzustellen ist teuer und zeitaufwändig. Die richtigen Talente zu finden ist ungewiss, und selbst wenn Sie sie finden, haben Menschen Grenzen – sie werden müde, machen Fehler, werden krank, kündigen für bessere Möglichkeiten oder ziehen um. Währenddessen verpasst Ihr Unternehmen weiterhin wertvolle Wachstumschancen.',
    'pas.solution.text': 'Wir lösen dieses Problem für Sie – schnell, nahtlos und effizient. Unsere Lösung ist vollständig maßgeschneidert, automatisiert und dennoch hochpersonalisiert. Wir verstecken uns nicht hinter Unternehmensebenen oder Call-Centern. Stattdessen bauen wir ein direktes, effektives und skalierbares System, das Ihnen hilft, mühelos mehr Kunden zu gewinnen.',

    // Imprint Section
    'imprint.title': 'Impressum',
    'imprint.legalInfo': 'Angaben gemäß § 5 TMG',
    'imprint.name': 'Ghajar Amirnezami, Nima & Saman GbR',
    'imprint.address': 'Schroffstraße 29\n41199 Mönchengladbach',
    'imprint.representatives': 'Vertreten durch:\nNima Ghajar Amirnezami und Saman Ghajar Amirnezami',
    'imprint.contact': 'Kontakt',
    'imprint.email': 'E-Mail: info@kibrueder.de',
    'imprint.vatId': 'Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:\nDE455176452',
    'imprint.responsibility': 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:\nGhajar Amirnezami, Nima & Saman GbR',

    // Privacy Section
    'privacy.title': 'DATENERFASSUNG & COOKIE-RICHTLINIE',
    'privacy.intro': 'Wir schätzen Ihre Privatsphäre.',
    'privacy.collection.title': 'Datenerfassung',
    'privacy.collection.noCookies': 'Diese Website verwendet keine Cookies oder Tracking-Technologien, um Ihre Aktivitäten zu überwachen.',
    'privacy.collection.personalInfo': 'Wir erfassen nur persönliche Informationen, die Sie freiwillig zur Verfügung stellen – zum Beispiel, wenn Sie unser Kontaktformular ausfüllen oder unseren Newsletter abonnieren. Diese Informationen (wie Ihr Name oder Ihre E-Mail-Adresse) werden sicher gespeichert und ausschließlich verwendet, um auf Ihre Anfrage zu antworten oder Ihnen Newsletter-Updates zu senden, wenn Sie sich dafür angemeldet haben.',
    'privacy.collection.noSharing': 'Wir verkaufen oder teilen Ihre persönlichen Daten nicht mit Dritten für Marketingzwecke.',
    'privacy.thirdParty.title': 'Inhalte von Drittanbietern',
    'privacy.thirdParty.content': 'Bitte beachten Sie: Wenn in Zukunft Inhalte von Drittanbietern (wie eingebettete Videos oder Formulare) hinzugefügt werden, können diese Dienste ihre eigenen Cookies verwenden. Wir werden diese Richtlinie entsprechend aktualisieren, wenn sich dies ändert.',
    'privacy.disclaimer': 'Diese Mitteilung dient nur der allgemeinen Information und stellt keine Rechtsberatung dar. Wenn Sie Fragen zur Datenschutz-Compliance haben, empfehlen wir Ihnen, einen Rechtsbeistand zu konsultieren.',

    // Journey Section
    'journey.title': 'Ihr Weg zum Erfolg',
    'journey.subtitle': 'Lassen Sie uns gemeinsam erkunden, wie wir Ihre geschäftlichen Herausforderungen in Chancen verwandeln können.',

    // Local SEO Page
    'localSeo.title': 'Local SEO Dienstleistungen',
    'localSeo.subtitle': 'Dominieren Sie Ihren lokalen Markt mit professioneller SEO-Optimierung und Google Maps Ranking.',

    'localSeo.feature1.title': 'Google Maps Top 3',
    'localSeo.feature1.description': 'Wir garantieren eine Top-3-Platzierung bei Google Maps für Ihre Ziel-Keywords in Ihrer Region.',

    'localSeo.feature2.title': 'SEO-Optimierte Website',
    'localSeo.feature2.description': 'Blitzschnelle, mobiloptimierte Website, die für Conversions und Suchmaschinen-Rankings entwickelt wurde.',

    'localSeo.feature3.title': 'Maximale Sichtbarkeit',
    'localSeo.feature3.description': 'Umfassende lokale SEO-Strategie, damit Ihr Unternehmen von Kunden in Ihrer Region gefunden wird.',

    'localSeo.content.title': 'Warum Local SEO wichtig ist',
    'localSeo.content.placeholder': 'Sie möchten mehr Anfragen erhalten?\n\nGoogle Ads sind gut, aber kompliziert und teuer. Täglich muss Geld reinfließen und das häuft sich an. Die Website über SEO sichtbar zu machen ist schwierig, man konkurriert zusätzlich mit Unternehmen, die nicht vor Ort sind und es ist ein aufwändiger, teurer Prozess. Sich selber auf Kundengewinnung zu fokussieren kostet zu viel Zeit, dann kann man sich kaum noch auf sein Handwerk konzentrieren.\n\nDie Lösung ist einfacher als gedacht.\n\nWenn jemand beispielsweise "Reinigungsservice Mönchengladbach" eingibt, werden immer direkt unter den gesponsorten Ergebnissen drei Google Maps Ergebnisse angezeigt, die sich unter einem Kartenausschnitt befinden.\n\nMit Local SEO kann man organisch dort ganz oben landen und so konstant mehr Anfragen erhalten. Einmal oben angelangt, kann man auch leicht über Jahre oben bleiben ohne viel Veränderung und bekommt vor allem lokale Kunden, die sowieso jemanden aus der Umgebung mehr Vertrauen schenken.',

    'localSeo.benefits.title': 'Was Sie bekommen',
    'localSeo.benefits.benefit1.title': 'Mehr lokale Kunden',
    'localSeo.benefits.benefit1.description': 'Ziehen Sie Kunden an, die aktiv nach Ihren Dienstleistungen in Ihrer Region suchen.',
    'localSeo.benefits.benefit2.title': 'Höhere Rankings',
    'localSeo.benefits.benefit2.description': 'Dominieren Sie Google Maps und lokale Suchergebnisse über Ihre Konkurrenz hinaus.',
    'localSeo.benefits.benefit3.title': 'Erhöhtes Vertrauen',
    'localSeo.benefits.benefit3.description': 'Bessere Sichtbarkeit schafft Glaubwürdigkeit und Vertrauen bei potenziellen Kunden.',
    'localSeo.benefits.benefit4.title': 'Messbare Ergebnisse',
    'localSeo.benefits.benefit4.description': 'Verfolgen Sie Ihre Ranking-Verbesserungen und ROI mit detaillierten Analysen.',

    'localSeo.cta.title': 'Bereit, Ihren lokalen Markt zu dominieren?',
    'localSeo.cta.subtitle': 'Buchen Sie eine kostenlose Beratung, um Ihre Local SEO-Strategie zu besprechen und höher zu ranken.',
    'localSeo.cta.button': 'Jetzt loslegen',

    // Local SEO FAQ
    'localSeo.faq.title': 'Häufig gestellte Fragen',
    'localSeo.faq.q1': 'Woher weiß ich, dass Sie Top 3 wirklich garantieren können?',
    'localSeo.faq.a1': 'Wir haben das für Dutzende von lokalen deutschen Unternehmen getan - von Baumschulen über Vermessungsingenieure bis hin zu Versicherungsagenturen. Wir nehmen nur Unternehmen an, von denen wir wissen, dass wir sie ranken können - deshalb mussten wir bisher niemandem eine Rückerstattung zahlen. Bevor wir Ihr Geld nehmen, prüfen wir Ihren Markt und fahren nur fort, wenn wir sicher sind, dass wir Sie dort hinbringen können. Wenn wir nicht innerhalb von 90 Tagen Top 3 liefern können, erhalten Sie jeden Euro zurück. Wir haben keinen Anreiz, Ihre 1700€ zu nehmen, wenn wir nicht liefern können.',
    'localSeo.faq.q2': 'Was kostet mich das insgesamt?',
    'localSeo.faq.a2': '1700€. Das ist alles. Eine Zahlung, keine monatlichen Gebühren, keine Einrichtungsgebühren, keine versteckten Kosten. Sie zahlen einmal, wir arbeiten 90 Tage lang, Sie ranken entweder Top 3 oder bekommen eine vollständige Rückerstattung. Es gibt buchstäblich nichts anderes zu bezahlen.',
    'localSeo.faq.q3': 'Wird das für meine Art von Geschäft funktionieren?',
    'localSeo.faq.a3': 'Wenn Sie ein deutsches lokales Unternehmen mit einem physischen Servicegebiet sind, ja. Wir haben Baumschulen, Vermessungsingenieure, Versicherungsagenturen, Auftragnehmer gerankt - das System funktioniert für jedes lokale Servicebusiness. In unserem Anruf werden wir Ihnen direkt sagen, wenn Ihr Markt zu wettbewerbsfähig ist oder wenn es etwas gibt, das uns daran hindern würde, Sie zu ranken. Wir nehmen Ihr Geld nicht, wenn wir nicht liefern können.',
    'localSeo.faq.q4': 'Wie lange bis ich wirklich Ergebnisse sehe?',
    'localSeo.faq.a4': 'Die meisten Unternehmen sehen Ranking-Bewegungen innerhalb von 2-3 Wochen. Sie werden bemerken, dass Sie in den Karten klettern. Die Garantie ist Top 3 innerhalb von 90 Tagen, aber viele erreichen es früher. Sobald Sie in den Top 3 sind, klingelt das Telefon konsequent. Das ist, wenn Sie die echte ROI sehen - nicht aus Rankings, sondern aus echten Kunden, die mit Ihnen buchen, anstatt mit Ihren Mitbewerbern.',
    'localSeo.faq.q5': 'Wie viel Zeit brauche ich aufzuwenden?',
    'localSeo.faq.a5': 'Etwa 30 Minuten insgesamt. Ein Onboarding-Anruf, bei dem wir Zugang zu Ihrem Google Business Profile erhalten und einige Informationen über Ihr Geschäft sammeln. Danach kümmern wir uns um absolut alles - Optimierung, Bewertungen, Posts, Zitate, alles. Sie müssen nichts anfassen oder etwas Technisches lernen. Sie führen einfach weiterhin Ihr Geschäft, während wir Sie ranken.',
    'localSeo.faq.q6': 'Was ist, wenn ich mein Geld zurückbekommen möchte?',
    'localSeo.faq.a6': 'Wenn Sie nach 90 Tagen nicht in den Top 3 sind, schreiben Sie uns eine E-Mail, wir verarbeiten eine vollständige Rückerstattung innerhalb von 48 Stunden. Keine Formulare, keine Umstände, kein Ärger mit Zahlungsabwicklern. Wir sind ein eingetragenes EU-Unternehmen - wir sind nicht interessiert, Geld zu behalten, das wir nicht verdient haben. Sie bekommen entweder Top 3 Rankings oder Sie bekommen 1700€ zurück. So einfach ist das.',

    // AI Page
    'seo.ai.title': 'KI-Automatisierung Services | Local SEO und Marketing Lösungen - KI Brueder',
    'seo.ai.description': 'Transformieren Sie Ihr Unternehmen mit KI-Automatisierung und Local SEO. KI-Chat-Support, intelligente Anrufagenten und smarte Automatisierungen, die 24/7 arbeiten.',

    'ai.title': 'KI-Automatisierung Services',
    'ai.subtitle': 'Transformieren Sie Ihr Unternehmen mit intelligenten KI-Lösungen und Local SEO, die 24/7 arbeiten, um Ihre Prozesse zu skalieren und Wachstum zu fördern.',

    'ai.feature1.title': 'KI-Chat-Support',
    'ai.feature1.description': '24/7 intelligenter Chat-Support, der Kundenanfragen bearbeitet, Termine bucht und Leads automatisch qualifiziert.',

    'ai.feature2.title': 'KI-Anrufagent',
    'ai.feature2.description': 'Smarter Sprachassistent, der Anrufe bearbeitet, Meetings plant und Kundensupport mit natürlicher Konversation bietet.',

    'ai.feature3.title': 'Geschäftsautomatisierung',
    'ai.feature3.description': 'Automatisieren Sie wiederkehrende Aufgaben, optimieren Sie Workflows und eliminieren Sie manuelle Arbeit, um sich auf das Wesentliche zu konzentrieren.',

    'ai.content.title': 'Warum KI-Automatisierung?',
    'ai.content.placeholder': 'Zuverlässige Mitarbeiter zu finden, die sich professionell um Ihre Anrufe und E-Mails kümmern und selbst nach dem hundertsten Gespräch noch genauso freundlich sind wie beim ersten, ist schwierig. Gleichzeitig entstehen hohe Kosten durch Gehälter, Einarbeitung und Ausfallzeiten – sei es durch Urlaub oder Krankheit. Dazu kommt: Erreichbarkeit rund um die Uhr ist kaum möglich, Rückrufe verzögern sich und wichtige Notfälle werden nicht immer sofort weitergeleitet. Auch vorgegebene Abläufe oder Gesprächsleitfäden werden im stressigen Alltag nicht immer konsequent eingehalten.\n\nDie Lösung: intelligente KI-Systeme, die zuverlässig, effizient und vollständig automatisiert arbeiten. Ein KI-Telefonassistent nimmt jeden Anruf entgegen, beantwortet häufige Fragen, qualifiziert Interessenten und leitet wichtige Anliegen sofort weiter. Chatbots reagieren innerhalb von Sekunden auf Website-Anfragen, während automatisiertes E-Mail-Marketing dafür sorgt, dass kein Kontakt verloren geht.\n\nIhre KI ist 24/7 erreichbar, wird nicht krank, braucht keinen Urlaub und behandelt jeden Kunden mit der gleichen Professionalität. So verbessern Sie nicht nur Ihr Kundenerlebnis, sondern sparen gleichzeitig Zeit und Personalkosten – und können sich voll auf Ihr Kerngeschäft konzentrieren, während im Hintergrund kontinuierlich neue Anfragen generiert und betreut werden.',

    'ai.benefits.title': 'Was Sie bekommen',
    'ai.benefits.benefit1.title': '24/7 Verfügbarkeit',
    'ai.benefits.benefit1.description': 'KI-Systeme arbeiten rund um die Uhr, machen keine Pausen und führen unbegrenzt viele Gespräche gleichzeitig.',
    'ai.benefits.benefit2.title': 'Sofortige Antworten',
    'ai.benefits.benefit2.description': 'Bieten Sie sofortige Antworten auf Kundenfragen und verpassen Sie nie eine Lead-Gelegenheit.',
    'ai.benefits.benefit3.title': 'Kosteneffizient',
    'ai.benefits.benefit3.description': 'Reduzieren Sie Betriebskosten während Sie Ihr Unternehmen skalieren, ohne zusätzliches Personal einzustellen.',
    'ai.benefits.benefit4.title': 'Konsistente Qualität',
    'ai.benefits.benefit4.description': 'Jede Interaktion hält denselben hohen Standard aufrecht und sorgt für konsistente Kundenerfahrung.',

    'ai.cta.title': 'Bereit, Ihr Unternehmen zu automatisieren?',
    'ai.cta.subtitle': 'Buchen Sie eine kostenlose Beratung, um zu entdecken, wie KI-Automatisierung Ihre Geschäftsprozesse transformieren kann.',
    'ai.cta.button': 'Jetzt loslegen',

    // Ads Page
    'seo.ads.title': 'Digitale Werbung Services | Google Ads & Meta Ads - KI Brueder',
    'seo.ads.description': 'Professionelle digitale Werbe-Services. Google Ads, Meta Ads (Facebook & Instagram) und Performance-Optimierung zur Maximierung Ihres ROI mit echten Ergebnissen.',

    'ads.title': 'Digitale Werbung Services',
    'ads.subtitle': 'Generieren Sie gezielten Traffic und Conversions mit professionellem Google Ads und Meta Ads Management.',

    'ads.feature1.title': 'Google Ads Management',
    'ads.feature1.description': 'Professionelle Google Ads Kampagnen, die die richtige Zielgruppe zur richtigen Zeit erreichen, um Ihren ROI zu maximieren.',

    'ads.feature2.title': 'Meta Ads (Facebook & Instagram)',
    'ads.feature2.description': 'Strategische Social Media Werbung auf Facebook und Instagram, um Ihre idealen Kunden dort zu erreichen, wo sie ihre Zeit verbringen.',

    'ads.feature3.title': 'Performance-Optimierung',
    'ads.feature3.description': 'Kontinuierliche Überwachung und Optimierung Ihrer Kampagnen zur Verbesserung der Performance und Reduzierung der Kosten pro Akquisition.',

    'ads.content.title': 'Warum digitale Werbung?',
    'ads.content.placeholder': 'Du willst passiv mehr qualifizierte Anfragen erhalten, ohne potenziellen Kunden hinterherlaufen zu müssen?\nDu möchtest dich auf die Aufgaben konzentrieren, die wirklich lukrativ für dein Business sind – und nicht nur lokal, sondern auch über deine Region hinaus genau die Kunden erreichen, die aktiv nach deinem Service suchen?\nDu weißt außerdem, dass Wachstum Investitionen erfordert, und denkst unternehmerisch.\n\nGleichzeitig hast du keine Lust, monatelang auf SEO-Ergebnisse zu warten oder täglich Blogartikel zu schreiben, sondern willst idealerweise schon morgen neue Kunden gewinnen.\n\nDann sind Google Ads genau das Richtige für dich. Wir übernehmen alles von A bis Z – Strategie, Kampagnenaufbau, Optimierung und Tracking. Du investierst ein festgelegtes Budget und gewinnst planbar neue Anfragen, ohne dich selbst darum kümmern zu müssen. So kannst du dich voll und ganz auf das konzentrieren, was du am besten kannst: deine neuen Kunden begeistern.',

    'ads.benefits.title': 'Was Sie bekommen',
    'ads.benefits.benefit1.title': 'Gezielte Reichweite',
    'ads.benefits.benefit1.description': 'Erreichen Sie Ihre idealen Kunden mit präzisem Targeting basierend auf Demografie, Interessen und Verhalten.',
    'ads.benefits.benefit2.title': 'Messbare Ergebnisse',
    'ads.benefits.benefit2.description': 'Verfolgen Sie jeden Klick, jede Conversion und jeden ausgegebenen Euro mit detaillierten Analysen und transparentem Reporting.',
    'ads.benefits.benefit3.title': 'Skalierbares Wachstum',
    'ads.benefits.benefit3.description': 'Skalieren Sie Ihre Kampagnen basierend auf der Performance nach oben oder unten, um Ihr Marketing-Budget zu maximieren.',
    'ads.benefits.benefit4.title': 'Experten-Management',
    'ads.benefits.benefit4.description': 'Erfahrene Werbe-Spezialisten verwalten Ihre Kampagnen, um optimale Performance und ROI sicherzustellen.',

    'ads.cta.title': 'Bereit, Ihre Werbung zu skalieren?',
    'ads.cta.subtitle': 'Buchen Sie eine kostenlose Beratung, um Ihre Werbestrategie zu besprechen und Ergebnisse zu erzielen.',
    'ads.cta.button': 'Jetzt loslegen',

    // Contact Form
    'contact.form.title': 'Starten Sie mit unseren Local SEO und Marketing-Diensten',
    'contact.form.subtitle': 'Bitte füllen Sie das untenstehende Formular aus, um mit unseren Local SEO und Marketing-Diensten zu beginnen. Alle mit * markierten Felder sind Pflichtfelder.',
    'contact.form.success': 'Vielen Dank für Ihre Anfrage!',
    'contact.form.successMessage': 'Wir haben Ihre Informationen erhalten und werden uns in Kürze mit Ihnen in Verbindung setzen, um Ihr Projekt zu besprechen.',
    'contact.form.error': 'Etwas ist schiefgelaufen',
    'contact.form.errorMessage': 'Beim Absenden des Formulars ist ein Fehler aufgetreten: {0}. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
    
    'contact.form.personalInfo': 'Persönliche Informationen',
    'contact.form.fullName': '* Vollständiger Name',
    'contact.form.email': '* E-Mail-Adresse',
    'contact.form.companyName': '* Firmenname',
    'contact.form.phoneNumber': '* Telefonnummer',
    
    'contact.form.serviceDetails': 'Service-Details',
    'contact.form.selectService': '* Service auswählen',
    'contact.form.services.ai': 'KI',
    'contact.form.services.seo': 'Local SEO',
    'contact.form.services.ads': 'Werbeanzeigen',
    
    'contact.form.projectInfo': 'Projekt-Informationen',
    'contact.form.problems': '* Welche spezifischen Probleme möchten Sie lösen?',
    'contact.form.problemsPlaceholder': 'Bitte beschreiben Sie Ihre aktuellen Herausforderungen und gewünschten Ergebnisse',
    'contact.form.foundUs': '* Wie haben Sie uns gefunden?',
    'contact.form.additionalInfo': 'Zusätzliche Informationen (Optional)',
    'contact.form.additionalInfoPlaceholder': 'Teilen Sie weitere relevante Details zu Ihrem Projekt oder Ihren Anforderungen mit',
    
    'contact.form.submit': 'Beratungsgespräch buchen',
    'contact.form.processing': 'Wird verarbeitet...',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('de'); // Default to German

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}