import { useCallback, useEffect, useRef, useState, type TouchEvent as ReactTouchEvent } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

import wedding1 from '../assets/portfolio/wedding-1.jpg';
import wedding2 from '../assets/portfolio/wedding-2.jpg';
import family1 from '../assets/portfolio/family-1.jpg';
import family2 from '../assets/portfolio/family-2.jpg';
import maternity1 from '../assets/portfolio/maternity-1.jpg';
import maternity2 from '../assets/portfolio/maternity-2.jpg';
import wedding3 from '../assets/portfolio/wedding-3.jpg';
import kids1 from '../assets/portfolio/kids-1.jpg';
import wedding4 from '../assets/portfolio/wedding-4.jpg';
import baby1 from '../assets/portfolio/baby-1.jpg';
import portrait1 from '../assets/portfolio/portrait-1.jpg';
import newborn1 from '../assets/portfolio/newborn-1.jpg';

// categoryIndex maps to t.portfolio.categories — 0=All, 1=Wedding, 2=Family,
// 3=Maternity, 4=Portrait, 5=Kids, 6=Baby, 7=Newborn. Tracking by index keeps
// the active filter valid when the user toggles language. The array order
// matches t.portfolio.items.
const portfolioImages: { url: string; categoryIndex: number }[] = [
  { url: wedding1, categoryIndex: 1 },
  { url: wedding2, categoryIndex: 1 },
  { url: family1, categoryIndex: 2 },
  { url: family2, categoryIndex: 2 },
  { url: maternity1, categoryIndex: 3 },
  { url: maternity2, categoryIndex: 3 },
  { url: wedding3, categoryIndex: 1 },
  { url: kids1, categoryIndex: 5 },
  { url: wedding4, categoryIndex: 1 },
  { url: baby1, categoryIndex: 6 },
  { url: portrait1, categoryIndex: 4 },
  { url: newborn1, categoryIndex: 7 },
];

// Curated display order for the "All" view. Featured tiles span 2×2 on
// larger screens; with a 3-column dense grid this packs into six full rows.
const CURATED_ORDER = [8, 9, 2, 3, 7, 5, 6, 11, 4, 0, 1, 10];
const FEATURED = new Set([8, 11]);

export default function Portfolio() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const images = portfolioImages.map((img, i) => ({
    ...img,
    title: t.portfolio.items[i].title,
    category: t.portfolio.items[i].category,
    originalIndex: i,
  }));

  const showAll = activeCategoryIndex === 0;
  const filtered = showAll
    ? CURATED_ORDER.map((i) => images[i])
    : images.filter((img) => img.categoryIndex === activeCategoryIndex);
  const count = filtered.length;

  const open = (index: number) => {
    lastFocusRef.current = document.activeElement as HTMLElement;
    setSelected(index);
  };

  const close = useCallback(() => {
    setSelected(null);
    lastFocusRef.current?.focus();
  }, []);

  const next = useCallback(() => setSelected((s) => (s === null ? s : (s + 1) % count)), [count]);
  const prev = useCallback(() => setSelected((s) => (s === null ? s : (s - 1 + count) % count)), [count]);

  const isOpen = selected !== null;

  // Lock page scroll and move focus into the dialog only when it opens,
  // not on every image change.
  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      root.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, next, prev, close]);

  // Keep the active thumbnail visible in the strip.
  useEffect(() => {
    if (selected === null) return;
    const thumb = thumbsRef.current?.children[selected] as HTMLElement | undefined;
    thumb?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [selected]);

  const onTouchStart = (e: ReactTouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: ReactTouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  const activeCategoryLabel = showAll ? null : t.portfolio.categories[activeCategoryIndex];
  const current = selected !== null ? filtered[selected] : null;

  return (
    <section id="portfolio" className="grain relative bg-ink py-24 text-ivory md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[140px]"
      />
      <div className="container-page relative z-10">
        <SectionHeading
          index="03"
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
          tone="dark"
        />

        {/* Category filter */}
        <Reveal delay={100} className="mt-12">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {t.portfolio.categories.map((label, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveCategoryIndex(i)}
                aria-pressed={activeCategoryIndex === i}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategoryIndex === i
                    ? 'border-gold-500 bg-gold-500 text-ink'
                    : 'border-ivory/15 text-ivory/70 hover:border-ivory/40 hover:text-ivory'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Gallery */}
        <div
          key={activeCategoryIndex}
          className={`mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${showAll ? 'grid-flow-row-dense' : ''}`}
        >
          {filtered.map((image, index) => {
            const featured = showAll && FEATURED.has(image.originalIndex);
            return (
              <button
                key={image.originalIndex}
                type="button"
                onClick={() => open(index)}
                aria-label={`${t.portfolio.viewImage}: ${image.title}`}
                style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
                className={`group relative animate-fade-up overflow-hidden rounded-2xl bg-ink-700 text-left ${
                  featured ? 'aspect-[4/3] md:col-span-2 md:row-span-2 lg:aspect-auto' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 block p-5 transition-all duration-500 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-300">
                    {image.category}
                  </span>
                  <span
                    className={`mt-1 block font-display text-ivory ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}
                  >
                    {image.title}
                  </span>
                </span>
                <span className="absolute right-4 top-4 grid h-10 w-10 scale-90 place-items-center rounded-full bg-ivory/90 text-ink opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-ivory/50">
          {t.portfolio.showing(count, portfolioImages.length, activeCategoryLabel)}
        </p>
      </div>

      {/* Lightbox — portalled to <body> so it stacks above the fixed header */}
      {current &&
        selected !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            className="fixed inset-0 z-[60] flex animate-fade-in flex-col bg-ink/[0.97] backdrop-blur-sm"
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex items-center justify-between px-5 py-4 text-sm text-ivory/70 md:px-8">
              <span className="font-display text-lg italic tabular-nums">
                {t.portfolio.counter(selected + 1, count)}
              </span>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={close}
                className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold-400 hover:text-gold-300"
                aria-label={t.portfolio.closeLightbox}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-24">
              <img
                key={current.url}
                src={current.url}
                alt={current.title}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full animate-fade-in rounded-lg object-contain shadow-2xl"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/20 bg-ink/60 text-ivory transition-colors hover:border-gold-400 hover:text-gold-300 sm:grid md:left-8"
                aria-label={t.portfolio.prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/20 bg-ink/60 text-ivory transition-colors hover:border-gold-400 hover:text-gold-300 sm:grid md:right-8"
                aria-label={t.portfolio.nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="px-5 pb-6 pt-4 text-center md:px-8" onClick={(e) => e.stopPropagation()}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-300">{current.category}</p>
              <p className={`mt-1 font-display text-2xl text-ivory ${lang === 'ta' ? 'text-xl' : ''}`}>
                {current.title}
              </p>

              {/* Thumbnails */}
              <div
                ref={thumbsRef}
                className="no-scrollbar mx-auto mt-5 flex w-fit max-w-full gap-2 overflow-x-auto md:max-w-3xl"
              >
                {filtered.map((img, i) => (
                  <button
                    key={img.originalIndex}
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-label={img.title}
                    aria-current={i === selected}
                    className={`h-12 w-16 shrink-0 overflow-hidden rounded-md transition-all duration-300 ${
                      i === selected ? 'opacity-100 ring-2 ring-gold-400' : 'opacity-40 hover:opacity-80'
                    }`}
                  >
                    <img src={img.url} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
