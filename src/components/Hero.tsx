import { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import wedding4 from '../assets/portfolio/wedding-4.jpg';
import newborn1 from '../assets/portfolio/newborn-1.jpg';
import wedding1 from '../assets/portfolio/wedding-1.jpg';
import baby1 from '../assets/portfolio/baby-1.jpg';
import portrait1 from '../assets/portfolio/portrait-1.jpg';

// itemIndex points into t.portfolio.items so captions follow the language toggle.
const slides = [
  { src: wedding4, itemIndex: 8, position: '50% 50%' },
  { src: newborn1, itemIndex: 11, position: '50% 50%' },
  { src: wedding1, itemIndex: 1, position: '72% 50%' },
  { src: baby1, itemIndex: 9, position: '38% 50%' },
  { src: portrait1, itemIndex: 10, position: '50% 50%' },
];

const SLIDE_MS = 5500;
// Decorative brand mark; kept in Latin script because textPath letter-spacing
// breaks Tamil glyph clusters.
const BADGE_TEXT = 'MEERA STUDIO ✦ PHOTOGRAPHY ✦ FILMS ✦ ';

function RotatingBadge({ text }: { text: string }) {
  return (
    <div className="relative grid h-32 w-32 place-items-center rounded-full bg-ink/90 shadow-lift ring-1 ring-gold-500/30 backdrop-blur md:h-36 md:w-36">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text className="fill-gold-300 font-sans text-[15px] font-semibold uppercase">
          <textPath href="#badge-circle" textLength="462" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="font-display text-3xl font-medium italic text-ivory">
        30<span className="text-gold-400">+</span>
      </span>
    </div>
  );
}

export default function Hero() {
  const { t, lang } = useLanguage();
  const reducedMotion = usePrefersReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => setCurrent((c) => (c + 1) % slides.length), SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const trust = [
    { value: '30+', label: t.about.stats.experience },
    { value: '6000+', label: t.about.stats.sessions },
    { value: '1000+', label: t.about.stats.clients },
  ];

  const ta = lang === 'ta';
  const caption = t.portfolio.items[slides[current].itemIndex];

  return (
    <section id="home" className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ivory">
      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-gold-500/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-[480px] w-[480px] rounded-full bg-maroon-600/30 blur-[120px]"
      />
      {/* Contact-sheet guide lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="container-page grid h-full grid-cols-12">
          <div className="col-start-1 border-l border-ivory/[0.05]" />
          <div className="col-start-7 border-l border-ivory/[0.05]" />
          <div className="col-start-12 border-r border-ivory/[0.05]" />
        </div>
      </div>

      <div className="container-page relative z-10 grid flex-1 items-center gap-14 pb-16 pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-36">
        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="eyebrow animate-fade-up text-gold-400">{t.hero.eyebrow}</p>

          <h1
            className={`mt-7 animate-fade-up font-display font-medium [animation-delay:120ms] ${
              ta
                ? 'text-[2.3rem] leading-[1.3] sm:text-5xl lg:text-[2.8rem] xl:text-[3.25rem]'
                : 'text-[3.4rem] leading-[0.98] sm:text-7xl lg:text-[4.6rem] xl:text-[5.6rem] 2xl:text-[6.2rem]'
            }`}
          >
            <span className="block">{t.hero.titleLine1}</span>
            <span className={`block text-gold-400 ${ta ? '' : 'italic'}`}>{t.hero.titleLine2}</span>
          </h1>

          <p className="mt-7 max-w-xl animate-fade-up text-base leading-relaxed text-ivory/70 [animation-delay:240ms] md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex animate-fade-up flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:items-center">
            <a href="#contact" className="btn-gold group">
              {t.hero.bookBtn}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="btn-outline-light">
              {t.hero.viewBtn}
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg animate-fade-up grid-cols-3 divide-x divide-ivory/10 [animation-delay:480ms]">
            {trust.map((item) => (
              <div key={item.label} className="px-4 first:pl-0">
                <dt className="sr-only">{item.label}</dt>
                <dd className="font-display text-3xl font-medium text-ivory md:text-4xl">
                  {item.value.replace('+', '')}
                  <span className="text-gold-400">+</span>
                </dd>
                <dd className="mt-1 text-[11px] uppercase leading-snug tracking-[0.14em] text-ivory/50">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Arch gallery */}
        <div className="relative mx-auto w-full max-w-[420px] animate-fade-in [animation-delay:200ms] lg:col-span-5 lg:mr-0">
          {/* offset outline arch */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-gold-500/40"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-ink-700 shadow-lift">
            {slides.map((slide, i) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={i === current ? t.portfolio.items[slide.itemIndex].title : ''}
                aria-hidden={i !== current}
                loading={i === 0 ? 'eager' : 'lazy'}
                style={{ objectPosition: slide.position }}
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] ease-out ${
                  i === current
                    ? 'scale-[1.08] opacity-100 duration-[1200ms,7000ms]'
                    : 'scale-100 opacity-0 duration-[1200ms,1200ms]'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

            {/* Viewfinder corners */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-7 bottom-[36%] top-[26%]">
              <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-ivory/60" />
              <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-ivory/60" />
              <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-ivory/60" />
              <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-ivory/60" />
            </div>

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-7 pb-8">
              <div key={current} className="animate-fade-up">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-300">{caption.category}</p>
                <p className="mt-1 font-display text-xl text-ivory md:text-2xl">{caption.title}</p>
              </div>
              <div className="mt-4 flex gap-1.5">
                {slides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={t.portfolio.items[slide.itemIndex].title}
                    aria-current={i === current}
                    className="group/dot py-2"
                  >
                    <span
                      className={`block h-0.5 rounded-full transition-all duration-500 ${
                        i === current ? 'w-8 bg-gold-400' : 'w-4 bg-ivory/40 group-hover/dot:bg-ivory/70'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -left-3 top-[6%] md:-left-12">
            <RotatingBadge text={BADGE_TEXT} />
          </div>

          <div className="absolute -bottom-5 right-4 hidden items-center gap-2 rounded-full bg-ivory px-4 py-2 text-ink shadow-lift sm:flex md:-right-6">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
              ))}
            </span>
            <span className="text-xs font-semibold">
              {trust[2].value} {t.about.stats.clients}
            </span>
          </div>
        </div>
      </div>

      {/* Services ticker */}
      <div className="relative z-10 border-t border-ivory/10 bg-ink/60 py-5 backdrop-blur">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
            {[...t.hero.marquee, ...t.hero.marquee].map((item, i) => (
              <span
                key={i}
                aria-hidden={i >= t.hero.marquee.length}
                className="flex items-center font-display text-xl text-ivory/80 md:text-2xl"
              >
                <span className={ta ? '' : 'italic'}>{item}</span>
                <span className="mx-8 text-sm text-gold-500">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
