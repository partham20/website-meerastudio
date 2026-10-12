// Studio-wide contact details and integrations. Update values here and every
// section (header, contact, footer, floating buttons) picks them up.

export const STUDIO = {
  phoneDisplay: '+91 98426 97382',
  phoneHref: 'tel:+919842697382',
  whatsappNumber: '919842697382', // country code + number, no + or spaces
  email: 'hello@meerastudio.co.in',
  mapsQuery: 'BCL Complex, Bus Stand, Bargur, Krishnagiri, Tamil Nadu 635104',
};

// Get a free key at https://web3forms.com (takes ~1 minute, just enter your email)
export const WEB3FORMS_ACCESS_KEY = '090b0052-d05c-4efd-8767-635b6ddba3b0';

// Paste full profile URLs to show the icons. Empty entries stay hidden, so the
// site never shows a social icon that leads nowhere.
export const SOCIAL_LINKS: { instagram: string; facebook: string; youtube: string } = {
  instagram: '',
  facebook: '',
  youtube: '',
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${STUDIO.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const mapsDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STUDIO.mapsQuery)}`;
export const mapsEmbedLink = `https://www.google.com/maps?q=${encodeURIComponent(STUDIO.mapsQuery)}&output=embed`;

// Service keys shared by the Services cards ("Enquire") and the contact form
// <select>. Order matches t.services.photography / t.services.videography.
export const PHOTO_SERVICE_KEYS = ['wedding', 'portrait', 'maternity', 'corporate', 'special', 'destination'] as const;
export const VIDEO_SERVICE_KEYS = [
  'wedding-video',
  'pre-wedding-film',
  'event-video',
  'functions',
  'maternity-video',
  'corporate-video',
] as const;
export const COMBO_SERVICE_KEY = 'combo';
