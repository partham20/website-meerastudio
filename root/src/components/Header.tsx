import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-serif font-bold text-white">Meera Studio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-amber-400 transition-colors duration-200">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-amber-400 transition-colors duration-200">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-amber-400 transition-colors duration-200">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-amber-400 transition-colors duration-200">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-amber-400 transition-colors duration-200">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-amber-400 transition-colors duration-200">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-amber-400 transition-colors duration-200 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-amber-400 transition-colors duration-200 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-amber-400 transition-colors duration-200 text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-amber-400 transition-colors duration-200 text-left">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-amber-400 transition-colors duration-200 text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-amber-400 transition-colors duration-200 text-left">
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}