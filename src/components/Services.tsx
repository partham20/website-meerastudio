import { useState } from 'react';
import {
  Heart,
  Users,
  Briefcase,
  Baby,
  Sparkles,
  MapPin,
  Video,
  Film,
  PlayCircle,
  GraduationCap,
  Building2,
  Camera,
  Check,
  ArrowRight,
  Clapperboard,
  LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { ServiceText } from '../i18n/translations';
import { COMBO_SERVICE_KEY, PHOTO_SERVICE_KEYS, VIDEO_SERVICE_KEYS } from '../config';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

type Tab = 'photo' | 'video';

const photoIcons: LucideIcon[] = [Heart, Users, Baby, Briefcase, Sparkles, MapPin];
const videoIcons: LucideIcon[] = [Video, Film, PlayCircle, GraduationCap, Baby, Building2];

function ServiceCard({
  service,
  icon: Icon,
  index,
  enquireLabel,
  onEnquire,
}: {
  service: ServiceText;
  icon: LucideIcon;
  index: number;
  enquireLabel: string;
  onEnquire: () => void;
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-[24px] border border-ivory-300 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/70 hover:shadow-lift">
      <div className="flex items-start justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ivory-200 text-gold-700 transition-colors duration-500 group-hover:bg-ink group-hover:text-gold-400">
          <Icon className="h-6 w-6" strokeWidth={1.6} />
        </span>
        <span className="font-display text-3xl italic text-ivory-300 transition-colors duration-500 group-hover:text-gold-400">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-7 font-display text-[1.7rem] font-medium leading-tight text-ink">{service.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-taupe-500">{service.description}</p>

      <p className="mt-6 border-t border-dashed border-ivory-300 pt-5 font-display text-2xl font-semibold text-gold-700">
        {service.price}
      </p>

      <ul className="mt-5 space-y-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-taupe-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.2} />
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onEnquire}
        className="mt-auto inline-flex items-center gap-2 self-start pt-8 text-sm font-semibold text-ink transition-colors hover:text-gold-700"
      >
        <span className="border-b border-gold-500 pb-0.5">{enquireLabel}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </article>
  );
}

export default function Services({ onEnquire }: { onEnquire: (serviceKey: string) => void }) {
  const { t } = useLanguage();
  const [tab, setTab] = useState<Tab>('photo');

  const services = tab === 'photo' ? t.services.photography : t.services.videography;
  const icons = tab === 'photo' ? photoIcons : videoIcons;
  const keys = tab === 'photo' ? PHOTO_SERVICE_KEYS : VIDEO_SERVICE_KEYS;

  const tabs: { id: Tab; label: string; icon: LucideIcon }[] = [
    { id: 'photo', label: t.services.photoHeading, icon: Camera },
    { id: 'video', label: t.services.videoHeading, icon: Clapperboard },
  ];

  return (
    <section id="services" className="relative bg-ivory-100 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow={t.services.eyebrow}
          title={t.services.heading}
          subtitle={tab === 'photo' ? t.services.photoSubtitle : t.services.videoSubtitle}
        />

        {/* Tabs */}
        <Reveal delay={100} className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label={t.services.eyebrow}
            className="relative inline-grid grid-cols-2 rounded-full border border-ivory-300 bg-white p-1.5 shadow-soft"
          >
            <span
              aria-hidden="true"
              className={`absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] rounded-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                tab === 'video' ? 'translate-x-full' : ''
              }`}
            />
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                id={`tab-${id}`}
                aria-selected={tab === id}
                aria-controls="services-panel"
                onClick={() => setTab(id)}
                className={`relative z-10 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 sm:px-8 ${
                  tab === id ? 'text-ivory' : 'text-taupe-500 hover:text-ink'
                }`}
              >
                <Icon className={`h-4 w-4 ${tab === id ? 'text-gold-400' : ''}`} />
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          id="services-panel"
          role="tabpanel"
          aria-labelledby={`tab-${tab}`}
          key={tab}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <div key={service.title} className="animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
              <ServiceCard
                service={service}
                icon={icons[i]}
                index={i}
                enquireLabel={t.services.enquire}
                onEnquire={() => onEnquire(keys[i])}
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-taupe-500">{t.services.startingNote}</p>

        {/* Combo banner */}
        <Reveal delay={100}>
          <div className="grain relative mt-16 overflow-hidden rounded-[28px] bg-ink px-8 py-10 text-ivory md:px-14 md:py-12">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
            />
            <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-gold-500/40 text-gold-400 sm:grid">
                  <Camera className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-3xl font-medium md:text-4xl">{t.services.comboTitle}</h3>
                  <p className="mt-2 max-w-xl text-ivory/65">{t.services.comboText}</p>
                </div>
              </div>
              <button type="button" onClick={() => onEnquire(COMBO_SERVICE_KEY)} className="btn-gold shrink-0">
                {t.services.comboBtn}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
