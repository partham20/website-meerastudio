import { useEffect, useState } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { STUDIO } from '../config';
import Logo from './ui/Logo';

const SECTION_IDS = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];

function LanguageSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t.toggle.label}
      className={`inline-flex items-center rounded-full border border-ivory/20 p-0.5 text-xs font-semibold ${className}`}
    >
      {(
        [
          ['en', 'EN'],
          ['ta', 'தமிழ்'],
        ] as const
      ).map(([code, label]) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
            lang === code ? 'bg-gold-500 text-ink' : 'text-ivory/70 hover:text-ivory'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, lang } = useLanguage();
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : '';
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const navItems = SECTION_IDS.map((id) => ({ id, label: t.nav[id as keyof typeof t.nav] }));

  // Tamil labels are wider, so the full desktop nav only appears from xl up.
  const ta = lang === 'ta';
  const desktopOnly = ta ? 'hidden xl:flex' : 'hidden lg:flex';
  const mobileOnly = ta ? 'xl:hidden' : 'lg:hidden';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isOpen
            ? 'border-b border-ivory/10 bg-ink py-3'
            : isScrolled
              ? 'border-b border-ivory/10 bg-ink/85 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl'
              : 'border-b border-transparent bg-transparent py-5'
        }`}
      >
        <div className="container-page flex items-center justify-between gap-6">
          <a href="#home" onClick={() => setIsOpen(false)} aria-label={t.brand}>
            <Logo />
          </a>

          {/* Desktop navigation */}
          <nav className={`items-center gap-1 ${desktopOnly}`} aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`relative whitespace-nowrap rounded-full px-3.5 py-2 font-medium transition-colors duration-200 ${
                  ta ? 'text-[13px]' : 'text-sm'
                } ${active === item.id ? 'text-gold-300' : 'text-ivory/75 hover:text-ivory'}`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 mx-auto h-1 w-1 rounded-full bg-gold-400 transition-all duration-300 ${
                    active === item.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className={`items-center gap-3 ${desktopOnly}`}>
            <LanguageSwitch />
            <a href="#contact" className="btn-gold hidden whitespace-nowrap px-5 py-2.5 xl:inline-flex">
              {t.nav.book}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile actions */}
          <div className={`flex items-center gap-2 ${mobileOnly}`}>
            <LanguageSwitch className="hidden sm:inline-flex" />
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold-400"
              onClick={() => setIsOpen((o) => !o)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation overlay — a sibling of <header> so the header's
          backdrop-filter doesn't become its containing block */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[45] bg-ink pt-[70px] transition-all duration-500 ${mobileOnly} ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="container-page flex h-full flex-col justify-between overflow-y-auto pb-10 pt-8">
          <nav className="flex flex-col" aria-label="Mobile">
            {navItems.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${80 + i * 50}ms` : '0ms' }}
                className={`flex items-baseline gap-4 border-b border-ivory/10 py-4 font-display transition-all duration-500 ${
                  ta ? 'text-2xl' : 'text-4xl'
                } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${
                  active === item.id ? 'text-gold-300' : 'text-ivory'
                }`}
              >
                <span className="font-sans text-xs text-gold-500">0{i + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 space-y-5">
            <LanguageSwitch className="sm:hidden" />
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-gold w-full">
              {t.nav.book}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={STUDIO.phoneHref} className="flex items-center justify-center gap-2 text-sm text-ivory/70">
              <Phone className="h-4 w-4 text-gold-400" />
              {STUDIO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
