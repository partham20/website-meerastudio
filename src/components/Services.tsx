import React from 'react';
import { Heart, Users, Briefcase, Baby, Sparkles, MapPin, Video, Film, PlayCircle, GraduationCap, LucideIcon } from 'lucide-react';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  features: string[];
};

export default function Services() {
  const photographyServices: Service[] = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capture your special day with traditional and candid imagery that tells your love story.',
      price: 'Starting at ₹75,000',
      features: ['Full day coverage', 'Candid + traditional', '500+ edited photos', 'Premium photo album']
    },
    {
      icon: Users,
      title: 'Portrait Sessions',
      description: 'Professional headshots and family portraits that showcase your personality.',
      price: 'Starting at ₹6,000',
      features: ['1-2 hour session', '30+ edited photos', 'Multiple outfit changes', 'High-res digital files']
    },
    {
      icon: Baby,
      title: 'Maternity & Newborn',
      description: 'Gentle, artistic photography celebrating new life and growing families.',
      price: 'Starting at ₹10,000',
      features: ['In-studio or outdoor', 'Props included', '40+ edited photos', 'Same-day previews']
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional event coverage for businesses, conferences, and corporate gatherings.',
      price: 'Starting at ₹20,000',
      features: ['Full event coverage', 'Same-day delivery', 'High-resolution files', 'Usage rights']
    },
    {
      icon: Sparkles,
      title: 'Special Occasions',
      description: 'Birthdays, baby showers, anniversaries, house warming functions and milestone celebrations captured beautifully.',
      price: 'Starting at ₹12,000',
      features: ['3-4 hours coverage', '100+ edited photos', 'Group and candid shots', 'Online gallery']
    },
    {
      icon: MapPin,
      title: 'Destination Sessions',
      description: 'Travel photography for weddings, pre-wedding shoots, and vacation memories.',
      price: 'Custom pricing',
      features: ['Travel included', 'Multiple locations', 'Extended coverage', 'Custom packages']
    }
  ];

  const videographyServices: Service[] = [
    {
      icon: Video,
      title: 'Wedding Cinematography',
      description: 'Cinematic wedding films capturing every emotion, ritual and candid moment of your big day.',
      price: 'Starting at ₹65,000',
      features: ['Full day coverage', '4-5 min highlight film', 'Full ceremony footage', '4K resolution']
    },
    {
      icon: Film,
      title: 'Pre-Wedding Film',
      description: 'Romantic cinematic films for engagements, save-the-date invites and anniversaries.',
      price: 'Starting at ₹25,000',
      features: ['Half-day shoot', '1-2 locations', '2-3 min cinematic film', 'Music & colour grading']
    },
    {
      icon: PlayCircle,
      title: 'Event Videography',
      description: 'Birthday parties, baby showers, corporate events and milestone celebrations captured on film.',
      price: 'Starting at ₹18,000',
      features: ['3-4 hours coverage', 'Highlight reel', 'Full event footage', 'Same-week delivery']
    },
    {
      icon: GraduationCap,
      title: 'Functions & Annual Days',
      description: 'School and college annual days, graduation ceremonies, house warming functions and community celebrations.',
      price: 'Starting at ₹15,000',
      features: ['Multi-camera coverage', 'Stage + audience shots', 'Speeches & performances', 'Highlight film + full footage']
    }
  ];

  const renderCard = (service: Service, index: number) => {
    const IconComponent = service.icon;
    return (
      <div key={index} className="group bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amber-200">
        <div className="bg-amber-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
          <IconComponent className="h-8 w-8 text-black" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

        <div className="text-2xl font-bold text-amber-600 mb-4">{service.price}</div>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-gray-600 flex items-center">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>

        <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-200 font-semibold">
          Learn More
        </button>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Photography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional photography services tailored to capture your most precious moments with artistry and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photographyServices.map(renderCard)}
        </div>

        <div className="text-center mt-24 mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Videography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cinematic films that bring your stories to life — from full wedding films to short social reels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videographyServices.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
