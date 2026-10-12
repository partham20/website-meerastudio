import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { whatsappLink } from '../config';
import WhatsAppIcon from './ui/WhatsAppIcon';

export default function FloatingActions() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 md:bottom-8 md:right-8">
      <a
        href="#home"
        aria-label={t.footer.backToTop}
        tabIndex={showTop ? 0 : -1}
        className={`grid h-11 w-11 place-items-center rounded-full border border-ivory-300 bg-ivory/95 text-ink shadow-soft backdrop-blur transition-all duration-300 hover:border-gold-500 hover:text-gold-700 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floating.whatsapp}
        title={t.floating.whatsapp}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.65)] transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20 [animation-duration:2.5s]" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
    </div>
  );
}
