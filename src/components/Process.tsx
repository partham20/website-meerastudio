import { MessageCircle, CalendarCheck, Aperture, BookOpen, LucideIcon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const stepIcons: LucideIcon[] = [MessageCircle, CalendarCheck, Aperture, BookOpen];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow={t.process.eyebrow}
          title={t.process.heading}
          subtitle={t.process.subtitle}
        />

        <div className="relative mt-20">
          {/* Connecting line (desktop) */}
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden border-t border-dashed border-gold-500/50 lg:block"
          />
          <ol className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {t.process.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <Reveal as="li" key={step.title} delay={i * 120} className="group relative text-center">
                  <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold-500/40 bg-ivory transition-all duration-500 group-hover:border-gold-500 group-hover:bg-ink">
                    <Icon
                      className="h-7 w-7 text-gold-700 transition-colors duration-500 group-hover:text-gold-400"
                      strokeWidth={1.5}
                    />
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-ink font-display text-sm italic text-gold-300">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-3xl font-medium text-ink">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-[17rem] text-[15px] leading-relaxed text-taupe-500">{step.text}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
