import { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import karthikPriya from '../assets/testimonials/karthik-priya.jpg';
import lakshmi from '../assets/testimonials/lakshmi.jpg';
import senthilKumar from '../assets/testimonials/senthil-kumar.jpg';
import divyaArun from '../assets/testimonials/divya-arun.jpg';
import anitha from '../assets/testimonials/anitha.jpg';
import rajeshMeena from '../assets/testimonials/rajesh-meena.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const testimonialImages = [karthikPriya, lakshmi, senthilKumar, divyaArun, anitha, rajeshMeena];
const AUTOPLAY_MS = 8000;

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const items = t.testimonials.items.map((item, i) => ({ ...item, image: testimonialImages[i] }));
  const total = items.length;
  const current = items[active];
  const autoplay = !paused && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % total), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, autoplay, total]);

  const go = (delta: number) => setActive((a) => (a + delta + total) % total);

  return (
    <section id="testimonials" className="grain relative overflow-hidden bg-maroon-700 py-24 text-ivory md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-[520px] w-[520px] rounded-full bg-gold-500/15 blur-[130px]"
      />
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-16 h-72 w-72 rotate-180 text-ivory/[0.04]"
        strokeWidth={1}
      />

      <div className="container-page relative z-10">
        <SectionHeading
          index="05"
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.heading}
          subtitle={t.testimonials.subtitle}
          tone="dark"
        />

        <Reveal delay={120}>
          <div
            className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {/* Featured quote */}
            <figure className="relative flex flex-col lg:col-span-7" aria-live={autoplay ? 'off' : 'polite'}>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote key={active} className="mt-7 flex-1 animate-fade-up">
                <p
                  className={`font-display text-ivory ${
                    lang === 'ta' ? 'text-lg leading-[1.9] md:text-xl' : 'text-2xl italic leading-snug md:text-[2rem]'
                  }`}
                >
                  “{current.text}”
                </p>
              </blockquote>
              <figcaption key={`c-${active}`} className="mt-9 flex animate-fade-up items-center gap-4">
                <img
                  src={current.image}
                  alt=""
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-gold-400/60 ring-offset-2 ring-offset-maroon-700"
                />
                <div>
                  <p className="font-semibold text-ivory">{current.name}</p>
                  <p className="text-sm text-ivory/60">{current.role}</p>
                </div>
              </figcaption>

              {/* Controls */}
              <div className="mt-10 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={t.testimonials.prev}
                  className="grid h-12 w-12 place-items-center rounded-full border border-ivory/25 transition-colors hover:border-gold-400 hover:text-gold-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={t.testimonials.next}
                  className="grid h-12 w-12 place-items-center rounded-full border border-ivory/25 transition-colors hover:border-gold-400 hover:text-gold-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="ml-2 h-px flex-1 overflow-hidden bg-ivory/15">
                  <div
                    key={`${active}-${autoplay}`}
                    className={`h-full origin-left bg-gold-400 ${autoplay ? 'animate-progress' : ''}`}
                    style={
                      autoplay
                        ? { animationDuration: `${AUTOPLAY_MS}ms` }
                        : { transform: `scaleX(${(active + 1) / total})` }
                    }
                  />
                </div>
                <span className="font-display text-lg italic tabular-nums text-ivory/70">
                  {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
              </div>
            </figure>

            {/* Client list */}
            <div className="lg:col-span-5">
              <ul className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
                {items.map((item, i) => (
                  <li key={item.name} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={i === active}
                      className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                        i === active
                          ? 'border-gold-400/60 bg-ivory/10'
                          : 'border-ivory/10 hover:border-ivory/25 hover:bg-ivory/5'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className={`h-11 w-11 shrink-0 rounded-full object-cover transition-all duration-300 ${
                          i === active ? '' : 'grayscale-[60%]'
                        }`}
                      />
                      <span className="min-w-0">
                        <span className="block whitespace-nowrap text-sm font-semibold text-ivory">{item.name}</span>
                        <span className="block whitespace-nowrap text-xs text-ivory/55 lg:truncate">{item.role}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
