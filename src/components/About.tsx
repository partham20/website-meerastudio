import { Award, Users, Camera, Heart, Check, LucideIcon } from 'lucide-react';
import mathaiyan from '../assets/portfolio/mathaiyan.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import Reveal from './ui/Reveal';

function Stat({ icon: Icon, value, label, start }: { icon: LucideIcon; value: string; label: string; start: boolean }) {
  const display = useCountUp(value, start);
  return (
    <div className="group bg-ivory-50 px-2 py-7 text-center sm:px-4">
      <Icon
        className="mx-auto h-5 w-5 text-gold-600 transition-transform duration-300 group-hover:-translate-y-0.5"
        strokeWidth={1.6}
      />
      <div className="mt-3 font-display text-4xl font-medium tabular-nums text-ink md:text-5xl">{display}</div>
      <div className="mt-2 text-[11px] font-semibold uppercase leading-snug tracking-[0.14em] text-taupe-500">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const { t, lang } = useLanguage();
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  const stats = [
    { icon: Camera, value: '6000+', label: t.about.stats.sessions },
    { icon: Users, value: '1000+', label: t.about.stats.clients },
    { icon: Award, value: '30+', label: t.about.stats.experience },
    { icon: Heart, value: '99%', label: t.about.stats.satisfaction },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Portrait composition */}
          <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-[28px] border border-gold-500/50"
            />
            <div className="relative overflow-hidden rounded-[28px] bg-white shadow-lift">
              <img
                src={mathaiyan}
                alt={`Mathaiyan — ${t.about.leadPhotographer}, ${t.brand}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-7 pt-20">
                <p className={`font-display text-3xl text-ivory ${lang === 'ta' ? '' : 'italic'}`}>Mathaiyan</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                  {t.about.leadPhotographer}
                </p>
              </div>
            </div>

            <div className="absolute -right-4 top-10 rounded-2xl bg-ink px-6 py-5 text-ivory shadow-lift md:-right-10">
              <p className="font-display text-5xl font-medium leading-none">
                30<span className="text-gold-400">+</span>
              </p>
              <p className="mt-2 max-w-[8rem] text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-ivory/60">
                {t.about.yearsBadge}
              </p>
            </div>
          </Reveal>

          {/* Story */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-gold-700">
                <span className="font-display text-sm italic tracking-normal">01</span>
                {t.about.eyebrow}
              </p>
              <h2
                className={`mt-5 font-display font-medium text-ink ${
                  lang === 'ta' ? 'text-3xl md:text-4xl' : 'text-4xl leading-[1.05] md:text-6xl'
                }`}
              >
                {t.about.title}
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p
                className={`mt-8 text-lg leading-relaxed text-taupe-600 ${
                  lang === 'ta'
                    ? ''
                    : 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-gold-600'
                }`}
              >
                {t.about.para1}
              </p>
              <p className="mt-5 leading-relaxed text-taupe-500">{t.about.para2}</p>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {t.about.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-ink">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500/15">
                      <Check className="h-3.5 w-3.5 text-gold-700" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Stats band */}
        <Reveal delay={100}>
          <div
            ref={statsRef}
            className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-ivory-300 bg-ivory-300 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <Stat key={stat.value} {...stat} start={statsInView} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
