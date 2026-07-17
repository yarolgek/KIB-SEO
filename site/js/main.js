(function () {
  'use strict';

  // Theme toggle
  function setTheme(theme) {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleTheme);

  // Mobile menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpen = document.getElementById('menu-icon-open');
  const menuClose = document.getElementById('menu-icon-close');
  const backdrop = document.getElementById('mobile-menu-backdrop');

  function closeMobileMenu() {
    mobileMenu?.classList.add('hidden');
    menuOpen?.classList.remove('hidden');
    menuClose?.classList.add('hidden');
    menuBtn?.setAttribute('aria-expanded', 'false');
  }

  function openMobileMenu() {
    mobileMenu?.classList.remove('hidden');
    menuOpen?.classList.add('hidden');
    menuClose?.classList.remove('hidden');
    menuBtn?.setAttribute('aria-expanded', 'true');
  }

  menuBtn?.addEventListener('click', () => {
    if (mobileMenu?.classList.contains('hidden')) openMobileMenu();
    else closeMobileMenu();
  });
  backdrop?.addEventListener('click', closeMobileMenu);
  mobileMenu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMobileMenu));

  // Smooth scroll to services
  function scrollToServices(e) {
    const services = document.getElementById('services');
    if (services) {
      e.preventDefault();
      const top = services.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    } else if (!window.location.pathname.match(/^\/?$/)) {
      // navigate to home#services
      return;
    }
  }

  document.querySelectorAll('.js-scroll-services').forEach((el) => {
    el.addEventListener('click', scrollToServices);
  });

  // Cookie banner
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner && !localStorage.getItem('cookieConsent')) {
    setTimeout(() => cookieBanner.classList.remove('hidden'), 1000);
  }

  function hideCookie(value) {
    localStorage.setItem('cookieConsent', value);
    cookieBanner?.classList.add('hidden');
  }

  document.getElementById('cookie-accept')?.addEventListener('click', () => hideCookie('accepted'));
  document.getElementById('cookie-decline')?.addEventListener('click', () => hideCookie('declined'));
  document.getElementById('cookie-close')?.addEventListener('click', () => hideCookie('declined'));

  // Fade-in on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => {
    el.classList.add('opacity-0');
    observer.observe(el);
  });

  // Homepage timeline scroll progress
  const timelineLine = document.getElementById('timeline-progress');
  const timelineSection = document.getElementById('timeline');
  if (timelineLine && timelineSection) {
    window.addEventListener(
      'scroll',
      () => {
        const rect = timelineSection.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = Math.min(1, Math.max(0, (viewH - rect.top) / (rect.height + viewH * 0.3)));
        timelineLine.style.height = `${progress * 100}%`;
      },
      { passive: true }
    );
  }

  // Clickable cards with data-href
  document.querySelectorAll('[data-href]').forEach((el) => {
    el.addEventListener('click', () => {
      window.location.href = el.getAttribute('data-href');
    });
  });

  // Hero flowing background paths (from original React BackgroundPaths)
  const heroPaths = document.getElementById('hero-paths');
  if (heroPaths && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ns = 'http://www.w3.org/2000/svg';

    function addFloatingPaths(position) {
      const wrap = document.createElement('div');
      wrap.className = 'absolute inset-0';

      const svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('class', 'w-full h-full text-slate-950 dark:text-white');
      svg.setAttribute('viewBox', '0 0 696 316');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

      for (let i = 0; i < 36; i++) {
        const d =
          `M-${380 - i * 5 * position} -${189 + i * 6}` +
          `C-${380 - i * 5 * position} -${189 + i * 6} ` +
          `-${312 - i * 5 * position} ${216 - i * 6} ` +
          `${152 - i * 5 * position} ${343 - i * 6}` +
          `C${616 - i * 5 * position} ${470 - i * 6} ` +
          `${684 - i * 5 * position} ${875 - i * 6} ` +
          `${684 - i * 5 * position} ${875 - i * 6}`;

        const path = document.createElementNS(ns, 'path');
        path.setAttribute('d', d);
        path.setAttribute('stroke', 'currentColor');
        path.setAttribute('stroke-width', String(0.5 + i * 0.03));
        path.setAttribute('stroke-opacity', String(0.1 + i * 0.03));
        path.setAttribute('fill', 'none');
        path.classList.add('hero-path');

        const len = 900 + i * 12;
        path.style.strokeDasharray = `${len * 0.35} ${len * 0.65}`;
        path.style.strokeDashoffset = '0';
        path.style.setProperty('--path-len', `${len}px`);

        const duration = 18 + Math.random() * 12;
        path.style.animationDuration = `${duration}s`;
        path.style.animationDelay = `${-Math.random() * duration}s`;

        svg.appendChild(path);
      }

      wrap.appendChild(svg);
      heroPaths.appendChild(wrap);
    }

    addFloatingPaths(1);
    addFloatingPaths(-1);
  }
})();
