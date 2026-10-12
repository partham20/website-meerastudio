import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Send,
  Navigation,
  CheckCircle2,
  AlertCircle,
  Loader2,
  LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { ServiceRequest } from '../App';
import { STUDIO, SOCIAL_LINKS, WEB3FORMS_ACCESS_KEY, whatsappLink, mapsDirectionsLink, mapsEmbedLink } from '../config';
import { useInView } from '../hooks/useInView';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import WhatsAppIcon from './ui/WhatsAppIcon';

const emptyForm = { name: '', email: '', phone: '', service: '', date: '', message: '' };

const socialIcons: Record<keyof typeof SOCIAL_LINKS, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
};

const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

export default function Contact({ serviceRequest }: { serviceRequest: ServiceRequest | null }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [highlightService, setHighlightService] = useState(false);
  const { ref: mapRef, inView: mapInView } = useInView<HTMLDivElement>({ rootMargin: '300px' });

  // Pre-select the service chosen from a Services card.
  useEffect(() => {
    if (!serviceRequest) return;
    setFormData((f) => ({ ...f, service: serviceRequest.key }));
    setHighlightService(true);
    const id = window.setTimeout(() => setHighlightService(false), 1800);
    return () => window.clearTimeout(id);
  }, [serviceRequest]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${formData.name} — ${formData.service || 'Photography'}`,
          from_name: 'Meera Studio Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          preferred_date: formData.date,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.message || 'Submission failed');

      const whatsappText = [
        '*New Inquiry from Meera Studio Website*',
        '',
        `*Name:* ${formData.name}`,
        `*Email:* ${formData.email}`,
        formData.phone ? `*Phone:* ${formData.phone}` : '',
        `*Service:* ${formData.service}`,
        formData.date ? `*Preferred Date:* ${formData.date}` : '',
        '',
        '*Message:*',
        formData.message,
      ]
        .filter(Boolean)
        .join('\n');

      const url = whatsappLink(whatsappText);
      setWhatsappUrl(url);
      window.open(url, '_blank', 'noopener');

      setSubmitStatus('success');
      setFormData(emptyForm);
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = (Object.keys(SOCIAL_LINKS) as (keyof typeof SOCIAL_LINKS)[]).filter((k) => SOCIAL_LINKS[k]);

  const infoRows: { icon: LucideIcon; label: string; content: ReactNode }[] = [
    {
      icon: Phone,
      label: t.contact.phone,
      content: (
        <a href={STUDIO.phoneHref} className="transition-colors hover:text-gold-300">
          {STUDIO.phoneDisplay}
        </a>
      ),
    },
    {
      icon: Mail,
      label: t.contact.email,
      content: (
        <a href={`mailto:${STUDIO.email}`} className="break-all transition-colors hover:text-gold-300">
          {STUDIO.email}
        </a>
      ),
    },
    {
      icon: MapPin,
      label: t.contact.location,
      content: (
        <>
          <span className="whitespace-pre-line">{t.contact.addressText}</span>
          <a
            href={mapsDirectionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 hover:text-gold-200"
          >
            <Navigation className="h-3.5 w-3.5" />
            {t.contact.directions}
          </a>
        </>
      ),
    },
    {
      icon: Clock,
      label: t.contact.hours,
      content: <span className="whitespace-pre-line">{t.contact.hoursText}</span>,
    },
  ];

  return (
    <section id="contact" className="relative bg-ivory-100 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="06"
          eyebrow={t.contact.getInTouch}
          title={t.contact.heading}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Studio card */}
          <Reveal className="lg:col-span-5">
            <div className="grain relative flex h-full flex-col overflow-hidden rounded-[28px] bg-ink p-8 text-ivory md:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl"
              />
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="font-display text-3xl font-medium">{t.contact.studioCard}</h3>

                <ul className="mt-8 space-y-6">
                  {infoRows.map(({ icon: Icon, label, content }) => (
                    <li key={label} className="flex gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-500/30 text-gold-400">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                      </span>
                      <div className="min-w-0 pt-0.5 text-ivory/80">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/45">{label}</p>
                        <div className="mt-1 flex flex-col leading-relaxed">{content}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whitespace-nowrap bg-[#25D366] px-5 text-ink hover:bg-[#3ee07a]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {t.contact.whatsappCta}
                  </a>
                  <a href={STUDIO.phoneHref} className="btn-outline-light whitespace-nowrap px-5">
                    <Phone className="h-4 w-4" />
                    {t.contact.callCta}
                  </a>
                </div>

                {socials.length > 0 && (
                  <div className="mt-8 flex items-center gap-3">
                    <p className="mr-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/45">
                      {t.contact.followUs}
                    </p>
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
                )}

                <div
                  ref={mapRef}
                  className="mt-9 min-h-[200px] flex-1 overflow-hidden rounded-2xl border border-ivory/10 bg-ink-700"
                >
                  {mapInView && (
                    <iframe
                      title={t.contact.mapTitle}
                      src={mapsEmbedLink}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full min-h-[200px] w-full grayscale-[70%] invert-[0.9] hue-rotate-180 transition-[filter] duration-500 hover:grayscale-0 hover:invert-0 hover:hue-rotate-0"
                    />
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="h-full rounded-[28px] border border-ivory-300 bg-white p-8 shadow-soft md:p-10">
              <h3 className="font-display text-3xl font-medium text-ink">{t.contact.sendMessage}</h3>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="field-label">
                      {t.contact.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="field"
                      placeholder={t.contact.fullNamePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="field-label">
                      {t.contact.emailAddress}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="field-label">
                      {t.contact.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="field-label">
                      {t.contact.preferredDate}
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={todayISO()}
                      value={formData.date}
                      onChange={handleInputChange}
                      className="field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="field-label">
                    {t.contact.serviceType}
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`field cursor-pointer ${highlightService ? 'border-gold-500 ring-4 ring-gold-500/25' : ''}`}
                  >
                    <option value="">{t.contact.selectService}</option>
                    <optgroup label={t.contact.photographyGroup}>
                      <option value="wedding">{t.contact.serviceOptions.wedding}</option>
                      <option value="portrait">{t.contact.serviceOptions.portrait}</option>
                      <option value="maternity">{t.contact.serviceOptions.maternity}</option>
                      <option value="corporate">{t.contact.serviceOptions.corporate}</option>
                      <option value="special">{t.contact.serviceOptions.special}</option>
                      <option value="destination">{t.contact.serviceOptions.destination}</option>
                    </optgroup>
                    <optgroup label={t.contact.videographyGroup}>
                      <option value="wedding-video">{t.contact.serviceOptions.weddingVideo}</option>
                      <option value="pre-wedding-film">{t.contact.serviceOptions.preWeddingFilm}</option>
                      <option value="event-video">{t.contact.serviceOptions.eventVideo}</option>
                      <option value="functions">{t.contact.serviceOptions.functions}</option>
                      <option value="maternity-video">{t.contact.serviceOptions.maternityVideo}</option>
                      <option value="corporate-video">{t.contact.serviceOptions.corporateVideo}</option>
                    </optgroup>
                    <option value="combo">{t.contact.photoVideoCombo}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="field-label">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="field resize-y"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full py-4 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-4 w-4" />}
                  <span>{isSubmitting ? t.contact.sendingBtn : t.contact.sendBtn}</span>
                </button>

                <div aria-live="polite">
                  {submitStatus === 'success' && (
                    <div className="flex animate-fade-up gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5 text-sm text-emerald-800">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <p>{t.contact.successMsg}</p>
                        {whatsappUrl && (
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1.5 inline-flex items-center gap-1.5 font-semibold underline underline-offset-2"
                          >
                            <WhatsAppIcon className="h-3.5 w-3.5" />
                            {t.contact.whatsappFallback}
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="flex animate-fade-up gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-800">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                      <p>{t.contact.errorMsg}</p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
