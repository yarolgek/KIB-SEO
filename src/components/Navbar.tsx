import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

interface NavbarProps {
  onServicesClick: (e: React.MouseEvent) => void;
  onBookClick: () => void;
}

function Navbar({ onServicesClick, onBookClick }: NavbarProps) {
  const { t, language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Logo />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/">{t('nav.home')}</NavLink>
              <NavLink to="/about">{t('nav.about')}</NavLink>
              <NavLink to="/#services" onClick={onServicesClick}>{t('nav.services')}</NavLink>
              <NavLink to="/regionen">Regionen</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">{t('nav.contact')}</NavLink>
            </div>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector />
              <ThemeToggle />
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {t('nav.getStarted')}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMobileMenu} />
          <div className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <MobileNavLink to="/" onClick={closeMobileMenu}>{t('nav.home')}</MobileNavLink>
              <MobileNavLink to="/about" onClick={closeMobileMenu}>{t('nav.about')}</MobileNavLink>
              <MobileNavLink to="/#services" onClick={(e) => { onServicesClick(e); closeMobileMenu(); }}>{t('nav.services')}</MobileNavLink>
              <MobileNavLink to="/regionen" onClick={closeMobileMenu}>Regionen</MobileNavLink>
              <MobileNavLink to="/blog" onClick={closeMobileMenu}>Blog</MobileNavLink>
              <MobileNavLink to="/contact" onClick={closeMobileMenu}>{t('nav.contact')}</MobileNavLink>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Language</span>
                  <LanguageSelector />
                </div>
                <button 
                  onClick={() => { window.location.href = '/contact'; closeMobileMenu(); }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {t('nav.getStarted')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface NavLinkProps {
  to: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

function NavLink({ to, onClick, children }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps {
  to: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex gap-2">
      <button 
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          language === 'en' 
            ? 'bg-orange-600 text-white' 
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('de')}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          language === 'de' 
            ? 'bg-orange-600 text-white' 
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        DE
      </button>
    </div>
  );
}

function MobileNavLink({ to, onClick, children }: MobileNavLinkProps) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="block py-2 text-lg font-medium text-gray-900 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
    >
      {children}
    </Link>
  );
}

export default Navbar;
