export type Language = 'en' | 'ta';

export type ServiceText = {
  title: string;
  description: string;
  price: string;
  features: string[];
};

export type TestimonialText = {
  name: string;
  role: string;
  text: string;
};

export type PortfolioItemText = {
  category: string;
  title: string;
};

export type Translation = {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    bookBtn: string;
    viewBtn: string;
  };
  about: {
    title: string;
    para1: string;
    para2: string;
    leadPhotographer: string;
    stats: {
      sessions: string;
      clients: string;
      experience: string;
      satisfaction: string;
    };
  };
  services: {
    photoHeading: string;
    photoSubtitle: string;
    videoHeading: string;
    videoSubtitle: string;
    learnMore: string;
    photography: ServiceText[];
    videography: ServiceText[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    categories: string[];
    items: PortfolioItemText[];
    showing: (visible: number, total: number, category: string | null) => string;
    closeLightbox: string;
    prevImage: string;
    nextImage: string;
    counter: (current: number, total: number) => string;
  };
  testimonials: {
    heading: string;
    subtitle: string;
    items: TestimonialText[];
  };
  contact: {
    heading: string;
    subtitle: string;
    getInTouch: string;
    sendMessage: string;
    phone: string;
    email: string;
    location: string;
    hours: string;
    hoursText: string;
    addressText: string;
    followUs: string;
    fullName: string;
    fullNamePlaceholder: string;
    emailAddress: string;
    phoneNumber: string;
    serviceType: string;
    selectService: string;
    photographyGroup: string;
    videographyGroup: string;
    photoVideoCombo: string;
    serviceOptions: { wedding: string; portrait: string; maternity: string; corporate: string; special: string; destination: string; weddingVideo: string; preWeddingFilm: string; eventVideo: string; functions: string; maternityVideo: string; corporateVideo: string };
    preferredDate: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successMsg: string;
    errorMsg: string;
  };
  footer: {
    tagline: string;
    servicesHeading: string;
    contactHeading: string;
    serviceLinks: string[];
    copyright: (year: number) => string;
    privacy: string;
    terms: string;
    cookies: string;
  };
  toggle: {
    switchTo: string;
  };
  brand: string;
};

const en: Translation = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    testimonials: 'Testimonials',
    contact: 'Contact',
  },
  hero: {
    titleLine1: "Capturing Life's",
    titleLine2: 'Beautiful Moments',
    subtitle:
      'Professional photography and videography that tells your unique story with artistry, passion, and timeless elegance.',
    bookBtn: 'Book Your Session',
    viewBtn: 'View Our Work',
  },
  about: {
    title: 'Crafting Visual Stories That Last Forever',
    para1:
      'With over 30 years of experience in professional photography and videography, I specialize in capturing the authentic emotions and intimate moments that make your story unique. My approach combines technical expertise with artistic vision to create timeless images and cinematic films.',
    para2:
      "From intimate portraits to grand celebrations, from full wedding films to short social reels, every moment deserves to be preserved with care, creativity, and attention to detail. Let me help you create lasting memories that you'll treasure for generations.",
    leadPhotographer: 'Lead Photographer',
    stats: {
      sessions: 'Sessions Completed',
      clients: 'Happy Clients',
      experience: 'Years Experience',
      satisfaction: 'Client Satisfaction',
    },
  },
  services: {
    photoHeading: 'Photography Services',
    photoSubtitle:
      'Professional photography services tailored to capture your most precious moments with artistry and care.',
    videoHeading: 'Videography Services',
    videoSubtitle:
      'Cinematic films that bring your stories to life — from full wedding films to short social reels.',
    learnMore: 'Learn More',
    photography: [
      {
        title: 'Wedding Photography',
        description: 'Capture your special day with traditional and candid imagery that tells your love story.',
        price: 'Starting at ₹20,000',
        features: ['Full day coverage', 'Candid + traditional', '500+ edited photos', 'Premium photo album'],
      },
      {
        title: 'Portrait Sessions',
        description: 'Professional headshots and family portraits that showcase your personality.',
        price: 'Starting at ₹6,000',
        features: ['1-2 hour session', '30+ edited photos', 'Multiple outfit changes', 'High-res digital files'],
      },
      {
        title: 'Maternity & Newborn',
        description: 'Gentle, artistic photography celebrating new life and growing families.',
        price: 'Starting at ₹10,000',
        features: ['In-studio or outdoor', 'Props included', '40+ edited photos', 'Same-day previews'],
      },
      {
        title: 'Corporate Events',
        description: 'Professional event coverage for businesses, conferences, and corporate gatherings.',
        price: 'Starting at ₹20,000',
        features: ['Full event coverage', 'Same-day delivery', 'High-resolution files', 'Usage rights'],
      },
      {
        title: 'Special Occasions',
        description:
          'Birthdays, baby showers, anniversaries, house warming functions and milestone celebrations captured beautifully.',
        price: 'Starting at ₹12,000',
        features: ['3-4 hours coverage', '100+ edited photos', 'Group and candid shots', 'Online gallery'],
      },
      {
        title: 'Destination Sessions',
        description: 'Travel photography for weddings, pre-wedding shoots, and vacation memories.',
        price: 'Custom pricing',
        features: ['Travel included', 'Multiple locations', 'Extended coverage', 'Custom packages'],
      },
    ],
    videography: [
      {
        title: 'Wedding Cinematography',
        description: 'Cinematic wedding films capturing every emotion, ritual and candid moment of your big day.',
        price: 'Starting at ₹15,000',
        features: ['Full day coverage', '4-5 min highlight film', 'Full ceremony footage', '4K resolution'],
      },
      {
        title: 'Pre-Wedding Film',
        description: 'Romantic cinematic films for engagements, save-the-date invites and anniversaries.',
        price: 'Starting at ₹25,000',
        features: ['Half-day shoot', '1-2 locations', '2-3 min cinematic film', 'Music & colour grading'],
      },
      {
        title: 'Event Videography',
        description: 'Birthday parties, baby showers, corporate events and milestone celebrations captured on film.',
        price: 'Starting at ₹18,000',
        features: ['3-4 hours coverage', 'Highlight reel', 'Full event footage', 'Same-week delivery'],
      },
      {
        title: 'Functions & Annual Days',
        description:
          'School and college annual days, graduation ceremonies, house warming functions and community celebrations.',
        price: 'Starting at ₹15,000',
        features: ['Multi-camera coverage', 'Stage + audience shots', 'Speeches & performances', 'Highlight film + full footage'],
      },
      {
        title: 'Maternity & Newborn Films',
        description:
          'Gentle, cinematic films celebrating new life — bump-to-baby journeys and first-year milestone videos.',
        price: 'Starting at ₹15,000',
        features: ['In-studio or outdoor', '2-3 min cinematic film', 'Music & colour grading', 'Full raw footage'],
      },
      {
        title: 'Corporate Films',
        description:
          'Brand films, training videos, product showcases and internal communications for businesses and institutions.',
        price: 'Starting at ₹25,000',
        features: ['Pre-production planning', 'Multi-camera setup', 'Interviews & b-roll', 'Full post-production'],
      },
    ],
  },
  portfolio: {
    title: 'Our Portfolio',
    subtitle:
      "Capturing life's precious moments through our lens — from traditional ceremonies to intimate family portraits.",
    categories: ['All', 'Wedding', 'Family', 'Maternity', 'Portrait', 'Kids', 'Baby', 'Newborn'],
    items: [
      { category: 'Wedding', title: 'Traditional Wedding Ceremony' },
      { category: 'Wedding', title: 'Intimate Wedding Moments' },
      { category: 'Family', title: 'Joyful Children Portrait' },
      { category: 'Family', title: 'Traditional Family Gathering' },
      { category: 'Maternity', title: 'Expecting Joy — Creative Collage' },
      { category: 'Maternity', title: 'Beautiful Maternity Session' },
      { category: 'Wedding', title: 'Bridal Portrait Excellence' },
      { category: 'Kids', title: 'Creative Kids Photography' },
      { category: 'Wedding', title: 'Pre-Wedding Romance' },
      { category: 'Baby', title: 'Traditional Baby Portrait' },
      { category: 'Portrait', title: 'Father & Son Bond' },
      { category: 'Newborn', title: 'Peaceful Newborn Session' },
    ],
    showing: (visible, total, category) =>
      category ? `Showing ${visible} of ${total} images in ${category} category` : `Showing ${visible} of ${total} images`,
    closeLightbox: 'Close lightbox',
    prevImage: 'Previous image',
    nextImage: 'Next image',
    counter: (current, total) => `${current} of ${total}`,
  },
  testimonials: {
    heading: 'What Our Clients Say',
    subtitle:
      "Don't just take our word for it. Here's what our amazing clients have to say about their experience with Meera Studio.",
    items: [
      {
        name: 'Karthik & Priya',
        role: 'Wedding Clients, Bargur',
        text: "Mathaiyan sir and his team covered our wedding from the engagement to the reception. He knows every shot a Tamil wedding needs — the muhurtham, the family rituals, even the small moments with our grandparents. The album feels like our family story, not just photos.",
      },
      {
        name: 'Lakshmi',
        role: 'Family Portrait Client, Krishnagiri',
        text: 'We wanted a proper family portrait — both sides of the family in one frame, no rushing. The session was well planned, multiple group combinations covered in a single sitting, and the final prints we got for our hall came out beautifully. Easily worth doing every few years.',
      },
      {
        name: 'Senthil Kumar',
        role: 'Corporate Client, Salem',
        text: 'We booked Meera Studio for our company annual day in Salem. Edited photos were delivered the same week, all colour-corrected and ready for our LinkedIn posts and internal newsletter. The team was professional, on time, and the pricing was very reasonable for the quality we got.',
      },
      {
        name: 'Divya & Arun',
        role: 'Maternity Clients, Chennai',
        text: 'Mathaiyan travelled all the way to Chennai for our valaikappu and maternity shoot. I was nervous about being on camera but he made the whole session feel relaxed. The results were soft, natural, and very us. Already booked him again for the newborn shoot.',
      },
      {
        name: 'Anitha',
        role: 'Portrait Client, Tirupattur',
        text: 'I needed professional headshots for my college applications and a matrimony profile. They understood both contexts and gave me two completely different sets in one session. Friends could not believe these were the same person — that is how good the lighting and styling was.',
      },
      {
        name: 'Rajesh & Meena',
        role: 'Anniversary Clients, Dharmapuri',
        text: 'For our first anniversary, we wanted a small couple shoot — nothing too formal. Mathaiyan drove down to Dharmapuri, scouted a nice outdoor spot, and made us laugh through the whole session. The candid shots came out far better than the posed ones. Already planning to book him every year.',
      },
    ],
  },
  contact: {
    heading: "Let's Create Something Beautiful Together",
    subtitle:
      "Ready to capture your special moments? Get in touch to discuss your photography needs and let's bring your vision to life.",
    getInTouch: 'Get In Touch',
    sendMessage: 'Send Us a Message',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    hours: 'Hours',
    hoursText: 'Monday – Saturday: 8:00 AM – 8:00 PM\nSunday: 10:00 AM – 8:00 PM',
    addressText: '325, BCL Complex, 1st Floor, Bus Stand Opposite\nBargur, Krishnagiri, Tamil Nadu - 635104',
    followUs: 'Follow Us',
    fullName: 'Full Name *',
    fullNamePlaceholder: 'Your Name',
    emailAddress: 'Email Address *',
    phoneNumber: 'Phone Number',
    serviceType: 'Service Type *',
    selectService: 'Select a service',
    photographyGroup: 'Photography',
    videographyGroup: 'Videography',
    photoVideoCombo: 'Photo + Video Combo',
    serviceOptions: {
      wedding: 'Wedding Photography',
      portrait: 'Portrait Session',
      maternity: 'Maternity & Newborn',
      corporate: 'Corporate Event Photography',
      special: 'Special Occasions',
      destination: 'Destination Sessions',
      weddingVideo: 'Wedding Cinematography',
      preWeddingFilm: 'Pre-Wedding Film',
      eventVideo: 'Event Videography',
      functions: 'Functions & Annual Days',
      maternityVideo: 'Maternity & Newborn Films',
      corporateVideo: 'Corporate Films',
    },
    preferredDate: 'Preferred Date',
    messageLabel: 'Message *',
    messagePlaceholder: 'Tell us about your photography needs...',
    sendBtn: 'Send Message',
    sendingBtn: 'Sending...',
    successMsg:
      'Thank you! Your message has been sent. A WhatsApp window has also opened — tap Send there to reach us instantly.',
    errorMsg: 'Something went wrong. Please try again, or call us directly at +91 9842697382.',
  },
  footer: {
    tagline:
      "Capturing life's beautiful moments with artistry, passion, and timeless elegance. Creating memories that last a lifetime through professional photography and videography.",
    servicesHeading: 'Services',
    contactHeading: 'Contact',
    serviceLinks: [
      'Wedding Photography',
      'Wedding Cinematography',
      'Pre-Wedding Films',
      'Maternity & Newborn',
      'Event Photo + Video',
      'Annual Days & Functions',
    ],
    copyright: (year) => `© ${year} Meera Studio. All rights reserved.`,
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
  },
  toggle: {
    switchTo: 'தமிழ்',
  },
  brand: 'Meera Studio',
};

const ta: Translation = {
  nav: {
    home: 'முகப்பு',
    about: 'எங்களைப் பற்றி',
    services: 'சேவைகள்',
    portfolio: 'எங்கள் படைப்புகள்',
    testimonials: 'கருத்துகள்',
    contact: 'தொடர்பு',
  },
  hero: {
    titleLine1: 'வாழ்வின்',
    titleLine2: 'அழகிய தருணங்களை',
    subtitle:
      'உங்கள் தனித்துவமான கதையை கலை நயத்துடனும், ஆர்வத்துடனும், காலத்தை வென்ற நேர்த்தியுடனும் சொல்லும் தொழில்முறை புகைப்படம் மற்றும் ஒளிப்பதிவு சேவைகள்.',
    bookBtn: 'உங்கள் நேரத்தை முன்பதிவு செய்யுங்கள்',
    viewBtn: 'எங்கள் படைப்புகளைப் பாருங்கள்',
  },
  about: {
    title: 'என்றென்றும் நிலைக்கும் காட்சிக் கதைகளை உருவாக்குகிறோம்',
    para1:
      '30 ஆண்டுகளுக்கும் மேலான தொழில்முறை புகைப்படம் மற்றும் ஒளிப்பதிவு அனுபவத்துடன், உங்கள் கதையை தனித்துவமாக்கும் உண்மையான உணர்வுகளையும் நெருக்கமான தருணங்களையும் பதிவு செய்வதில் நிபுணத்துவம் பெற்றுள்ளேன். தொழில்நுட்பத் திறமையையும் கலை நோக்கையும் இணைத்து காலத்தை வென்ற படங்களையும் சினிமா போன்ற காட்சிகளையும் உருவாக்குகிறேன்.',
    para2:
      'சிறு உருவப்படங்கள் முதல் பெரிய கொண்டாட்டங்கள் வரை, முழு திருமண படங்கள் முதல் சமூக ஊடகக் காட்சிகள் வரை, ஒவ்வொரு தருணமும் கவனத்துடனும் படைப்பாற்றலுடனும் நுணுக்கமான பார்வையுடனும் பாதுகாக்கப்பட வேண்டியது. தலைமுறைகள் தாண்டி நினைவில் நிற்கும் காட்சிகளை உருவாக்க உதவுகிறேன்.',
    leadPhotographer: 'முதன்மை புகைப்படக் கலைஞர்',
    stats: {
      sessions: 'முடிக்கப்பட்ட நிகழ்வுகள்',
      clients: 'மகிழ்ச்சியான வாடிக்கையாளர்கள்',
      experience: 'ஆண்டுகள் அனுபவம்',
      satisfaction: 'வாடிக்கையாளர் திருப்தி',
    },
  },
  services: {
    photoHeading: 'புகைப்பட சேவைகள்',
    photoSubtitle:
      'உங்கள் மிக விலையுயர்ந்த தருணங்களை கலை நயத்துடனும் கவனத்துடனும் பதிவு செய்ய வடிவமைக்கப்பட்ட தொழில்முறை புகைப்பட சேவைகள்.',
    videoHeading: 'ஒளிப்பதிவு சேவைகள்',
    videoSubtitle:
      'உங்கள் கதைகளை உயிர்ப்பிக்கும் சினிமா படங்கள் — முழு திருமண படங்கள் முதல் சமூக ஊடகக் காட்சிகள் வரை.',
    learnMore: 'மேலும் அறிய',
    photography: [
      {
        title: 'திருமண புகைப்படம்',
        description: 'உங்கள் காதல் கதையை சொல்லும் பாரம்பரிய மற்றும் இயல்பான புகைப்படங்களுடன் உங்கள் சிறப்பு நாளைப் பதிவு செய்யுங்கள்.',
        price: 'தொடக்க விலை ₹20,000',
        features: ['முழு நாள் கவரேஜ்', 'காண்டிட் + பாரம்பரியம்', '500+ எடிட் செய்யப்பட்ட புகைப்படங்கள்', 'பிரீமியம் புகைப்பட ஆல்பம்'],
      },
      {
        title: 'உருவப்பட நிகழ்வுகள்',
        description: 'உங்கள் ஆளுமையை வெளிப்படுத்தும் தொழில்முறை ஹெட்ஷாட்ஸ் மற்றும் குடும்ப உருவப்படங்கள்.',
        price: 'தொடக்க விலை ₹6,000',
        features: ['1-2 மணி நேர நிகழ்வு', '30+ எடிட் செய்யப்பட்ட புகைப்படங்கள்', 'பல உடை மாற்றங்கள்', 'உயர்தர டிஜிட்டல் கோப்புகள்'],
      },
      {
        title: 'கருவுற்ற கால & குழந்தைப் புகைப்படம்',
        description: 'புதிய வாழ்வையும் வளரும் குடும்பங்களையும் கொண்டாடும் மென்மையான, கலை நயமுள்ள புகைப்படங்கள்.',
        price: 'தொடக்க விலை ₹10,000',
        features: ['ஸ்டுடியோவில் அல்லது வெளியில்', 'ப்ராப்ஸ் உள்ளடக்கம்', '40+ எடிட் செய்யப்பட்ட புகைப்படங்கள்', 'அதே நாளில் முன்னோட்டம்'],
      },
      {
        title: 'கார்ப்பரேட் நிகழ்வுகள்',
        description: 'வணிகங்கள், மாநாடுகள் மற்றும் கார்ப்பரேட் கூட்டங்களுக்கான தொழில்முறை நிகழ்வு கவரேஜ்.',
        price: 'தொடக்க விலை ₹20,000',
        features: ['முழு நிகழ்வு கவரேஜ்', 'அதே நாள் வழங்கல்', 'உயர்தர கோப்புகள்', 'பயன்பாட்டு உரிமை'],
      },
      {
        title: 'சிறப்பு நிகழ்ச்சிகள்',
        description: 'பிறந்தநாள், சீமந்தம், திருமண நினைவுநாள், கிரஹப்பிரவேசம் மற்றும் முக்கிய கொண்டாட்டங்களை அழகாக பதிவு செய்கிறோம்.',
        price: 'தொடக்க விலை ₹12,000',
        features: ['3-4 மணி நேர கவரேஜ்', '100+ எடிட் செய்யப்பட்ட புகைப்படங்கள்', 'குழு மற்றும் காண்டிட் காட்சிகள்', 'ஆன்லைன் கேலரி'],
      },
      {
        title: 'வெளியிட நிகழ்வுகள்',
        description: 'திருமணங்கள், ப்ரீ-வெட்டிங் ஷூட்ஸ் மற்றும் விடுமுறை நினைவுகளுக்கான பயண புகைப்படம்.',
        price: 'தனிப்பயன் விலை',
        features: ['பயணம் உள்ளடக்கம்', 'பல இடங்கள்', 'நீட்டிக்கப்பட்ட கவரேஜ்', 'தனிப்பயன் தொகுப்புகள்'],
      },
    ],
    videography: [
      {
        title: 'திருமண சினிமாட்டோகிராஃபி',
        description: 'உங்கள் சிறப்பு நாளின் ஒவ்வொரு உணர்வு, சடங்கு மற்றும் இயல்பான தருணத்தையும் பதிவு செய்யும் சினிமா போன்ற திருமண படங்கள்.',
        price: 'தொடக்க விலை ₹15,000',
        features: ['முழு நாள் கவரேஜ்', '4-5 நிமிட ஹைலைட் ஃபிலிம்', 'முழு சடங்கு ஃபூட்டேஜ்', '4K தெளிவுத்திறன்'],
      },
      {
        title: 'ப்ரீ-வெட்டிங் ஃபிலிம்',
        description: 'நிச்சயதார்த்தம், சேவ்-த-டேட் அழைப்புகள் மற்றும் ஆண்டு நினைவுகளுக்கான காதல் சினிமா படங்கள்.',
        price: 'தொடக்க விலை ₹25,000',
        features: ['அரை-நாள் ஷூட்', '1-2 இடங்கள்', '2-3 நிமிட சினிமா படம்', 'இசை & கலர் கிரேடிங்'],
      },
      {
        title: 'நிகழ்வு ஒளிப்பதிவு',
        description: 'பிறந்தநாள் கொண்டாட்டங்கள், சீமந்தம், கார்ப்பரேட் நிகழ்வுகள் மற்றும் முக்கிய கொண்டாட்டங்களின் வீடியோ பதிவு.',
        price: 'தொடக்க விலை ₹18,000',
        features: ['3-4 மணி நேர கவரேஜ்', 'ஹைலைட் ரீல்', 'முழு நிகழ்வு ஃபூட்டேஜ்', 'அதே வார வழங்கல்'],
      },
      {
        title: 'ஃபங்க்ஷன்ஸ் & வருடாந்திர நிகழ்வுகள்',
        description: 'பள்ளி மற்றும் கல்லூரி ஆண்டுவிழாக்கள், பட்டமளிப்பு விழாக்கள், கிரஹப்பிரவேசம் மற்றும் சமூக கொண்டாட்டங்கள்.',
        price: 'தொடக்க விலை ₹15,000',
        features: ['பல கேமரா கவரேஜ்', 'மேடை + பார்வையாளர் காட்சிகள்', 'உரைகள் & நிகழ்ச்சிகள்', 'ஹைலைட் ஃபிலிம் + முழு ஃபூட்டேஜ்'],
      },
      {
        title: 'கருவுற்ற கால & குழந்தை ஃபிலிம்',
        description: 'புதிய வாழ்வைக் கொண்டாடும் மென்மையான சினிமா படங்கள் — கர்ப்ப காலம் முதல் முதல் ஆண்டு வரை.',
        price: 'தொடக்க விலை ₹15,000',
        features: ['ஸ்டுடியோவில் அல்லது வெளியில்', '2-3 நிமிட சினிமா படம்', 'இசை & கலர் கிரேடிங்', 'முழு ரா ஃபூட்டேஜ்'],
      },
      {
        title: 'கார்ப்பரேட் ஃபிலிம்ஸ்',
        description: 'வணிகங்கள் மற்றும் நிறுவனங்களுக்கான பிராண்ட் ஃபிலிம்ஸ், பயிற்சி வீடியோக்கள், தயாரிப்பு காட்சிகள் மற்றும் உள் தொடர்புகள்.',
        price: 'தொடக்க விலை ₹25,000',
        features: ['ப்ரீ-புரொடக்ஷன் திட்டமிடல்', 'பல கேமரா அமைப்பு', 'நேர்காணல்கள் & பி-ரோல்', 'முழு போஸ்ட்-புரொடக்ஷன்'],
      },
    ],
  },
  portfolio: {
    title: 'எங்கள் படைப்புகள்',
    subtitle:
      'எங்கள் கேமராவின் வழியாக வாழ்வின் விலையுயர்ந்த தருணங்களைப் பதிவு செய்கிறோம் — பாரம்பரிய சடங்குகள் முதல் நெருக்கமான குடும்ப உருவப்படங்கள் வரை.',
    categories: ['அனைத்தும்', 'திருமணம்', 'குடும்பம்', 'கருவுற்ற காலம்', 'உருவப்படம்', 'குழந்தைகள்', 'சிசு', 'பிறந்த குழந்தை'],
    items: [
      { category: 'திருமணம்', title: 'பாரம்பரிய திருமண சடங்கு' },
      { category: 'திருமணம்', title: 'நெருக்கமான திருமண தருணங்கள்' },
      { category: 'குடும்பம்', title: 'மகிழ்வான குழந்தைகள் உருவப்படம்' },
      { category: 'குடும்பம்', title: 'பாரம்பரிய குடும்பக் கூட்டம்' },
      { category: 'கருவுற்ற காலம்', title: 'எதிர்பார்ப்பின் மகிழ்ச்சி — படைப்பாற்றல் காட்சி' },
      { category: 'கருவுற்ற காலம்', title: 'அழகான கருவுற்ற கால நிகழ்வு' },
      { category: 'திருமணம்', title: 'மணப்பெண் உருவப்படம்' },
      { category: 'குழந்தைகள்', title: 'படைப்பாற்றல் குழந்தைகள் புகைப்படம்' },
      { category: 'திருமணம்', title: 'ப்ரீ-வெட்டிங் காதல்' },
      { category: 'சிசு', title: 'பாரம்பரிய சிசு உருவப்படம்' },
      { category: 'உருவப்படம்', title: 'தந்தை & மகன் பாசம்' },
      { category: 'பிறந்த குழந்தை', title: 'அமைதியான பிறந்த குழந்தை நிகழ்வு' },
    ],
    showing: (visible, total, category) =>
      category
        ? `மொத்தம் ${total} படங்களில் ${visible}, "${category}" வகையில் காட்டப்படுகின்றன`
        : `மொத்தம் ${total} படங்களில் ${visible} காட்டப்படுகின்றன`,
    closeLightbox: 'மூடு',
    prevImage: 'முந்தைய படம்',
    nextImage: 'அடுத்த படம்',
    counter: (current, total) => `${total}-ல் ${current}`,
  },
  testimonials: {
    heading: 'எங்கள் வாடிக்கையாளர்கள் சொல்வது',
    subtitle:
      'எங்கள் சொல்லை மட்டும் நம்ப வேண்டாம். மீரா ஸ்டுடியோவுடனான தங்கள் அனுபவம் குறித்து எங்கள் வாடிக்கையாளர்கள் சொல்வது இதோ.',
    items: [
      {
        name: 'கார்த்திக் & பிரியா',
        role: 'திருமண வாடிக்கையாளர்கள், பர்கூர்',
        text: 'மாதையன் சாரும் அவரது குழுவும் எங்கள் நிச்சயதார்த்தம் முதல் வரவேற்பு வரை எங்கள் திருமணத்தை பதிவு செய்தனர். தமிழ் திருமணத்திற்குத் தேவையான ஒவ்வொரு காட்சியையும் அவருக்கு நன்றாகத் தெரியும் — முகூர்த்தம், குடும்ப சடங்குகள், எங்கள் தாத்தா பாட்டியுடனான சிறிய தருணங்கள் கூட. ஆல்பம் வெறும் புகைப்படங்கள் அல்ல, எங்கள் குடும்பக் கதை போலவே உள்ளது.',
      },
      {
        name: 'லட்சுமி',
        role: 'குடும்ப உருவப்பட வாடிக்கையாளர், கிருஷ்ணகிரி',
        text: 'எங்களுக்கு ஒரு முறையான குடும்ப உருவப்படம் வேண்டியிருந்தது — இரு குடும்பத்தினரும் ஒரே ஃப்ரேமில், எந்த அவசரமும் இல்லாமல். செஷன் நன்றாகத் திட்டமிடப்பட்டிருந்தது, ஒரே அமர்வில் பல குழு அமைப்புகள் கவர் செய்யப்பட்டன, எங்கள் ஹாலுக்கான இறுதி அச்சுகள் அழகாக வந்தன. சில ஆண்டுகளுக்கு ஒருமுறை செய்ய மதிப்புள்ளது.',
      },
      {
        name: 'செந்தில் குமார்',
        role: 'கார்ப்பரேட் வாடிக்கையாளர், சேலம்',
        text: 'சேலத்தில் எங்கள் நிறுவன ஆண்டுவிழாவிற்காக மீரா ஸ்டுடியோவை முன்பதிவு செய்தோம். எடிட் செய்யப்பட்ட புகைப்படங்கள் அதே வாரத்தில் வழங்கப்பட்டன, அனைத்தும் கலர் கரெக்ட் செய்யப்பட்டு எங்கள் LinkedIn பதிவுகள் மற்றும் உள் செய்திமடலுக்குத் தயாராக இருந்தன. குழு தொழில்முறை, சரியான நேரத்தில், கிடைத்த தரத்திற்கான விலை மிகவும் நியாயமானது.',
      },
      {
        name: 'திவ்யா & அருண்',
        role: 'கருவுற்ற கால வாடிக்கையாளர்கள், சென்னை',
        text: 'எங்கள் வளைகாப்பு மற்றும் கருவுற்ற கால ஷூட்டிற்காக மாதையன் சென்னை வரை வந்தார். கேமராவின் முன் இருப்பதைப் பற்றி நான் பதற்றமாக இருந்தேன், ஆனால் முழு செஷனையும் அவர் இயல்பாக மாற்றினார். முடிவுகள் மென்மையாகவும், இயல்பாகவும், எங்களைப் போலவே இருந்தன. பிறந்த குழந்தை ஷூட்டிற்கும் ஏற்கனவே அவரை முன்பதிவு செய்துவிட்டோம்.',
      },
      {
        name: 'அனிதா',
        role: 'உருவப்பட வாடிக்கையாளர், திருப்பத்தூர்',
        text: 'எனது கல்லூரி விண்ணப்பங்கள் மற்றும் திருமணத் தகவல்களுக்காக தொழில்முறை ஹெட்ஷாட்ஸ் தேவைப்பட்டது. அவர்கள் இரண்டு சூழல்களையும் புரிந்துகொண்டு ஒரே செஷனில் இரண்டு முற்றிலும் வேறுபட்ட தொகுப்புகளை எனக்குக் கொடுத்தனர். இவை ஒரே நபர் என்று நண்பர்களால் நம்ப முடியவில்லை — அந்தளவு வெளிச்சம் மற்றும் ஸ்டைலிங் சிறப்பாக இருந்தது.',
      },
      {
        name: 'ராஜேஷ் & மீனா',
        role: 'திருமண நினைவு வாடிக்கையாளர்கள், தர்மபுரி',
        text: 'எங்கள் முதல் திருமண நினைவு நாளுக்காக ஒரு சிறிய தம்பதி ஷூட் வேண்டியிருந்தது — அதிக சம்பிரதாயம் இல்லாமல். மாதையன் தர்மபுரி வரை வந்து, ஒரு நல்ல வெளிப்புற இடத்தைத் தேர்ந்தெடுத்து, முழு செஷனிலும் எங்களைச் சிரிக்க வைத்தார். போஸ் செய்தவற்றை விட இயல்பான காட்சிகள் மிகவும் சிறப்பாக வந்தன. ஒவ்வொரு ஆண்டும் அவரை முன்பதிவு செய்யத் திட்டமிட்டுள்ளோம்.',
      },
    ],
  },
  contact: {
    heading: 'ஒன்றாக ஏதாவது அழகான ஒன்றை உருவாக்குவோம்',
    subtitle:
      'உங்கள் சிறப்புத் தருணங்களைப் பதிவு செய்ய தயாரா? உங்கள் புகைப்படத் தேவைகளைப் பற்றி பேச எங்களைத் தொடர்பு கொள்ளுங்கள், உங்கள் கனவை உயிர்ப்பிப்போம்.',
    getInTouch: 'தொடர்பில் இருங்கள்',
    sendMessage: 'எங்களுக்கு செய்தி அனுப்புங்கள்',
    phone: 'தொலைபேசி',
    email: 'மின்னஞ்சல்',
    location: 'இடம்',
    hours: 'நேரம்',
    hoursText: 'திங்கள் – சனிக்கிழமை: காலை 8:00 – இரவு 8:00\nஞாயிற்றுக்கிழமை: காலை 10:00 – இரவு 8:00',
    addressText: '325, BCL வளாகம், 1வது மாடி, பேருந்து நிலையம் எதிரே\nபர்கூர், கிருஷ்ணகிரி, தமிழ்நாடு - 635104',
    followUs: 'எங்களைப் பின்தொடருங்கள்',
    fullName: 'முழுப் பெயர் *',
    fullNamePlaceholder: 'உங்கள் பெயர்',
    emailAddress: 'மின்னஞ்சல் முகவரி *',
    phoneNumber: 'தொலைபேசி எண்',
    serviceType: 'சேவை வகை *',
    selectService: 'ஒரு சேவையைத் தேர்ந்தெடுக்கவும்',
    photographyGroup: 'புகைப்படம்',
    videographyGroup: 'ஒளிப்பதிவு',
    photoVideoCombo: 'புகைப்படம் + வீடியோ ஒன்றாக',
    serviceOptions: {
      wedding: 'திருமண புகைப்படம்',
      portrait: 'உருவப்பட நிகழ்வு',
      maternity: 'கருவுற்ற கால & குழந்தைப் புகைப்படம்',
      corporate: 'கார்ப்பரேட் நிகழ்வு புகைப்படம்',
      special: 'சிறப்பு நிகழ்ச்சிகள்',
      destination: 'வெளியிட நிகழ்வுகள்',
      weddingVideo: 'திருமண சினிமாட்டோகிராஃபி',
      preWeddingFilm: 'ப்ரீ-வெட்டிங் ஃபிலிம்',
      eventVideo: 'நிகழ்வு ஒளிப்பதிவு',
      functions: 'ஃபங்க்ஷன்ஸ் & வருடாந்திர நிகழ்வுகள்',
      maternityVideo: 'கருவுற்ற கால & குழந்தை ஃபிலிம்',
      corporateVideo: 'கார்ப்பரேட் ஃபிலிம்ஸ்',
    },
    preferredDate: 'விரும்பும் தேதி',
    messageLabel: 'செய்தி *',
    messagePlaceholder: 'உங்கள் புகைப்படத் தேவைகள் பற்றி சொல்லுங்கள்...',
    sendBtn: 'செய்தி அனுப்பு',
    sendingBtn: 'அனுப்புகிறேன்...',
    successMsg:
      'நன்றி! உங்கள் செய்தி அனுப்பப்பட்டது. WhatsApp சாளரமும் திறக்கப்பட்டது — உடனே எங்களை அடைய அங்கு Send-ஐ அழுத்துங்கள்.',
    errorMsg: 'ஏதோ தவறு நடந்துவிட்டது. மீண்டும் முயற்சி செய்யுங்கள், அல்லது நேரடியாக +91 9842697382-ல் அழைக்கவும்.',
  },
  footer: {
    tagline:
      'கலை நயத்துடனும், ஆர்வத்துடனும், காலத்தை வென்ற நேர்த்தியுடனும் வாழ்வின் அழகிய தருணங்களைப் பதிவு செய்கிறோம். தொழில்முறை புகைப்படம் மற்றும் ஒளிப்பதிவு வழியாக வாழ்நாள் முழுவதும் நீடிக்கும் நினைவுகளை உருவாக்குகிறோம்.',
    servicesHeading: 'சேவைகள்',
    contactHeading: 'தொடர்பு',
    serviceLinks: [
      'திருமண புகைப்படம்',
      'திருமண சினிமாட்டோகிராஃபி',
      'ப்ரீ-வெட்டிங் ஃபிலிம்ஸ்',
      'கருவுற்ற கால & குழந்தைப் புகைப்படம்',
      'நிகழ்வு புகைப்படம் + வீடியோ',
      'ஆண்டுவிழாக்கள் & ஃபங்க்ஷன்ஸ்',
    ],
    copyright: (year) => `© ${year} மீரா ஸ்டுடியோ. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`,
    privacy: 'தனியுரிமைக் கொள்கை',
    terms: 'சேவை நிபந்தனைகள்',
    cookies: 'குக்கீ கொள்கை',
  },
  toggle: {
    switchTo: 'EN',
  },
  brand: 'மீரா ஸ்டுடியோ',
};

export const translations: Record<Language, Translation> = { en, ta };
