import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from './Reveal';

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: 'light' | 'dark';
  align?: 'center' | 'left';
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'center',
}: SectionHeadingProps) {
  const { lang } = useLanguage();
  const dark = tone === 'dark';
  const centered = align === 'center';

  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <p className={`eyebrow ${dark ? 'text-gold-400' : 'text-gold-700'} ${centered ? 'justify-center' : ''}`}>
        <span className="font-display text-sm italic tracking-normal">{index}</span>
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-display font-medium ${dark ? 'text-ivory' : 'text-ink'} ${
          lang === 'ta' ? 'text-3xl md:text-4xl' : 'text-4xl leading-[1.05] md:text-6xl'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? 'text-ivory/65' : 'text-taupe-500'} ${
            centered ? 'mx-auto max-w-2xl' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
