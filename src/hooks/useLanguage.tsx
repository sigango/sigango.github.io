import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Language, type Translations } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  t: translations.en,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem('lang');
    if (stored === 'de') return 'de';
    return 'en';
  });

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'de' : 'en';
      localStorage.setItem('lang', next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
