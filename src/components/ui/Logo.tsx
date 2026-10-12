import { Aperture } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Logo({ className = '' }: { className?: string }) {
  const { t, lang } = useLanguage();
  return (
    <span className={`group inline-flex items-center gap-3 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-full border border-gold-500/50 transition-colors duration-300 group-hover:border-gold-400">
        <Aperture
          className="h-5 w-5 text-gold-400 transition-transform duration-700 group-hover:rotate-[120deg]"
          strokeWidth={1.6}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap font-display font-semibold text-ivory ${
            lang === 'ta' ? 'text-lg' : 'text-[1.6rem] tracking-wide'
          }`}
        >
          {t.brand}
        </span>
        <span className="mt-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.32em] text-gold-400/90">
          {t.brandTagline}
        </span>
      </span>
    </span>
  );
}
