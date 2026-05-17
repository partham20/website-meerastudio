import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translation, Language } from './translations';

type LanguageContextValue = {
  lang: Language;
  setLang: (l: Language) => void;
  toggleLang: () => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'meera-studio-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'ta' || stored === 'en' ? stored : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Language) => setLangState(l);
  const toggleLang = () => setLangState((cur) => (cur === 'en' ? 'ta' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
