import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowUp, LucideIcon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { STUDIO, SOCIAL_LINKS, whatsappLink } from '../config';
import Logo from './ui/Logo';
import WhatsAppIcon from './ui/WhatsAppIcon';

const socialIcons: Record<keyof typeof SOCIAL_LINKS, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
};

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const socials = (Object.keys(SOCIAL_LINKS) as (keyof typeof SOCIAL_LINKS)[]).filter((k) => SOCIAL_LINKS[k]);

  const explore = [
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="grain relative overflow-hidden bg-ink text-ivory">
      <div className="container-page relative z-10 pt-20">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#home" aria-label={t.brand}>
              <Logo />
            </a>
            <p className="mt-6 max-w-sm leading-relaxed text-ivory/55">{t.footer.tagline}</p>
            <div className="mt-7 flex gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              {socials.map((key) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={SOCIAL_LINKS[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 transition-colors hover:border-gold-400 hover:text-gold-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-2" aria-label={t.footer.exploreHeading}>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">
              {t.footer.exploreHeading}
            </h3>
            <ul className="mt-5 space-y-3 text-ivory/65">
              {explore.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-ivory">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">
              {t.footer.servicesHeading}
            </h3>
            <ul className="mt-5 space-y-3 text-ivory/65">
              {t.footer.serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className="transition-colors hover:text-ivory">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">
              {t.footer.contactHeading}
            </h3>
            <ul className="mt-5 space-y-4 text-ivory/65">
              <li>
                <a href={STUDIO.phoneHref} className="flex items-start gap-3 transition-colors hover:text-ivory">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {STUDIO.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STUDIO.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-ivory"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  <span className="break-all">{STUDIO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span className="whitespace-pre-line text-sm leading-relaxed">{t.contact.addressText}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-ivory/10 py-7 text-sm text-ivory/45 md:flex-row">
          <p>{t.footer.copyright(currentYear)}</p>
          <a href="#home" className="inline-flex items-center gap-2 transition-colors hover:text-gold-300">
            {t.footer.backToTop}
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none relative z-0 -mb-[0.22em] select-none text-center">
        <span className="text-outline block whitespace-nowrap font-display text-[19vw] font-semibold leading-none">
          Meera Studio
        </span>
      </div>
    </footer>
  );
}
