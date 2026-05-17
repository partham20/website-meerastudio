import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Languages } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems: { id: string; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-serif font-bold text-white">{t.brand}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-amber-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors duration-200 rounded-full px-3 py-1 text-sm font-semibold"
              aria-label="Toggle language"
            >
              <Languages className="h-4 w-4" />
              {t.toggle.switchTo}
            </button>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors duration-200 rounded-full px-2.5 py-1 text-xs font-semibold"
              aria-label="Toggle language"
            >
              <Languages className="h-3.5 w-3.5" />
              {t.toggle.switchTo}
            </button>
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-amber-400 transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
